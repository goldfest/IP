import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const LinesTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive>
            <thead>
                <tr>
                <th scope="col">ID</th>
                        <th scope="col">Тип</th>
                        <th scope="col">Возрастн. кат.</th>
                        <th scope="col">Название</th>
                        <th scope="col">Жанр</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table >
    );
};

LinesTable.propTypes = {
    children: PropTypes.node,
};

export default LinesTable;
