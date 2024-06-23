import express from 'express';
import Attendance from '../models/Attendance.js';

const router = express.Router();

router.post('/mark', async (req, res) => {
    const { date, topic, status } = req.body;

    if (!date || !topic || !status) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const attendance = new Attendance({ date, topic, status });
        await attendance.save();
        res.status(201).send('Attendance marked successfully!');
    } catch (error) {
        res.status(500).send('Server error');
    }
});
router.get('/all', async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).send('Server error');
    }
})

export default router;
