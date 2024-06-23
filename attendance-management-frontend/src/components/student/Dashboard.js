import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCheckSquare, faEye, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import MarkAttendance from './MarkAttendance';
import ViewAttendance from './ViewAttendance';
import ViewGrades from './ViewGrades';
import Profile from './Profile';
import './StudentDashboard.css';

const StudentDashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <ul className="dashboard-menu">
                    <li>
                        <Link to="profile">
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="mark-attendance">
                            <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                            Mark Attendance
                        </Link>
                    </li>
                    <li>
                        <Link to="view-attendance">
                            <FontAwesomeIcon icon={faEye} className="icon" />
                            View Attendance
                        </Link>
                    </li>
                    <li>
                        <Link to="view-grades">
                            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                            View Grades
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="dashboard-content">
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path="mark-attendance" element={<MarkAttendance />} />
                    <Route path="view-attendance" element={<ViewAttendance />} />
                    <Route path="view-grades" element={<ViewGrades />} />
                </Routes>
            </div>
        </div>
    );
};

export default StudentDashboard;
