import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import MyProfile from './MyProfile'



const MyProfileStack = createStackNavigator();

const MyProfileStackScreen = ({navigation}) => (  
    <MyProfileStack.Navigator>
      <MyProfileStack.Screen name="MyProfile" component={MyProfile} options={{
        title: 'My Profile',
        headerTitleStyle: { alignSelf: 'center', marginLeft:-40 },
        headerLeft: () => (
          <Icon.Button name="arrow-back" size={25} color="black"  backgroundColor="#fff"
          onPress={() => navigation.goBack()}></Icon.Button>
        )
      }}/>
    </MyProfileStack.Navigator>
);

export default MyProfileStackScreen;