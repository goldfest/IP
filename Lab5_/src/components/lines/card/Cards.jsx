import { Row, Col } from 'react-bootstrap';
import useLinesDeleteModal from '../hooks/LinesDeleteModalHook';
import useTypeFilter from '../hooks/LinesFilterHook';
import Select from '../../input/Select.jsx';
import useLinesFormModal from '../hooks/LinesFormModalHook';
import useLines from '../hooks/LinesHook';
import LinesTable from './CardsGroups.jsx';
import LinesTableRow from './CardsGroupsElement.jsx';

const Lines = () => {
    const { types, currentFilter, handleFilterChange } = useTypeFilter();

    const { lines, handleLinesChange } = useLines(currentFilter);

    const {
        showDeleteModal,
    } = useLinesDeleteModal(handleLinesChange);

    const {
        showFormModal,
    } = useLinesFormModal(handleLinesChange);

    // фильтруем, чтобы показывались только фильмы
    const popularLines = lines.filter((line) => line.typeid === 1);

    return (
        <>
            <Row className='mt-3'>
                <Col><Select className='filterpop mt-2' values={types} label='Фильтр'
                value={currentFilter} onChange={handleFilterChange} style={{ marginLeft: '2rem' }} /></Col>
                <Col> </Col>
            </Row>
            <LinesTable>
                {
                    popularLines.map((line, index) =>
                        <LinesTableRow key={line.id}
                            index={index} line={line}
                            onDelete={() => showDeleteModal(line.id)}
                            onEdit={() => showFormModal(line.id)}
                        />)
                }
            </LinesTable>
        </>
    );
};

export default Lines;
