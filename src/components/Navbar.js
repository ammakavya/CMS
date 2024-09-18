import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setUserRole }) => {
    const userRole = localStorage.getItem('userRole');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        setUserRole(null);  // Update the user role state in App component
        navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFCC00' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    College Management System
                </Typography>
                {!userRole ? (
                    <>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button>
                    </>
                ) : (
                    <>
                        {userRole === 'student' && (
                            <Button color="inherit" component={Link} to="/student-dashboard">
                                Student Dashboard
                            </Button>
                        )}
                        {userRole === 'faculty' && (
                            <Button color="inherit" component={Link} to="/faculty-dashboard">
                                Faculty Dashboard
                            </Button>
                        )}
                        {userRole === 'admin' && (
                            <Button color="inherit" component={Link} to="/admin-dashboard">
                                Admin Dashboard
                            </Button>
                        )}
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
