import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)', // Adjust the height if you have a fixed header
  },
  tableCard: {
    width: '80%',
    maxWidth: 800,
  },
}));

const Table = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 350 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <button
          onClick={() => handleEditClick(params.row)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue' }}
        >
          Edit
        </button>
      ),
    },
  ];

  const handleEditClick = (row) => {
    navigate(`/edit/${row.id}`, { state: { row } });
  };

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.tableCard}>
          <CardContent>
            <h2>User Data</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Table;
