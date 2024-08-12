import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingScreen from '../screens/SettingScreen';
import CustonDrawer from '../components/CustomDrawer';
import TabNavigation from './TabNavigation';
const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustonDrawer {...props} />}
      screenOptions={{headerShown: false, drawerActiveBackgroundColor: '#aa18ea', drawerActiveTintColor: '#fff', drawerInactiveTintColor: '#333', drawerLabelStyle: {marginLeft: -25, fontFamily: 'Roboto-Medium', fontSize: 15}}}>
      <Drawer.Screen
        name="Tab"
        component={TabNavigation}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
