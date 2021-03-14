import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './rootNavigation';

import i18n from '../i18n';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { colors } from '../themes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.BLACK,
      inactiveTintColor: colors.BLACK,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: i18n.t('home'),
        tabBarIcon: ({ focused, color }) => {},
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: i18n.t('profile'),
        tabBarIcon: ({ focused, color }) => {},
      }}
    />
  </Tab.Navigator>
);

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
