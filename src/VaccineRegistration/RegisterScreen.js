//Android 14 figma
import React, {useState, useEffect} from 'react';
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
import HomeScreen from './HomeScreen';
//import DatePicker from 'react-native-datepicker';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const RegisterScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="Register" component={RegisterScreenPage} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const RegisterScreenPage = ({navigation}) => {
  // const [data, setData] = useState([]);
  const [userName, setUsername] = useState('');
  useEffect(() => {
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      console.log(username);
      setUsername(username);
      console.log('RRRRRRRRRRRRRRRR');
      // fetData(username);
    });
  }, []);

  const [vaccineName, setVaccineName] = useState('');
  const [vaccineCenter, setVaccineCenter] = useState('');

  const VaccineRegister = () => {
    Axios.post('http://192.168.8.101:3000/api/VaccineRegister', {
      vaccineCenter: vaccineCenter,
      vaccineName: vaccineName,
      username: userName,
    })
      .then(() => {
        alert('Booking Successful');
      })
      .catch(error => {
        alert(error);
      });
  };

  const handleVaccine = vaccineCenter => {
    setVaccineCenter(vaccineCenter.vaccine_center);
    console.log(vaccineCenter.vaccine_center);
    console.log('reshani');
  };
  const handleVaccineName = vaccineName => {
    setVaccineName(vaccineName);
    console.log(vaccineName);
    console.log('dilhari');
  };

  let [date, setdate] = useState('');
  const handleDate = date => {
    setdate(date);
    console.log(date);
    console.log(vaccineCenter);
    fetchData(date, vaccineCenter);
  };
  const fetchData = async (date, vaccineCenter) => {
    console.log('abc');
    const encodedDate = encodeURIComponent(date);
    console.log(encodedDate);
    const encodeVaccineCenter = encodeURIComponent(vaccineCenter);
    console.log(encodeVaccineCenter);
    const response = await fetch(
      `http://192.168.8.101:3000/api/VaccineSelecteDate?date=${encodedDate}&vaccineCenter=${encodeVaccineCenter}`,
      {method: 'GET'},
    );
    console.log('zzzzzzzzz');
    const dates = await response.json();
    setdate(dates);
    console.log('pqr');
    //console.log(dates);
  };

  const [check, setCheck] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxBoder}>
          <View style={styles.body}>
            <Text style={styles.text}></Text>
            <VaccineCenter
              updateVaccine={handleVaccine}
              updateVaccineName={handleVaccineName}
            />
            {/* <VaccinationName /> */}
          </View>
        </View>

        <View>
          <DatePicker updateDate={handleDate} />
        </View>

        <TouchableOpacity
          onPress={() => {
            handleDate(date);
            setCheck(!check);
          }}>
          <View style={styles.buttonNext2}>
            <Text style={styles.butonText1}>Check Availaility</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text1}>Time & Availability</Text>
          </View>
        </View>
        {check && <TimeAvailable />}
        <View style={{marginTop: -250}}>
          <VaccineBooking />
        </View>
        <View style={{marginTop: 50, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              VaccineRegister();
            }}>
            <View style={styles.buttonNext}>
              <Text style={styles.butonText}>Register</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.buttonNext}>
              <Text style={styles.butonText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
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
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
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
    fontSize: 20,
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
