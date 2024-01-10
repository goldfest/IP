import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.jsx';
import Navigation from './components/navigation/Navigation.jsx';

const App = ({ routes }) => {
  return (
    <>
      <Navigation routes={routes}></Navigation>
      <Container as="main" >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

App.propTypes = {
  routes: PropTypes.array,
};

export default App;
