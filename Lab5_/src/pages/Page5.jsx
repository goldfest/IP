import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';
import Logo from '../assets/Logo.png';
import Image1 from '../assets/7.png';
import './Page5.css';
import { useUserL } from '../components/types/hooks/UsersHook';

const Page5 = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phoneNumber: '',
        typePasswordX2: '',
    });
    const { users, handlerLoginChanged } = useUserL(formData.phoneNumber);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() !== false && formData.phoneNumber && formData.typePasswordX2) {
          console.log(formData);
          const foundUserByPhoneNumber = users.find((user) => user.phoneNumber
          === formData.phoneNumber);

          const foundUserByPassword = users.find((user) => user.typePasswordX2
          === formData.typePasswordX2);

          if (foundUserByPhoneNumber && foundUserByPassword) {
            console.log('User login');
            localStorage.setItem('yohoho', JSON.stringify(foundUserByPhoneNumber.id));
            navigate('/Profil');
          } else if (formData.phoneNumber === 'admin' && formData.typePasswordX2 === '5558') {
            console.log('Admin login');
            navigate('/Admin');
          } else {
            console.log('Invalid login');
          }
        }
        setValidated(true);
      };
    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({
            ...formData,
            [inputName]: inputValue,
        });
        if (inputName === 'phoneNumber') {
            handlerLoginChanged(inputValue);
        }
    };
    return (
            <section className="vh-200" style={{ backgroundColor: 'none' }}>
                <Container fluid className="py-5 h-100">
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
                                        <Form className="" noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Form.Group className="mb-4" controlId="phoneNumber">
                                                <Form.Label className="num">По номеру телефона</Form.Label>
                                                <Form.Control required type="tel" name="phoneNumber" placeholder="8..."
                                                value={formData.phoneNumber}
                                                onChange={handleChange} />
                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="typePasswordX2">
                                                <Form.Label className="num">Пароль</Form.Label>
                                                <Form.Control required className='num1' type="password" name="typePasswordX2"
                                                value={formData.typePasswordX2} onChange={handleChange} placeholder="Введите ваш пароль..." />
                                            </Form.Group>

                                            <Form.Check className="d-flex justify-content-start mb-4 num" type="checkbox" id="form1Example3" label="-Запомнить пароль" />

                                            <Button className="btn btn-primary btn-lg btn-block vhod" type="submit" style={{ backgroundColor: '#160C57', borderRadius: '26px', width: '150px' }}>
                                                Вход
                                            </Button>
                                        </Form>
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
