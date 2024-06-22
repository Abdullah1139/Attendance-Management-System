import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';

const App = () => {
    return (
            <div>
                <Routes>
                    <Route path="/" element={<AdminLogin/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </div>
    );
};

export default App;
