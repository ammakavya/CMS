import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Attendence from '../components/Attendence';
import Grades from '../components/Grades'; // Uncomment the import
import Courses from '../components/Courses';

const StudentDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('Attendence');

    const handleTabChange = (event, newValue) => {
        setSelectedSection(newValue);
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'Attendence':
                return <Attendence />;
            case 'Grades':
                return <Grades />;
            case 'Courses':
                return <Courses />;
            default:
                return <Attendence />; // Default case
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
                    <Tab  sx={{fontWeight:'bold',fontSize:'18px'}} label="Attendence" value="Attendence" />
                    <Tab sx={{fontWeight:'bold',fontSize:'18px'}} label="Grades" value="Grades" />
                    <Tab sx={{fontWeight:'bold',fontSize:'18px'}} label="Courses" value="Courses" />
                </Tabs>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {renderContent()}
            </Box>
        </>
    );
};

export default StudentDashboard;
