/* eslint-disable @typescript-eslint/indent */
import Container from '@mui/material/Container';
import { CircularProgress } from '@mui/material';
import BeerList from '../../components/BeerList/BeerList';
import Header from '../../components/Header/Header';
import useHome from './resources/useHome';

export const HomeScreen = () => {
  const { beersList, onChangeSearch, searchValue, navigate, isLoading } = useHome();

  return (
    <>
      <Header onChangeSearch={onChangeSearch} />
      <Container>
        {
          isLoading
            ? (
            <div className="list__spinner">
              <CircularProgress />
            </div>
              )
            : <BeerList beersList={beersList} navigate={navigate} searchValue={searchValue} />
        }
      </Container>
    </>
  );
};
