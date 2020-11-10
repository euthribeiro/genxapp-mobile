import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const TarbaseActions = createStackNavigator();

// routes

import Tarbase from '../../sections/app/Tarbase';
import TarbaseDetails from '../../sections/app/TarbaseDetails';

// anim

import { Horizontal } from '../config';

const TarbaseRoutes: React.FC = () => {
  return (
    <TarbaseActions.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...Horizontal,
      }}>
      <TarbaseActions.Screen name="Home" component={Tarbase} />
      <TarbaseActions.Screen name="TarbaseDetails" component={TarbaseDetails} />
    </TarbaseActions.Navigator>
  );
};

export default TarbaseRoutes;
