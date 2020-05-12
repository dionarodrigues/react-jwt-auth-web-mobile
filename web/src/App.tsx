import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
