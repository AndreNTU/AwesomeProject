import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {Ionicons} from '@expo/vector-icons'
import {StyleSheet } from 'react-native';
import SpongebobHeader from './Components/SpongebobHeader';
import MenuItems from './Components/MenuItems'
import FeedbackForm from './Components/FeedbackForm'
import Login from './Components/LogIn'
import WelcomeScreen from './Components/WelcomeScreen';

const Stack = createStackNavigator ()
const Tab = createBottomTabNavigator ()
const Drawer = createDrawerNavigator ()

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Menu') {
            iconName =  'list';
           }
           else if (route.name === 'Login') {
            iconName = 'log-in-outline'
           }
           else if (route.name === 'Feedback') {
            iconName = 'podium-outline'
           }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {backgroundColor: 'yellow'}   })}>
      
      <Tab.Screen 
    name = "Login" 
    component={Login} 
    options = {{tabBarStyle: {display: 'none'}}} 
    />
    <Tab.Screen 
    name = "Welcome" 
    component={WelcomeScreen}  
    />
    <Tab.Screen
    name = "Menu" 
    component = {MenuItems} 
    />
    <Tab.Screen
    name = "Feedback" 
    component = {FeedbackForm}
    options = {{tabBarHideOnKeyboard: true}} 
    />
      </Tab.Navigator>
    </NavigationContainer>  ); }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  
});