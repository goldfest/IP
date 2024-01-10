import {
    Alert, Button, Container,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="p-2 row justify-content-center mt-5">
            <Container className='col-md-6 mt-5'>
                <Alert variant="danger text-center">
                    Страница не найдена
                </Alert>
                <Button className="back w-100 mt-2" variant="" onClick={() => navigate(-1)}>Назад</Button>
            </Container>
        </Container>
    );
};

export default ErrorPage;
