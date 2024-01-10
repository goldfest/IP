import { useNavigate } from 'react-router-dom';
import {
    Container, Row, Card, Form, Button,
} from 'react-bootstrap';
import { useState } from 'react';
import Logo from '../assets/Logo.png';
import Image1 from '../assets/8.png';
import UsersApiService from '../components/types/service/UsersApiService';
import './Page4.css';

const Page4 = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity()) {
          const userData = {
            phoneNumber: form.elements.phoneNumber.value,
            typeName: form.elements.typeName.value,
            typeFam: form.elements.typeFam.value,
            typeDate: form.elements.typeDate.value,
            typeEmailX2: form.elements.typeEmailX2.value,
            typePasswordX2: form.elements.typePasswordX2.value,
          };
          try {
            const existingUser = await UsersApiService.getAll(`?phoneNumber=${userData.phoneNumber}`);
            if (existingUser.length > 0) {
              console.log('Пользователь с таким номером телефона уже существует');
              return;
            }
            await UsersApiService.create(userData);
            console.log('Регистрация успешна!');
            navigate('/Page5');
          } catch (error) {
            console.error('Ошибка при регистрации:', error);
          }
        }
      };
    return (
        <>
            <section className="vh-200" style={{ backgroundColor: 'none' }}>
                <Container fluid className="cnt">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-8 col-xl-6 col-sm-12">
                            <Card className="card_in" >
                                <div className="card_in-background"></div>
                                <a className="navbar-brand brs" style={{ marginTop: '20px', marginLeft: '40px' }}>
                                    <img className="brand2" src={Logo} style={{ width: '190px' }} alt="Логотип" />
                                </a>
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <Form className="mb-4" noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Button
                                            className="btn btn-primary btn-lg btn-block btn-reg"
                                            type="submit"
                                            style={{
                                                backgroundColor: '#160C57',
                                                borderRadius: '26px',
                                                position: 'absolute',
                                                top: '25px',
                                                right: '20px',
                                                fontSize: '26px',
                                            }}
                                        >
                                            Регистрация
                                        </Button>
                                            <Form.Group controlId="phoneNumber">
                                                <Form.Label className="num">Ваш номер телефона</Form.Label>
                                                <Form.Control required type="tel" placeholder="8..." />
                                            </Form.Group>

                                            <Form.Group controlId="typeName">
                                                <Form.Label className="num">Имя</Form.Label>
                                                <Form.Control required type="text" placeholder="Введите ваше имя..." />
                                            </Form.Group>

                                            <Form.Group controlId="typeFam">
                                                <Form.Label className="num">Фамилия</Form.Label>
                                                <Form.Control required type="text" placeholder="Введите вашу фамилию..." />
                                            </Form.Group>

                                            <Form.Group controlId="typeDate">
                                                <Form.Label className="num">Дата рождения</Form.Label>
                                                <Form.Control required type="date" />
                                            </Form.Group>

                                            <Form.Group controlId="typeEmailX2">
                                                <Form.Label className="num">Почта</Form.Label>
                                                <Form.Control required type="email" placeholder="Введите ваш email адрес..." />
                                            </Form.Group>

                                            <Form.Group controlId="typePasswordX2">
                                                <Form.Label className="num">Пароль</Form.Label>
                                                <Form.Control required type="password" placeholder="Введите ваш пароль..." />
                                            </Form.Group>

                                            <p className="vih2" >
                                            Зарегистрироваться:
                                            </p>

                                            <Button className="btn-lg btn-block btn-primary vk-goo" style={{ backgroundColor: '#4d4de6' }}>
                                            ВК
                                            </Button>
                                            <Button className="btn-lg btn-block btn-primary vk-goo" style={{ backgroundColor: '#4d4de6' }}>
                                            Google
                                            </Button>
                                        </Form>
                                        </div>

                                        <div className="col-md-6 col-sm-12">
                                        <img className="img_" style={{ marginTop: '180px' }} src={Image1} alt="Изображение" />
                                        </div>
                                    </div>
                                    </div>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Page4;
