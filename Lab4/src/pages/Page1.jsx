import { Container, Row, Card } from 'react-bootstrap';
import Image1 from '../assets/tv.png';
import Image2 from '../assets/16+.png';
import './Page1.css';

const Page1 = () => {
    const cardstv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    return (
        <>
            <Container className='back'>
                <Row>
                    <p className="lead stil_tv">КиноСмешарики | ТВ-каналы</p>
                    <p className="lead stil2">ТВ-каналы ➪</p>
                    <div className="justify-content-start text-start w-100 my-5 filt-tv">

                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Все</a>
                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • HD</a>

                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Детские</a>
                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Эфирные</a>
                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Развлекательные</a>

                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Музыкальные</a>
                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Взрослые</a>
                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Спортивные</a>
                        <a href="#" className="btn btn-tag btn-rounded" data-mdb-close="true">
                        • Познавательные</a>
                    </div>
                    <div className="container back_ob mb-3">
                        <div className="col-12">
                            <div className="d-flex justify-content-start flex-column">
                                <Row className='colu_tv cold2'>
                                    {cardstv.map((index) => (
                                        <Card key={index} className="card_tv">
                                            <Card.Img src={Image1} alt="Film Poster" className="card-img-top" />
                                            <Card.Body>
                                                <img src={Image2} className="img-voz_tv" alt="Age" />
                                                <h6 className="card-text crt_tv">23:15 </h6>
                                                <h6 className="card-text crd_tv" >Фильм Небеса</h6>
                                                <h6 className="card-title ctt_tv">MTV</h6>
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
