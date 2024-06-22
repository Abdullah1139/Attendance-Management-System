// LeaveRequest model (models/LeaveRequest.js)
const mongoose = require('mongoose');
const LeaveRequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
});
module.exports = mongoose.model('LeaveRequest', LeaveRequestSchema);
