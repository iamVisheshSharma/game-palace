import React from 'react';
import Main from '../screens/OnBoarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OnBoarding from '../screens/OnBoarding';
import RegisterScreen from '../screens/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='OnBoarding' component={OnBoarding} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  )
}
