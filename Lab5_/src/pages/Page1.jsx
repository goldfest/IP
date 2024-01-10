import {
    Container, Row, Card, Button,
  } from 'react-bootstrap';
  import useLines from '../components/lines/hooks/LinesHook';
  import useTypeFilter from '../components/lines/hooks/LinesFilterHook';
  import './Page1.css';

  const Page1 = () => {
    const {
        genres,
        currentGenreFilter,
        handleGenreFilterChange,
    } = useTypeFilter();

    const { lines } = useLines('3', currentGenreFilter);

    return (
      <>
        <Container className='back'>
          <Row>
            <p className="lead stil_tv">КиноСмешарики | ТВ-каналы</p>
            <p className="lead stil2">ТВ-каналы ➪</p>
            <div className="justify-content-start text-start w-100 my-5 filt-tv">
            <Button onClick={() => handleGenreFilterChange({ target: { value: '' } }, null)} className={`btn btn-tag btn-rounded ${!currentGenreFilter && 'active'}`} data-mdb-close="true">
              • Все
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
            <div className="container back_ob mb-3">
              <div className="col-12">
                <div className="d-flex justify-content-start flex-column">
                  <Row className='colu_tv cold2'>
                    {lines.map((line) => (
                      <Card key={line.id} className="card_tv">
                        <Card.Img src={line.image} alt="Film Poster" className="card-img-top" />
                        <Card.Body>
                          <h6 className="card-text img-voz_tv">{line.category}+</h6>
                          <h6 className="card-text crd_tv">{line.genre.name}</h6>
                          <h6 className="card-title ctt_tv">{line.nick}</h6>
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
