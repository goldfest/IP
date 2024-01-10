import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

const LinesTable = ({ children }) => {
    return (
        <Container fluid className='container-fluid mt-5 mb-5'>
            <div className='mt-2'> <Row> {children} </Row> </div>
        </Container>
    );
};

LinesTable.propTypes = {
    children: PropTypes.node,
};

export default LinesTable;
