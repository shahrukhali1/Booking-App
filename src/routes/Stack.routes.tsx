import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/Home';
import HotelDetails from '../views/HotelDetails';
import { StackParamList } from './types';
import LoginScreen from '../views/Login';
import SignupScreen from '../views/SignUp';
import MatterportWebView from '../views/Matterport/MatterportIntegration';

const Stack = createNativeStackNavigator<StackParamList>();

const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="HotelDetails" component={HotelDetails} />
    <Stack.Screen name="Matterport" component={MatterportWebView} />
  </Stack.Navigator>
);

export default StackRoutes;
