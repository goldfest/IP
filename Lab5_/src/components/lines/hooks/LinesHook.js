import { useEffect, useState } from 'react';
import LinesApiService from '../service/LinesApiService';

const useLines = (typeFilter, genreFilter, searchQuery) => {
    const [linesRefresh, setLinesRefresh] = useState(false);
    const [lines, setLines] = useState([]);
    const handleLinesChange = () => setLinesRefresh(!linesRefresh);

    const getLines = async () => {
        let expand = '?_expand=type&_expand=genre';

        if (typeFilter) {
            expand += `&typeId=${typeFilter}`;
        }

        if (genreFilter) {
            expand += `&genreId=${genreFilter}`;
        }

        if (searchQuery) {
            expand += `&nick_like=${searchQuery}`;
        }

        const data = await LinesApiService.getAll(expand);
        setLines(data ?? []);
    };

    useEffect(() => {
        getLines();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [linesRefresh, typeFilter, genreFilter, searchQuery]);

    return {
        lines,
        handleLinesChange,
    };
};

export default useLines;
