import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';
import Routes from './routes';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AuthContext.Provider value={{ name: 'Diogo' }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>
  </>
);

export default App;
