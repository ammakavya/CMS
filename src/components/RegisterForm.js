import React, { useState } from 'react';
import { Button, TextField, Typography, Box, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ setUserRole }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userRole, setUserRoleLocal] = useState('student'); // Default to student
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        setError('');

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Store the user data in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.username === username);

        if (userExists) {
            setError('Username already exists');
            return;
        }

        const newUser = { username, email, password, role: userRole };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Set the user role and navigate to the appropriate dashboard
        localStorage.setItem('userRole', userRole);
        setUserRole(userRole);
   
        if (userRole === 'admin') {
            navigate('/admin-dashboard');
        } 
      else  if (userRole === 'student') {
            navigate('/student-dashboard');
        } else if (userRole === 'faculty') {
            navigate('/faculty-dashboard');
        }
    };

    return (
        <Box sx={{ display: 'flex', width: '500px', height: '600px', flexDirection: 'column', alignItems: 'center', ml: '35%', mt: 5, borderRadius: '20px', border: 2 }}>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!error}
            />
            <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}
            />
            <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!error}
            />
            <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Register as</FormLabel>
                <RadioGroup
                    value={userRole}
                    onChange={(e) => setUserRoleLocal(e.target.value)}
                >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="faculty" control={<Radio />} label="Faculty" />
                    <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                </RadioGroup>
            </FormControl>
            {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {error}
                </Typography>
            )}
            <Button
                variant="contained"
                onClick={handleRegister}
                sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}
            >
                Register
            </Button>
        </Box>
    );
};

export default RegisterForm;
