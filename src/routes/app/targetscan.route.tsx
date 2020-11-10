import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const TargetScanActions = createStackNavigator();

// routes

import TargetScan from '../../sections/app/TargetScan';
import TargetScanDetails from '../../sections/app/TargetScanDetails';

// anim

import { Horizontal } from '../config';

const TargetScanRoutes: React.FC = () => {
  return (
    <TargetScanActions.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...Horizontal,
      }}>
      <TargetScanActions.Screen name="Home" component={TargetScan} />
      <TargetScanActions.Screen
        name="TargetScanDetails"
        component={TargetScanDetails}
      />
    </TargetScanActions.Navigator>
  );
};

export default TargetScanRoutes;
