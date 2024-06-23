import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    topic: { type: String, required: true },
    status: { type: String, required: true, enum: ['present', 'absent'] }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;
