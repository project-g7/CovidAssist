import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ViewCertificate from './ViewCertificate'
import Icon from 'react-native-vector-icons/Ionicons'


const ViewCertificateStack = createStackNavigator();

const ViewCertificateStackScreen = ({navigation}) =>(
    <ViewCertificateStack.Navigator>
      <ViewCertificateStack.Screen name="ViewCertificate" component={ViewCertificate} options={{
        title: 'Vaccine card',
        headerTitleStyle: { alignSelf: 'center', marginLeft:-40 },
        headerLeft: () => (
          <Icon.Button name="arrow-back" size={25} color="black"  backgroundColor="#fff"
          onPress={() => navigation.goBack()}></Icon.Button>
        )
      }}/>
    </ViewCertificateStack.Navigator>
)

export default ViewCertificateStackScreen

const styles = StyleSheet.create({})
