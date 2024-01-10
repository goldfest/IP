import { useSearchParams } from 'react-router-dom';
import useGenres from '../../types/hooks/genresHook';
import useTypes from '../../types/hooks/TypesHook';

const useTypeFilter = () => {
    const typeFilterName = 'types';
    const genreFilterName = 'genres';

    const [searchParams, setSearchParams] = useSearchParams();

    const { types } = useTypes();
    const { genres = [] } = useGenres(); // Добавляем значение по умолчанию

    const handleFilterChange = (event, filterName) => {
        const { value } = event.target;
        if (value) {
            searchParams.set(filterName, value);
        } else {
            searchParams.delete(filterName);
        }
        // Добавляем проверку на оба фильтра
        const typeFilterValue = searchParams.get(typeFilterName);
        const genreFilterValue = searchParams.get(genreFilterName);
        if (typeFilterValue && genreFilterValue) {
            // Оба фильтра установлены, добавляем оба параметра к запросу
            searchParams.set('type', typeFilterValue);
            searchParams.set('genre', genreFilterValue);
        } else {
            // Один из фильтров отсутствует, удаляем параметры из запроса
            searchParams.delete('type');
            searchParams.delete('genre');
        }
        setSearchParams(searchParams);
    };

    return {
        types,
        genres,
        currentTypeFilter: searchParams.get(typeFilterName) || '',
        currentGenreFilter: searchParams.get(genreFilterName) || '',
        handleTypeFilterChange: (event) => handleFilterChange(event, typeFilterName),
        handleGenreFilterChange: (event) => handleFilterChange(event, genreFilterName),
    };
};

export default useTypeFilter;
