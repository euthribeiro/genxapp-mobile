import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const MirdbActions = createStackNavigator();

// routes

import Home from '../../sections/app/Mirdb';
import MirdbDetails from '../../sections/app/MirdbDetails';

// anim

import { Horizontal } from '../config';

const MirdbRoutes: React.FC = () => {
  return (
    <MirdbActions.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...Horizontal,
      }}>
      <MirdbActions.Screen name="Home" component={Home} />
      <MirdbActions.Screen name="MirdbDetails" component={MirdbDetails} />
    </MirdbActions.Navigator>
  );
};

export default MirdbRoutes;
