import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const useMovie = (id?: string) => { 
    const {data, error, isLoading, mutate} =  useSWR(`/api/movies/${id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data, error, isLoading, mutate
    }
 }

 export default useMovie;