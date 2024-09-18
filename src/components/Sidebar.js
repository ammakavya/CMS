import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ userRole, open, toggleSidebar }) => {
  console.log('Sidebar rendered with userRole:', userRole); // Debugging

  const renderSidebarItems = () => {
    if (typeof userRole !== 'string' || !userRole) {
      console.error('userRole is not a valid string:', userRole);
      return null;
    }

    switch (userRole) {
      case 'student':
        return (
          <>
            <ListItem button component={Link} to="/student-dashboard">
              <ListItemText primary=" Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/courses">
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button component={Link} to="/attendence">
              <ListItemText primary="Attendence" />
            </ListItem>
            <ListItem button component={Link} to="/grades">
              <ListItemText primary="Grades" />
            </ListItem>
          </>
        );
      case 'faculty':
        return (
          <>
            <ListItem button component={Link} to="/faculty-dashboard">
              <ListItemText primary="Faculty Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/students">
              <ListItemText primary="Manage Students" />
            </ListItem>
            <ListItem button component={Link} to="/courses">
              <ListItemText primary="Courses" />
            </ListItem>
          </>
        );
     
       
        
      default:
        return null;
    }
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <List>
        {renderSidebarItems()}
      </List>
    </Drawer>
  );
};

export default Sidebar;
