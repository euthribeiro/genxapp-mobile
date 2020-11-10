import * as React from 'react';
import { useSelector } from 'react-redux';

// routes

import AppRoutes from './app';
import AuthRoutes from './auth';

interface RootState {
  Auth: {
    isLogged: boolean;
  };
}

const App: React.FC = () => {
  const { isLogged } = useSelector((state: RootState) => state.Auth);

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
};

export default App;
