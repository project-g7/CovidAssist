import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './src/LoginRegistration/Welcome';
import Welcome2 from './src/LoginRegistration/Welcome2';
import Sign from './src/LoginRegistration/Sign';
import Login from './src/LoginRegistration/Login';
import Forget_password from './src/LoginRegistration/Forget_password';
import Register from './src/LoginRegistration/Register';
import HomeScreen from './src/LoginRegistration/HomeScreen';
import DetailsScreen from './src/LoginRegistration/DetailsScreen';
import MainTabsScreen from './src/VaccineRegistration/MainTabsScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainTabsScreen} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home name" component={HomeScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget_password" component={Forget_password} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainTabsScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
    alignContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  headText: {
    fontSize: 30,
    marginBottom: 25,
    marginTop: 15,
  },
  button_signin: {
    width: 260,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#3342C8',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default App;
