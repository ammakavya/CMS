import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import FacultyManagement from './FacultyManagement';
import CoursesManagement from './CoursesManagement';
import StudentManagement from './StudentManagement';

const AdminDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('Students');

    const handleTabChange = (event, newValue) => {
        setSelectedSection(newValue);
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'Students':
                return <StudentManagement />;
            case 'Courses':
                return <CoursesManagement />;
            case 'Faculty':
                return <FacultyManagement />;
            default:
                return <StudentManagement />;
        }
    };

    return (
        <>
            <Box sx={{ margin: '2%'  }}>
                <Tabs 
                    value={selectedSection}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab  sx={{fontWeight:'bold',fontSize:'18px'}} label="Students" value="Students" />
                    <Tab sx={{fontWeight:'bold',fontSize:'18px'}} label="Courses" value="Courses" />
                    <Tab sx={{fontWeight:'bold',fontSize:'18px'}} label="Faculty" value="Faculty" />
                </Tabs>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {renderContent()}
            </Box>
        </>
    );
};

export default AdminDashboard;
