import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
//import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import RegisterScreen from './RegisterScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    style={{backgroundColor: 'red'}}
    options={{
      headerLeft: () => (
        <Icon.Button
          name="menu"
          size={25}
          backgroundColor="#3342C8"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'YourStatus',
        tabBarIcon: ({color}) => (
          <Icons name="hand-heart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Detail"
      component={DetailStackScreen}
      options={{
        tabBarLabel: 'Vaccination',
        tabBarIcon: ({color}) => (
          <Icons name="medical-bag" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3342C8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <IconI.Button
          name="menu"
          size={25}
          backgroundColor="#3342C8"
          onPress={() => navigation.openDrawer()}></IconI.Button>
      ),
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'CovidAssist'}}
    />
  </HomeStack.Navigator>
);
const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3342C8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <IconI.Button
          name="menu"
          size={25}
          backgroundColor="#1167b1"
          onPress={() => navigation.openDrawer()}></IconI.Button>
      ),
    }}>
    <DetailStack.Screen
      name="Detail"
      component={DetailScreen}
      options={{title: 'CovidAssist'}}
    />
  </DetailStack.Navigator>
);
