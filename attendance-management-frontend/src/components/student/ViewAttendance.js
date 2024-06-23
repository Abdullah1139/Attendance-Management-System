import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewAttendance.css';


const ViewAttendance = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAttendanceRecords = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/attendance/all');
                setAttendanceRecords(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching attendance records:', error);
                setLoading(false);
            }
        };

        fetchAttendanceRecords();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>View Attendance</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Topic of Discussion</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record, index) => (
                        <tr key={index}>
                            <td>{new Date(record.date).toLocaleDateString()}</td>
                            <td>{record.topic}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAttendance;
