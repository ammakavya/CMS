import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const FacultyDashboard = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // Retrieve the current user from localStorage
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Welcome, {userData.username || 'User'}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Role: {userData.role || 'N/A'}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Email: {userData.email || 'N/A'}
            </Typography>
        </Box>
    );
};

export default FacultyDashboard;
