import {
    Container, Row, Card, Form, FormControl,
} from 'react-bootstrap';
import Image1 from '../assets/film.png';
import Image3 from '../assets/16+.png';
import './Page2.css';

const Page2 = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
           <Container className='back'>
                <Row>
                    <p className="lead stil_tv">КиноСмешарики | Фильмы</p>
                    <p className="lead stil2">Фильмы ➪</p>

                    <Form id="search-form" action="/search" method="get">
                        <FormControl
                        type="text"
                        id="search-input"
                        name="query"
                        placeholder="&#128396;  Название фильма, жанр или имя актёра"
                        autoComplete="off"
                        />
                    </Form>
                    <div className="line"></div>
                    <p className="lead stil2 bbb1">Фильмы по жанрам</p>
                    <div className="justify-content-start text-start w-100 my-5 filt_films">
                        <a href="#" className="btn btn-tag btn-rounded btn-film" data-mdb-close="true">
                            <div className="filt__">Комедии</div>
                        </a>
                        <a href="#" className="btn btn-tag btn-rounded btn-film" data-mdb-close="true">
                            <div className="filt__1" >Мело-драмы</div>
                        </a>
                        <a href="#" className="btn btn-tag btn-rounded btn-film" data-mdb-close="true">
                            <div className="filt__1">Детек тивы</div>
                        </a>
                        <a href="#" className="btn btn-tag btn-rounded btn-film flt_2" data-mdb-close="true">
                            <div className="filt__" >Ужасы</div>
                        </a>
                        <a href="#" className="btn btn-tag btn-rounded btn-film flt_1" data-mdb-close="true">
                            <div className="filt__ " >Боевики</div>
                        </a>
                    </div>
                    <p className="lead ots_film">Сейчас смотрят</p>
                    <p className="lead ots_film2">Самые популярные фильмы за последние сутки</p>
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
                    <p className="lead ots_film">Лучшее зарубежное кино</p>
                    <p className="lead ots_film2">Фильмы с высоким рейтингом</p>
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
                    <p className="lead ots_film">Лучшие российские фильмы</p>
                    <p className="lead ots_film2">Любое наше кино от комедии до фантастики</p>
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

export default Page2;
