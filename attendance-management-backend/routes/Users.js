import express from 'express';
import {User,validate} from '../models/Users.js';
import bcrypt from 'bcrypt'

const router=express.Router();
router.post('/',async(req,res)=>{
    try{
        const{error}=validate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message})
        }
        const user=await User.findOne({email: req.body.email});
        if(user){
            return res.status(409).send({message:'This Email is already registered. Try Another'})
        }
        const salt=await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword=await bcrypt.hash(req.body.password,salt);

        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({message:'User Created Successfully'})

    }catch(error){
        res.status(500).send({message:'Internal Server Error'})
    }
})

// GET /api/profile
router.get('/profile', async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

export default router;