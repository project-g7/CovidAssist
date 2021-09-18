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
import Language from './Language'


const LanguageStack = createStackNavigator();

const LanguageStackScreen = ({navigation}) => (  
    <LanguageStack.Navigator>
      <LanguageStack.Screen name="Language" component={Language} options={{
        title: 'Change Language',
        headerTitleStyle: { alignSelf: 'center', marginLeft:-40 },
        headerLeft: () => (
          <Icon.Button name="arrow-back" size={25} color="black"  backgroundColor="#fff"
          onPress={() => navigation.goBack()}></Icon.Button>
        )
      }}/>
      {/* <DetailStack.Screen name="Detail" component={DetailScreen} /> */}
    </LanguageStack.Navigator>
);


export default LanguageStackScreen