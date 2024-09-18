import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Sample initial user data to be stored in localStorage
        const initialUsers = [
            { username: 'admin', password: 'adminpassword', role: 'admin' },
            { username: 'student', password: 'password', role: 'student' },
            { username: 'faculty', password: 'password', role: 'faculty' },
        ];

        // Check if 'users' already exists in localStorage, if not, set it
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(initialUsers));
        }
    }, []); // Empty dependency array ensures this runs only on component mount

    const handleLogin = () => {
        setError('');

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Find user with matching credentials
        const user = users.find((user) => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('userRole', user.role);
            setUserRole(user.role);
            if (user.role === 'admin') {
                navigate('/admin-dashboard');
            } else if (user.role === 'student') {
                navigate('/student-dashboard');
            } else if (user.role === 'faculty') {
                navigate('/faculty-dashboard');
            } else {
                setError('Invalid user role');
            }
        } else {
            setError('Invalid login credentials');
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 'auto',
            mr: 'auto',
            mt: 5,
            borderRadius: '20px',
            border: 2,
            p: 3,
            width: { xs: '90%', sm: '400px', md: '500px' },
            height: 'auto',
        }}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!error}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}
            />
            {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {error}
                </Typography>
            )}
            <Button
                variant="contained"
                onClick={handleLogin}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
                fullWidth
            >
                Login
            </Button>
        </Box>
    );
};

export default Login;
