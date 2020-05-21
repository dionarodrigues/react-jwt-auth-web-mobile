import React, { createContext } from 'react';

interface AuthContextProps {
  name: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'Diogo' }}>
      {children}
    </AuthContext.Provider>
  );
};
