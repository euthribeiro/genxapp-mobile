import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages

import Home from '../../sections/auth/Home';
import Login from '../../sections/auth/Login';

// stacks

import Signup from './signup.route';

// components

import { Header } from '../../global/components';

// configs

import { Horizontal } from '../config';

const AuthActions = createStackNavigator();

const Auth: React.FC = () => {
  return (
    <AuthActions.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
        ...Horizontal,
      }}>
      <AuthActions.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <AuthActions.Screen name="Login" component={Login} />
      <AuthActions.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </AuthActions.Navigator>
  );
};

export default Auth;
