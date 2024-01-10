import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import { APP_PREFIX_PATH } from './configs/AppConfig';
import { Container } from '@mui/material';

const App = () => (
  <Container maxWidth='xl'>
    <BrowserRouter
      onUpdate={() => {
        window.scrollTo(0, 0);
      }}
      basename={APP_PREFIX_PATH || ''}
    >
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  </Container>
)

export default App;