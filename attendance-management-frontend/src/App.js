import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';
import StudentDashboard from './components/student/Dashboard';

const App = () => {
    return (
            <div>
                <Routes>
                    <Route path="/" element={<AdminLogin />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/studentDashboard/*" element={<StudentDashboard />} />
                </Routes>
            </div>
        
    );
};

export default App;
