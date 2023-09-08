import axios, { AxiosRequestConfig } from 'axios';
import { beerPayloadToModel } from '../mapper';
import { BeerModel } from '../models';

const host = 'https://api.punkapi.com';

const getUrl = (host: string, id: string): string => `${host}/v2/beers/${id}`;

export const GetBeerDetail = async (
  id: string,
): Promise<BeerModel | undefined> => {
  try {
    const url = getUrl(host, id);
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
      timeout: 10000,
    };

    const { data } = await axios(options);
    return beerPayloadToModel(data[0]);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(`${e.message}`);
    }
  }
};
