import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetBeersList } from '../../../core/domain/beer/resources/getBeersList';
import { BeerModel } from '../../../core/domain/beer/models';
import { GetBeersListBySearch } from '../../../core/domain/beer/resources/getBeersBySearch';

const useHome = () => {
  const [beersList, setBeersList] = useState<BeerModel[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await GetBeersList();
      if (response) setBeersList(response);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getDataBySearch = async () => {
    setIsLoading(true);
    try {
      const response = await GetBeersListBySearch(searchValue);
      if (response) setBeersList(response);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchValue(event.target.value);
    }, 500);
  };

  useEffect(() => {
    getDataBySearch();
  }, [searchValue]);

  return { beersList, onChangeSearch, searchValue, navigate, isLoading };
};

export default useHome;
