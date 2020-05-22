import React, { createContext, useCallback, useContext } from 'react';

interface ToastContextProps {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextProps {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useAuth must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
