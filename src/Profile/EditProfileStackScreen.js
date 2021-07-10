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
import EditProfile from './EditProfile'


const EditProfileStack = createStackNavigator();

const EditProfileStackScreen = ({navigation}) => (  
    <EditProfileStack.Navigator>
      <EditProfileStack.Screen name="EditProfile" component={EditProfile} options={{
        title: 'Edit Profile',
        headerTitleStyle: { alignSelf: 'center', marginLeft:-40 },
        headerLeft: () => (
          <Icon.Button name="arrow-back" size={25} color="black"  backgroundColor="#fff"
          onPress={() => navigation.goBack()}></Icon.Button>
        )
      }}/>
      {/* <DetailStack.Screen name="Detail" component={DetailScreen} /> */}
    </EditProfileStack.Navigator>
);


export default EditProfileStackScreen