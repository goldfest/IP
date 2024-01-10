import PropTypes from 'prop-types';
import {
 Container, Nav, Navbar,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Navigation.css';
import { useUser } from '../types/hooks/UsersHook';

const Navigation = ({ routes }) => {
    const indexPageLink = routes.filter((route) => route.index === false).shift();
    const user = useUser(JSON.parse(localStorage.getItem('yohoho'))).user.id;
    const userId = localStorage.getItem('yohoho');
    const navigate = useNavigate();
    const handlerLK = () => {
        if (user !== '') {
            navigate('/Profil');
        } else {
            navigate('/Page5');
        }
    };
    return (
        <header>
        <Navbar expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to={indexPageLink?.path ?? '/'}>
              <img className="brand" src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="me-auto mt-xxl-5">
                <Nav.Link as={Link} to={indexPageLink?.path ?? '/page1'} className="nav-link px-4 mx-3">
                  ТВ-каналы
                </Nav.Link>
                <Nav.Link as={Link} to={indexPageLink?.path ?? '/page2'} className="nav-link px-4 mx-3">
                  Фильмы
                </Nav.Link>
                <Nav.Link as={Link} to={indexPageLink?.path ?? '/page3'} className="nav-link px-4 mx-3">
                  Сериалы
                </Nav.Link>
                {userId === '1' && (
                  <Nav.Link as={Link} to={indexPageLink?.path ?? '/Admin'} className="nav-link px-3 mx-2">
                  Админка
                 </Nav.Link>
                )
                }
              </Nav>
              <Nav className="mb-xxl-3">
              {user !== '' ? (
                <Nav.Link onClick={handlerLK} className="nav-link px-3 mx-2">
                Профиль
                </Nav.Link>
                 ) : (
                  <>
                <Nav.Link as={Link} to={indexPageLink?.path ?? '/page4'} className="nav-link px-3 mx-2">
                  Регистрация
                </Nav.Link>
                <Nav.Link as={Link} to={indexPageLink?.path ?? '/page5'} className="nav-link px-3 mx-2">
                  Вход
                </Nav.Link>
                  </>
                 )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
};

Navigation.propTypes = {
    routes: PropTypes.array,
};

export default Navigation;
