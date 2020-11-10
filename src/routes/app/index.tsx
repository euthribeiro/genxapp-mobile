import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const AppActions = createStackNavigator();

// routes

import Tabs from './tab.route';
import Profile from '../../sections/app/Profile';
import Mirdb from './mirdb.route';
import Tarbase from './tarbase.route';
import TargetScan from './targetscan.route';

import { Horizontal } from '../config';

const App: React.FC = () => {
  return (
    <AppActions.Navigator
      screenOptions={{
        headerShown: false,
        ...Horizontal,
      }}>
      <AppActions.Screen name="Inicio" component={Tabs} />
      <AppActions.Screen name="Profile" component={Profile} />
      <AppActions.Screen name="Mirdb" component={Mirdb} />
      <AppActions.Screen name="Tarbase" component={Tarbase} />
      <AppActions.Screen name="TargetScan" component={TargetScan} />
    </AppActions.Navigator>
  );
};

export default App;
