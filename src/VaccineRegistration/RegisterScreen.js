//Android 14 figma
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import VaccinationName from './VaccinationName';
import DatePicker from './DatePicker';

import {createStackNavigator} from '@react-navigation/stack';
import VaccineBooking from './VaccineBooking';
import VaccineCenter from './VaccineCenter';
import TimeAvailable from './TimeAvailable';

const Stack = createStackNavigator();

const RegisterScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="Register" component={RegisterScreenPage} />
    </Stack.Navigator>
  );
};

const RegisterScreenPage = ({navigation}) => {
  return (
    <ScrollView>
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
        <TimeAvailable />
        <View style={{marginTop: -250}}>
          <VaccineBooking />
        </View>

        <TouchableOpacity>
          <View style={styles.buttonNext}>
            <Text style={styles.butonText}>Register</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonNext}>
            <Text style={styles.butonText}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    borderColor: 'red',
  },
  body: {
    flex: 1,
    margin: 30,
    width: 300,
    height: 1,
  },
  container: {
    width: '100%',

    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  box: {
    width: '100%',
    height: 60,
    marginTop: -95,
  },
  inner: {
    flex: 1,
    backgroundColor: '#7674DF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  },
  buttonNext: {
    marginTop: -20,
    marginBottom: 5,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#3342C8',
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
    color: '#3342C8',
    fontSize: 16,
    textAlign: 'center',
  },
});
