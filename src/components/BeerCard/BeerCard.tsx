import { IconButton, ImageListItemBar } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { BeerModel } from '../../core/domain/beer/models';
import './styles.css';

interface BeerCardProps {
  item: BeerModel,
  navigate: (url:string) => void
}

const BeerCard = ({ item, navigate }:BeerCardProps):React.ReactElement => {
  return (
    <article className='card'>
      <img
        className="card__image"
        src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
        srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
      <ImageListItemBar
        position="top"
        title={item.name}
        subtitle={item.tagline}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${item.name}`}
            onClick={() => navigate(`/beer/${item.id}`)}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </article>
  );
};

export default BeerCard;
