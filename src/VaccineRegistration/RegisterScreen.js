//Android 14 figma
import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import VaccinationName from './VaccinationName';
import DatePicker from './DatePicker';

import {createStackNavigator} from '@react-navigation/stack';
import VaccineBooking from './VaccineBooking';
import VaccineCenter from './VaccineCenter';

const Stack = createStackNavigator();

const RegisterScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="Register" component={RegisterScreenPage} />
      <Stack.Screen name="VaccineBooking" component={VaccineBooking} />
    </Stack.Navigator>
  );
};

const RegisterScreenPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxBoder}>
        <View style={styles.body}>
          <Text style={styles.text}></Text>
          <VaccineCenter />
          <VaccinationName />
        </View>
      </View>

      <View>
        <DatePicker />
      </View>

      <TouchableOpacity>
        <View style={styles.buttonNext2}>
          <Text style={styles.butonText1}>Check Availaility</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text1}>Time & Availability</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('VaccineBooking')}>
        <View style={styles.buttonNext}>
          <Text style={styles.butonText}>Next</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonNext}>
          <Text style={styles.butonText}>Cancel</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignItems: 'center',
  },
  boxBoder: {
    flex: 1,
    marginTop: -60,
  },
  body: {
    flex: 1,
    margin: 30,
    width: 300,
    height: 1,
  },
  container: {
    width: '100%',
    height: '65%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '100%',
    height: '15%',
    marginTop: -95,
  },
  inner: {
    flex: 1,
    backgroundColor: '#7393B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNext: {
    marginTop: 180,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#1167b1',
    marginTop: 100,
    alignContent: 'center',
    marginLeft: 38,
  },
  butonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  buttonNext2: {
    width: 160,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginTop: 25,
    alignContent: 'center',
    margin: 100,
    marginHorizontal: 120,
    borderWidth: 1,
    borderColor: '#1167b1',
  },
  butonText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
