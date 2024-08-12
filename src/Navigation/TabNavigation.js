import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthStack from './AuthStack';
import GameDetailScreen from '../screens/GameDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#AD40AF',
            display: getTabVisibility(route),
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const getTabVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  if (routeName === 'GameDetails') {
    return 'none';
  } else {
    return 'flex';
  }
};
