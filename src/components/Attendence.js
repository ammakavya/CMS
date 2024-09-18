import { Box, Table, TableBody, TableCell, TableRow, Typography,TableContainer,Paper,TableHead } from '@mui/material';
import React from 'react';

const Attendance = () => {
    // Mock attendance data for the student
    const attendanceData = [
        { course: 'Mathematics', attendance: '90%' ,semester: '3rd'},
        { course: 'Physics', attendance: '85%',semester: '3rd' },
        { course: 'computer networks', attendance: '95%' ,semester: '3rd'},
        { course: 'C++', attendance: '75%' ,semester: '3rd'},
        { course: 'java', attendance: '65%' ,semester: '3rd'},
    ];

    return (
      <div>
      <Typography variant="h5" gutterBottom>
        My Attendence
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Courses</TableCell>
              <TableCell>Attendence</TableCell>  
              <TableCell>Semester</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((item) => (
              <TableRow key={item.course}>
                <TableCell>{item.course}</TableCell>
                <TableCell>{item.attendance}</TableCell>
               
                <TableCell>{item.semester}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
};

export default Attendance;

