/* eslint-disable @typescript-eslint/indent */
import {
  ImageList,
  ImageListItem,
  ListSubheader,
  Typography,
} from '@mui/material';
import React from 'react';
import { BeerModel } from '../../core/domain/beer/models';
import BeerCard from '../BeerCard/BeerCard';
import './styles.css';

interface BeerListProps {
  searchValue: string;
  beersList: BeerModel[];
  navigate: (url: string) => void;
}

const BeerList = ({
  searchValue,
  beersList,
  navigate,
}: BeerListProps): React.ReactElement => {
  return (
    <ImageList className="list">
      <ImageListItem key="Subheader" className="list__subheader">
        <ListSubheader
          component="div"
          style={{ padding: 0, marginTop: '30px' }}
        >
          December
        </ListSubheader>
      </ImageListItem>
      {searchValue && beersList.length === 0 && (
        <Typography>Sorry, no results found by "{searchValue}".</Typography>
      )}
      {
        beersList.map((item) => (
          <ImageListItem key={item.id} className="list__item">
            <BeerCard item={item} navigate={navigate} />
          </ImageListItem>
        ))
          }
    </ImageList>
  );
};

export default BeerList;
