import PropTypes from 'prop-types';
import {
    Container, Row, Col, Card, Form, Button,
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Image1 from '../assets/7.png';
import './Page5.css';

const Page5 = () => {
    return (
            <section className="vh-200" style={{ backgroundColor: 'none' }}>
                <Container fluid className="cnt_in">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-8 col-xl-6 col-sm-12">
                            <Card className="card_in" >
                                <div className="card_in-background"></div>
                                <a className="navbar-brand brs" style={{ marginTop: '20px', marginLeft: '40px' }}>
                                    <img className="brand2" src={Logo} style={{ width: '190px' }} alt="Логотип" />
                                </a>
                                <Link to='/page4' className="reg">
                                Регистрация
                                </Link>
                                <div className="card-body text-center crd">
                                    <Row>
                                        <Col md={6} sm={12}>
                                            <Form.Group className="mb-4" controlId="phoneNumber">
                                                <Form.Label className="num">По номеру телефона</Form.Label>
                                                <Form.Control type="tel" placeholder="+7" />
                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="typeEmailX-2">
                                                <Form.Label className="num">По почте</Form.Label>
                                                <Form.Control type="email" placeholder="Введите ваш email адрес..." />
                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="typePasswordX-2">
                                                <Form.Label className="num">Пароль</Form.Label>
                                                <Form.Control className='num1' type="password" placeholder="Введите ваш пароль..." />
                                            </Form.Group>

                                            <Form.Check className="d-flex justify-content-start mb-4 num" type="checkbox" id="form1Example3" label="-Запомнить пароль" />

                                            <Button className="btn btn-primary btn-lg btn-block vhod" type="submit" style={{ backgroundColor: '#160C57', borderRadius: '26px', width: '150px' }}>
                                                Вход
                                            </Button>
                                        </Col>
                                        <Col md={6} className="d-none d-lg-block d-xl-block d-md-block">
                                            <img className="izo" src={Image1} alt="Изображение" />
                                        </Col>
                                    </Row>

                                    <hr className="my-4" />

                                    <Button className="btn btn-lg btn-block btn-primary btn-vk" style={{ backgroundColor: '#4d4de6' }} type="submit">
                                        Войти через ВК
                                    </Button>
                                    <Button className="btn btn-lg btn-block btn-primary btn-vk" style={{ backgroundColor: '#4d4de6' }} type="submit">
                                        Войти через Google
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </section>
    );
};
Page5.propTypes = {
    routes: PropTypes.array,
};

export default Page5;
