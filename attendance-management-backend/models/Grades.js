// Grade model (models/Grade.js)
const mongoose = require('mongoose');
const GradeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    attendancePercentage: { type: Number, required: true },
    grade: { type: String, required: true },
});
module.exports = mongoose.model('Grade', GradeSchema);
