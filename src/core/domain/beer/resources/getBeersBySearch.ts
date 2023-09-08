import axios, { AxiosRequestConfig } from 'axios';
import { beerListPayloadToBeerListModel } from '../mapper/index';
import { BeerModel } from '../models/index';

const host = 'https://api.punkapi.com';

const getUrl = (host: string): string => `${host}/v2/beers`;

export const GetBeersListBySearch = async (
  searchValue: string,
): Promise<BeerModel[] | undefined> => {
  const searchParams = searchValue === '' ? '' : { beer_name: searchValue };
  try {
    const url = getUrl(host);
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
      params: searchParams,
      timeout: 10000,
    };

    const { data } = await axios(options);
    return beerListPayloadToBeerListModel(data);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(`${e.message}`);
    }
  }
};
