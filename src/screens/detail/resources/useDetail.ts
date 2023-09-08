import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetBeerDetail } from '../../../core/domain/beer/resources/getBeerDetail';
import { BeerModel } from '../../../core/domain/beer/models';

const useDetail = () => {
  const { beerId } = useParams();
  const navigate = useNavigate();

  const [beer, setBeer] = useState<BeerModel>();
  const [isLoading, setIsLoading] = useState(false);

  const getDetailData = async () => {
    if (beerId) {
      setIsLoading(true);
      try {
        const response = await GetBeerDetail(beerId);
        if (response) setBeer(response);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return { beer, navigate, isLoading };
};

export default useDetail;
