import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container, Row, Card, Form, FormControl, Button,
} from 'react-bootstrap';
import Image1 from '../assets/film.png';
import Image3 from '../assets/16+.png';
import './Page2.css';
import useLines from '../components/lines/hooks/LinesHook';
import useTypeFilter from '../components/lines/hooks/LinesFilterHook';
import Select from '../components/input/Select.jsx';

const Page2 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const {
        genres,
        currentGenreFilter,
        handleGenreFilterChange,
    } = useTypeFilter();

    const { lines } = useLines('2', currentGenreFilter, searchQuery);

    const cards = [1, 2, 3, 4, 5, 6, 7];

    const navigate = useNavigate();

    const handleSearchInputChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        // Update the search query in the URL
        navigate(`?query=${value}`);
      };

    let contentToShow;

    if (currentGenreFilter) {
        contentToShow = (
            <>
            <div className="container back_ob mb-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-start flex-column">
                            <Row className='colu'>
                                {lines.map((line) => (
                                    <Card key={line.id} className="card_1">
                                        <Card.Img src={line.image} alt="Film Poster" className="card-img-top" />
                                        <Card.Body>
                                            <h6 className="card-text img-voz_d">{line.category}+</h6>
                                            <h6 className="card-text crd_d">{line.genre.name}</h6>
                                            <h6 className="card-title ctt_d">{line.nick}</h6>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (searchQuery) {
        contentToShow = (
            <>
            <div className="container back_ob mb-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-start flex-column">
                            <Row className='colu'>
                                {lines.map((line) => (
                                    <Card key={line.id} className="card_1">
                                        <Card.Img src={line.image} alt="Film Poster" className="card-img-top" />
                                        <Card.Body>
                                            <h6 className="card-text img-voz_d">{line.category}+</h6>
                                            <h6 className="card-text crd_d">{line.genre.name}</h6>
                                            <h6 className="card-title ctt_d">{line.nick}</h6>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        contentToShow = (
            <>
                <p className="lead ots_film">Сейчас смотрят</p>
                <p className="lead ots_film2">Самые популярные сериалы за последние сутки</p>
                <div className="container back_ob mb-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-start flex-column">
                        <Row className='colu cold2'>
                                {lines.slice(0, 7).map((line) => (
                                    <Card key={line.id} className="card_1">
                                        <Card.Img src={line.image} alt="Film Poster" className="card-img-top" />
                                        <Card.Body>
                                            <h6 className="card-text img-voz_d">{line.category}+</h6>
                                            <h6 className="card-text crd_d">{line.genre.name}</h6>
                                            <h6 className="card-title ctt_d">{line.nick}</h6>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
                <p className="lead ots_film">Лучшие российские сериалы</p>
                <p className="lead ots_film2">Сериалы, которые можно пересматривать постоянно</p>
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
                <p className="lead ots_film">Новые серии</p>
                <p className="lead ots_film2">Смотрите первыми новые эпизоды ваших любимых сериалов</p>
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
            </>
        );
    }

    return (
        <>
            <Container className='back'>
                <Row>
                    <p className="lead stil_tv">КиноСмешарики | Сериалы</p>
                    <p className="lead stil2">Сериалы ➪</p>
                    <Form id="search-form" action="/search" method="get">
                        <FormControl
                            type="text"
                            id="search-input"
                            name="query"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="&#128396;  Введите название фильма..."
                            autoComplete="off"
                        />
                    </Form>
                    <div className="line"></div>
                    <p className="lead stil2 bbb1">Сериалы по жанрам</p>
                    <div className="justify-content-start text-start w-100 my-5 filt_films">
                    <Button onClick={() => handleGenreFilterChange({ target: { value: '' } }, null)} className={`btn btn-tag btn-rounded ${!currentGenreFilter && 'active'}`} data-mdb-close="true">
                          • Очистить фильтр
                        </Button>
                        {genres.map((genre) => (
                        <Button
                            key={genre.id}
                            onClick={() => handleGenreFilterChange({ target: { value: genre.id } })}
                            className={`btn btn-tag btn-rounded ${currentGenreFilter === genre.name && 'active'}`}
                            data-mdb-close="true"
                        >
                            • {genre.name}
                        </Button>
                        ))}
                    </div>
                    <div className="justify-content-start text-start w-100 my-5 filt_films2">
                        <p className="lead stil2">Сериалы по жанрам</p>
                        <Select className='filterpop mt-1' values={genres}
                        value={currentGenreFilter} onChange={handleGenreFilterChange} />
                    </div>
                    {contentToShow}
                </Row>
            </Container>
        </>
    );
};

export default Page2;
