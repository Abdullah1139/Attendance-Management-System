// middleware/auth.js
import jwt from 'jsonwebtoken';
import { User } from '../models/Users.js'; // Ensure this path is correct

const auth = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(404).send('User not found.');
        
        req.user = user;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};

export default auth;
