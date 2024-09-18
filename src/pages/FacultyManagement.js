import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const mockFaculty = [
  { id: 1, name: 'Dr. Alice Johnson', email: 'alice@university.com', department: 'Physics' },
  { id: 2, name: 'Dr. Bob Williams', email: 'bob@university.com', department: 'Chemistry' },
];

const FacultyManagement = () => {
  const [faculty, setFaculty] = useState(mockFaculty);
  const [open, setOpen] = useState(false);
  const [newFaculty, setNewFaculty] = useState({ id: '', name: '', email: '', department: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({ ...newFaculty, [name]: value });
  };

  const handleAddFaculty = () => {
    setFaculty([...faculty, { ...newFaculty, id: faculty.length + 1 }]);
    handleClose();
  };

  const handleDelete = (id) => {
    setFaculty(faculty.filter(member => member.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Manage Faculty
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleOpen}>
        Add Faculty
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faculty.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(member.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Faculty Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Faculty</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={newFaculty.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={newFaculty.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Department"
            name="department"
            fullWidth
            value={newFaculty.department}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddFaculty} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FacultyManagement;
