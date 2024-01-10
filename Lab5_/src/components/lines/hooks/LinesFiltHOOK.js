import { useState } from 'react';
import useGenres from '../../types/hooks/genresHook';

const useTypeFilters = () => {
  const [currentGenreFilter, setCurrentGenreFilter] = useState('');
  const { genres = [] } = useGenres();

  const handleGenreFilterChange = (genreName) => {
    setCurrentGenreFilter(genreName);
  };
  return {
    genres,
    currentGenreFilter,
    handleGenreFilterChange,
  };
};

export default useTypeFilters;
