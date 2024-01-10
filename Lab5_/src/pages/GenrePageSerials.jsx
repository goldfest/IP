import { Row, Card } from 'react-bootstrap';
import useLines from '../components/lines/hooks/LinesHook';

// eslint-disable-next-line react/prop-types
const GenrePage = ({ genre }) => {
  const { lines } = useLines();

  const filteredLines = lines
    .filter((line) => line.type.name === 'Сериал')
    .filter((line) => !genre || line.genre.name === genre)
    .reverse();

  return (
    <div className="container back_ob mb-3">
      <p className="lead stil2 bbb1">{genre ? `Сериалы жанра ${genre}` : 'Все сериалы'}</p>
      <Row>
        <div className="colu cold2 row">
          {filteredLines.length > 0 ? (
            filteredLines.map((line) => (
              <Card key={line.id} className="card_1">
              <Card.Img src={line.image} alt="Film Poster" className="card-img-top" />
                  <Card.Body>
                      <h6 className="card-text img-voz_d" >{line.category}+</h6>
                      <h6 className="card-text crd_d" >{line.genre.name}</h6>
                      <h6 className="card-title ctt_d">{line.nick}</h6>
                  </Card.Body>
              </Card>
            ))
          ) : (
            <p>Нет сериалов для выбранного жанра</p>
          )}
        </div>
      </Row>
    </div>
  );
};

export default GenrePage;
