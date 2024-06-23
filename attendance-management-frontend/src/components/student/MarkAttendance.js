import React, { useState } from 'react';
import axios from 'axios';
import './MarkAttendance.css';

const MarkAttendance = () => {
    const [date, setDate] = useState('');
    const [topic, setTopic] = useState('');
    const [status, setStatus] = useState('present');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const attendanceData = {
            date,
            topic,
            status
        };

        try {
            const response = await axios.post('http://localhost:5000/api/attendance/mark', attendanceData);
            setMessage(response.data);
        } catch (error) {
            console.error('Error submitting attendance data:', error);
            setMessage('Failed to mark attendance');
        }

        // Reset form
        setDate('');
        setTopic('');
        setStatus('present');
    };

    return (
        <div className="card">
            <h2>Mark Attendance</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="topic">Topic of Discussion:</label>
                    <input
                        type="text"
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="present"
                                checked={status === 'present'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            Present
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="absent"
                                checked={status === 'absent'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            Absent
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MarkAttendance;
