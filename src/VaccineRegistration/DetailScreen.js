import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import DropDown from './Dropdown';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const DetailScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="DetailScreen">
      <Stack.Screen name="Detail" component={DetailScreenPage} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const DetailScreenPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text1}>Are You Vaccinated before?</Text>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.inner}>
          <Text style={styles.text1}>Registration for vaccination</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.inner1}>
          <Text style={styles.text}>
            Photo ID card type, that will bring to Vaccination Center
          </Text>
        </View>
      </View>
      <View>
        <DropDown />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <View style={styles.buttonNext}>
          <Text style={styles.butonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '100%',
    height: '15%',
  },
  inner: {
    flex: 1,
    backgroundColor: '#7393B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    marginTop: 180,
    width: '100%',
    height: '15%',
  },
  box2: {
    marginTop: -1,
    width: '100%',
    height: '15%',
  },
  inner1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
  },
  buttonNext: {
    marginTop: 40,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#1167b1',
    marginBottom: 5,
    alignContent: 'center',
    marginLeft: 125,
  },
  butonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
