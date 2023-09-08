import { Typography } from '@mui/material';
import React from 'react';
import { BeerModel } from '../../core/domain/beer/models';

interface BeerInfoDetailProps {
  beer: BeerModel
}

const BeerInfoDetail = ({ beer }:BeerInfoDetailProps):React.ReactElement => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      <Typography variant='h2' component='h2' fontWeight='700'>
        {beer.name}
      </Typography>
      <Typography variant='h4' component='h3'>
        {beer.tagline}
      </Typography>
      <Typography fontWeight='500' component='h4'>
        DESCRIPTION:
      </Typography>
      <Typography>{beer.description}</Typography>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <Typography fontWeight='500' component='h4'>
          INGREDIENTS:
        </Typography>
        <section>
          <Typography fontWeight='500' component='h5'>
            Hops:
          </Typography>
          <ul>
            {beer.ingredients.hops.map((hop, index) => (
              <li key={index}>
                <Typography>{hop.name}</Typography>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Typography fontWeight='500' component='h5'>
            Malt:
          </Typography>
          <ul>
            {beer.ingredients.malt.map((malt, index) => (
              <li key={index}>
                <Typography>{malt.name}</Typography>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Typography fontWeight='500' component='h5'>
            Yeast:
          </Typography>
          <ul>
            <li>
              <Typography>{beer.ingredients.yeast}</Typography>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default BeerInfoDetail;
