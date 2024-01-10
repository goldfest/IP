import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

const LinesTableRow = ({
    line,
}) => {
    return (
        <div className="card card2page col-xl-3 col-lg-4 col-sm-4 col-12 p-0 border-0 ">
            <div className="row g-0">
                <div className="col-sm-12 col-6">
                <img src={line.image} alt='image' className='img-fluid'></img>
                </div>
                <div className="col-sm-12 col-6">
                    <div className="card-body p-2">
                        <p className="card-text">{line.nick}</p>
                        <Row className='mt-3'>
                            <Col><p className="card-text card-text-min">{line.type.name}</p></Col>
                            <Col><Button type="button" className="btn1">
                                <Link to='/page5' className='textlinkBut mt-4'> Подробнее </Link>
                            </Button></Col>
                        </Row>
                    </div>
                    <div className="card-footer p-2">
                        <img className="img-geo" src="icon/geo.svg" alt=""/>
                        <small className="text-muted m-1">{line.genre.name}</small>
                        <div className="mt-2">
                            <small className="text-muted-name p-1">Душ</small>
                            <img className="img-plus" src="icon/parkovka.svg" alt=""/>
                            <small className="text-muted-name">Парковка: {line.ocenka}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LinesTableRow.propTypes = {
    index: PropTypes.number.isRequired,
    line: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default LinesTableRow;
