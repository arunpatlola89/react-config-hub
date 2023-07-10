import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)', // Adjust the height if you have a fixed header
  },
  formContainer: {
    width: '80%',
  },
  formField: {
    marginBottom: 16, // Replace theme.spacing(2) with the actual numeric value (16 is equivalent to spacing 2)
  }
}));

const EditPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { row } = location.state;
  const [editedRow, setEditedRow] = useState(row);

  const handleSave = () => {
    // Add your save logic here
    console.log('Save button clicked');
    console.log('Edited Row:', editedRow);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    setEditedRow((prevRow) => ({
      ...prevRow,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.formContainer}>
        <CardContent>
          <h2>Edit Record</h2>
          <TextField
            name="name"
            label="Name"
            value={editedRow.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            className={classes.formField}
          />
          <TextField
            name="email"
            label="Email"
            value={editedRow.email  }
            onChange={handleInputChange}
            multiline
            fullWidth
            margin="normal"
            className={classes.formField}
          />  
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>

          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditPage;
