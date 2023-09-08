/* eslint-disable indent */
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CircularProgress } from '@mui/material';
import Header from '../../components/Header/Header';
import BeerInfoDetail from '../../components/BeerInfoDetail/BeerInfoDetail';
import useDetail from './resources/useDetail';

export const BeerDetail = (): React.ReactElement => {
  const { beer, navigate, isLoading } = useDetail();

  return (
    <>
      <Header />
      <Container sx={{ marginTop: '90px' }}>
        <Button onClick={() => navigate('/')}>
          <ArrowBackIcon sx={{ marginRight: '5px' }} />
          Back to list
        </Button>
        {isLoading
          ? (
            <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
              <CircularProgress />
            </div>
          )
          : (
            beer && (
              <Grid
                spacing={4}
                container
                justifyContent='center'
                gap='20px'
                component='main'
                marginTop='5px'
              >
                <Grid item xs='auto' md='auto'>
                  <img style={{ height: '500px' }} src={beer.imageUrl} alt={beer.name} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <BeerInfoDetail beer={beer} />
                </Grid>
              </Grid>
            )
          )}
      </Container>
    </>
  );
};
