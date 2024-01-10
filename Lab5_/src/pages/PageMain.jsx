import {
    Container, Row, Col, Card,
} from 'react-bootstrap';
import Image1 from '../assets/film.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/16+.png';
import './PageMain.css';
import useLines from '../components/lines/hooks/LinesHook';

const Page1 = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7];
    const { lines } = useLines();

    return (
        <>
            <Container className='back'>
                <Row>
                    <Col md={4}>
                        <a href="#" className="navbar-brand d-none d-xl-block">
                            <img src={Image2} alt="Logo" />
                        </a>
                    </Col>
                    <Col md={12} xl={6}>
                        <p className="lead stil">Вперед, к невероятным приключениям! Добро пожаловать в мир кино вместе с нами!</p>
                        <p className="lead ots bbb">Сейчас в кино</p>
                        <Container className="back_2 mb-3">
                            <div className="d-flex justify-content-start flex-column">
                            <Row className='colu'>
                                    {lines
                                        .filter((line) => line.type.name === 'Фильм') // Фильтрация только по типу "Фильм"
                                        .reverse()
                                        .slice(0, 9)
                                        .map((line) => (
                                            <Card key={line.id} className="card_">
                                            <Card.Img src={line.image} alt="Film Poster" className="card-img-top" />
                                                <Card.Body>
                                                    <h6 className="card-text img-voz_d" >{line.category}+</h6>
                                                    <h6 className="card-text crd_d" >{line.genre.name}</h6>
                                                    <h6 className="card-title ctt_d">{line.nick}</h6>
                                                </Card.Body>
                                            </Card>
                                   ))}
                                </Row>
                            </div>
                        </Container>
                    </Col>
                    <p className="lead ots">Любимые Фильмы и сериалы</p>
                    <div className="container back_ob mb-3">
                        <div className="col-12">
                            <div className="d-flex justify-content-start flex-column">
                                <Row className='colu cold2'>
                                    {cards.map((index) => (
                                        <Card key={index} className="card_1">
                                            <Card.Img src={Image1} alt="Film Poster" className="card-img-top" />
                                            <Card.Body>
                                                <img src={Image3} className="img-voz" alt="Age" />
                                                <h6 className="card-text crd" >Экшн, приключения</h6>
                                                <h6 className="card-title ctt">Неудержимые 4</h6>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                    <p className="lead ots">Сейчас смотрят</p>
                    <div className="container back_ob mb-3">
                        <div className="col-12">
                            <div className="d-flex justify-content-start flex-column">
                                <Row className='colu cold2'>
                                    {cards.map((index) => (
                                        <Card key={index} className="card_1">
                                            <Card.Img src={Image1} alt="Film Poster" className="card-img-top" />
                                            <Card.Body>
                                                <img src={Image3} className="img-voz" alt="Age" />
                                                <h6 className="card-text crd" >Экшн, приключения</h6>
                                                <h6 className="card-title ctt">Неудержимые 4</h6>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Page1;
