import { useEffect, useState } from 'react';
import genresApiService from '../service/genresApiService';

const useGenres = () => {
    const [genres, setgenres] = useState([]);

    const getgenres = async () => {
        const data = await genresApiService.getAll();
        setgenres(data ?? []);
    };

    useEffect(() => {
        getgenres();
    }, []);

    return {
        genres,
    };
};

export default useGenres;
