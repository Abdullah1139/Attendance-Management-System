import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../src/feature/auth/authApiSlice';
import { setCredentials } from '../../src/feature/auth/authSlice';
import './register.css'; // import the CSS file
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [login, { isLoading }] = useLoginMutation();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5000/api/users';
            const { data: res } = await axios.post(url, data);
            const loginResponse = await login({ email: data.email, password: data.password }).unwrap();
            dispatch(setCredentials(loginResponse));
            navigate('/login');
            console.log(res.message);
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <div className='left'>
                    <h1>Welcome Back</h1>
                    <Link to='/login'>
                        <button type='button' className='white-btn'>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className='right'>
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type='text'
                            placeholder='Enter Your First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className='input'
                        />
                        <input
                            type='text'
                            placeholder='Enter Your Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className='input'
                        />
                        <input
                            type='email'
                            placeholder='Enter Your Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className='input'
                        />
                        <input
                            type='password'
                            placeholder='Enter Your Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className='input'
                        />
                        {error && <div className='error-msg'>{error}</div>}
                        <button type='submit' className='green-btn' disabled={isLoading}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
