import axios, { AxiosRequestConfig } from 'axios';
import { beerListPayloadToBeerListModel } from '../mapper/index';
import { BeerModel } from '../models/index';

const host = 'https://api.punkapi.com';

const getUrl = (host: string): string => `${host}/v2/beers`;

// default return 25 results
export const GetBeersList = async (): Promise<BeerModel[] | undefined> => {
  try {
    const url = getUrl(host);
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
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
