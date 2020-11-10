import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages

import { Home, Finally, Terms } from '../../sections/auth/SignUp';

// components

import { Header } from '../../global/components';

// config

import { Vertical } from '../config';

const SignUpActions = createStackNavigator();

const SignUpRoutes: React.FC = () => {
  return (
    <SignUpActions.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} logo={true} />,
        ...Vertical,
      }}>
      <SignUpActions.Screen name="Home" component={Home} />
      <SignUpActions.Screen name="Terms" component={Terms} />
      <SignUpActions.Screen name="Finally" component={Finally} />
    </SignUpActions.Navigator>
  );
};

export default SignUpRoutes;
