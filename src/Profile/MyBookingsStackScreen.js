import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MyBookings from './MyBookings'
import Icon from 'react-native-vector-icons/Ionicons'


const MyBookingsStack = createStackNavigator();

const MyBookingsStackScreen = ({navigation}) =>(
    <MyBookingsStack.Navigator>
      <MyBookingsStack.Screen name="MyProfile" component={MyBookings} options={{
        title: 'My Bookings',
        headerTitleStyle: { alignSelf: 'center', marginLeft:-40 },
        headerLeft: () => (
          <Icon.Button name="arrow-back" size={25} color="black"  backgroundColor="#fff"
          onPress={() => navigation.goBack()}></Icon.Button>
        )
      }}/>
    </MyBookingsStack.Navigator>
)

export default MyBookingsStackScreen

const styles = StyleSheet.create({})
