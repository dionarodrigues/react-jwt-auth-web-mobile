import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';
import Routes from './routes';

import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
    <ToastContainer />
  </>
);

export default App;
