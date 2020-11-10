import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const AppActions = createStackNavigator();

// routes

import Config from '../../sections/app/Config';

const App: React.FC = () => {
  return (
    <AppActions.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <AppActions.Screen name="Home" component={Config} />
    </AppActions.Navigator>
  );
};

export default App;
