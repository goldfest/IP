import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import PageMain from './pages/PageMain.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';
import Page5 from './pages/Page5.jsx';
import Profil from './pages/Profil.jsx';
import AdminPage from './pages/AdminPage.jsx';

const routes = [
  {
    index: true,
    path: '/',
    element: <PageMain />,
  },
  {
    path: '/page1',
    element: <Page1 />,
    // тв-каналы
  },
  {
    path: '/page2',
    element: <Page2 />,
    // фильмы
  },
  {
    path: '/page3',
    element: <Page3 />,
    // сериалы
  },
  {
    path: '/page4',
    element: <Page4 />,
    // войти
  },
  {
    path: '/page5',
    element: <Page5 />,
    // регистрация
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/profil',
    element: <Profil />,
    // профиль
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App routes={routes} />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
