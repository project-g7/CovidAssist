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
import MyProfileStackScreen from './src/Profile/MyProfileStackScreen'
import MyBookingsStackScreen from './src/Profile/MyBookingsStackScreen'
import ViewCertificateStackScreen from './src/Profile/ViewCertificateStackScreen'
import EditProfileStackScreen from './src/Profile/EditProfileStackScreen'
import { LogBox } from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView,DrawerItem,DrawerItemList, DrawerContentComponentProps} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => props.navigation.navigate("Sign")} />
      </DrawerContentScrollView>
    )
  }}> 
      <Drawer.Screen name="Home" component={MainTabsScreen} options={{
        headerLeft: () => (
          <Icon.Button name="menu" size={25} backgroundColor="#009387" 
          onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
      <Drawer.Screen name="My Profile" component={MyProfileStackScreen} />
      <Drawer.Screen name="My Bookings" component={MyBookingsStackScreen} />
      <Drawer.Screen name="Vaccine Card" component={ViewCertificateStackScreen} />
      {/* <Drawer.Screen name="View C" component={MyBookingsStackScreen} /> */}
      <Drawer.Screen name="EditProfile" component={EditProfileStackScreen} options={ {drawerLabel:()=>null}}/>
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
