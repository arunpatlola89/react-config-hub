import React from 'react';
import { Grid, Card, CardContent, Typography, ThemeProvider, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)', // Adjust the height if you have a fixed header
  },
  card: {
    flex: '1 1 300px', // Adjust the max width of the card as needed

    cursor: 'pointer',
  },
}));

const theme = createTheme();

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.cardContainer}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card} onClick={() => handleCardClick('/Table')}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Config Manager
                </Typography>
                <Typography color="textSecondary">
                  Edit config data
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card} onClick={() => handleCardClick('/Table')}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Traffic Manager
                </Typography>
                <Typography color="textSecondary">
                    Manage Release Traffic
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more cards as needed */}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
