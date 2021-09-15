//Android 14 figma
import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
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

// const Stack = createStackNavigator();

const RegisterScreen = props => {
  const [idtype, setIdtype] = useState('');
  const [selection, setSelection] = useState('');
  const [dosetype, setDosetype] = useState('');
  const [userName, setUsername] = useState('');

  const [vaccineName, setVaccineName] = useState('');
  const [vaccineCenter, setVaccineCenter] = useState('');
  const [availableTime, setAvailableTime] = useState([]);
  const [selectTimeSlot, setSelectTimeSlot] = useState('');
  const [date, setdate] = useState('');

  const [check, setCheck] = useState(false);

  useEffect(() => {
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      console.log(username);
      setUsername(username);
      console.log('RRRRRRRRRRRRRRRR');
      // fetData(username);
    });
  }, []);

  const dose = props.doseT;

  console.log('DDDDDDDD');
  console.log(dose);
  console.log('DDDDDDDD');

  const CheckVaccineBooking = () => {
    if (props.doseT === '') {
      Alert.alert(
        'Warning !!!',
        'Selecting the Vaccinated Details are mandatory !!!',
        [
          // {
          //   text: 'Cancel',
          //   onPress: () => console.log('Cancel Pressed'),
          //   style: 'cancel',
          // },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );
      // alert('Selecting the Vaccinated Details are mandatory !!!');
    } else if (props.idType == '') {
      Alert.alert('Warning !!!', 'Selecting the ID type is mandatory !!!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      // alert('Selecting the ID type is mandatory !!!');
    }
    // else if(props.doseT== true){
    //   if(props.doseType==''){
    //     alert('vaccine center is required!');
    //   }
    // }
    else if (vaccineCenter == '') {
      Alert.alert(
        'Warning !!!',
        'Selecting the Vaccine Center is mandatory !!!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
      // alert('Selecting the Vaccine Center is mandatory !!!');
    } else if (vaccineName == '') {
      Alert.alert(
        'Warning !!!',
        'Selecting the Vaccine Name is mandatory !!!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
      // alert('Selecting the Vaccine Name is mandatory !!!');
    } else if (date == '') {
      Alert.alert('Warning !!!', 'Selecting the Date is mandatory !!!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      // alert('Selecting the Date is mandatory !!!');
    } else if (selectTimeSlot == '') {
      Alert.alert('Warning !!!', 'Selecting the Time Slot is mandatory !!!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      // alert('Selecting the Time Slot is mandatory !!!');
    } else {
      Axios.post('http://192.168.8.101:3000/api/VaccineRegisterCheking', {
        username: userName,
        selection: props.doseT,
        dosetype: props.doseType,
      })
        .then(data => {
          console.log('-----------------------');
          console.log(data.data);
          console.log('-----------------------');
          if (data.data == 'alredyBooking') {
            Alert.alert(
              'Warning !!!',
              'There is a Duplicate booking. Invalid..!!!',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            );
            // alert(' There is a Duplicate booking. Invalid..!!!');
          } else if (data.data == 'bookingAvailable') {
            // alert('bookingAvailable');
            VaccineRegister();
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  const VaccineRegister = () => {
    console.log(props.doseT);
    if (props.doseT === '') {
      alert('Selecting the Vaccinated Details are mandatory !!!');
    } else if (props.idType == '') {
      alert('Selecting the ID type is mandatory !!!');
    } else if (props.doseT == true) {
      if (props.doseType == '') {
        alert('vaccine center is required!');
      }
    }
    // else if(props.doseT== true){
    //   if(props.doseType==''){
    //     alert('vaccine center is required!');
    //   }
    // }
    else if (vaccineCenter == '') {
      alert('Selecting the Vaccine Center is mandatory !!!');
    } else if (vaccineName == '') {
      alert('Selecting the Vaccine Name is mandatory !!!');
    } else if (date == '') {
      alert('Selecting the Date is mandatory !!!');
    } else if (selectTimeSlot == '') {
      alert('Selecting the Time Slot is mandatory !!!');
    } else {
      Axios.post('http://192.168.8.101:3000/api/VaccineRegister', {
        vaccineCenter: vaccineCenter,
        vaccineName: vaccineName,
        username: userName,
        selectTime: selectTimeSlot,
        date: date,
        idtype: props.idType,
        selection: props.doseT,
        dosetype: props.doseType,
      })
        .then(() => {
          Alert.alert('Successful!!!', 'Booking is Successful !!!', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          // alert('Booking is Successful !!!');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  const handleTime = selectTimeSlot => {
    setSelectTimeSlot(selectTimeSlot);
    console.log(selectTimeSlot);
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
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

  const handleDate = date => {
    setdate(date);
    console.log('@@@@@@@');
    console.log(date);
    console.log('@@@@@@@');
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
    console.log('#########################################');
    const dates = await response.json();

    console.log(dates.value);
    console.log('000000000000000000000000000');
    if (typeof dates.value == 'undefined') {
      setAvailableTime(dates);
    } else {
      if (dates.value == 'NoAvailbleCenter') {
        alert('There is no Vaccine Center for the selected date !!!');
      } else if (dates.value == 'NoAvailbleTimeSlot') {
        alert('There is no Vaccine Center for the selected date !!!');
      }
    }
    // console.log(dates);

    console.log(dates);
    console.log(dates[0]);
    // setdate(dates);
    console.log('pqr');
    //console.log(dates);
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.boxBoder}>
          <View style={styles.body}>
            <Text style={styles.text}></Text>
            <VaccineCenter
              updateVaccine={handleVaccine}
              updateVaccineName={handleVaccineName}
              selection={props.doseT}
              DoseType={props.doseType}
            />
            {/* <VaccinationName /> */}
          </View>
        </View>

        <View style={styles.dates}>
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
        {check && (
          <TimeAvailable time={availableTime} updateTime={handleTime} />
        )}
        <View style={{marginTop: -250}}>
          <VaccineBooking />
        </View>
        <View style={{marginTop: 50, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              CheckVaccineBooking();
            }}>
            <View style={styles.buttonNext}>
              <Text style={styles.butonText}>Register</Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.buttonNext}>
              <Text style={styles.butonText}>Cancel</Text>
            </View>
          </TouchableOpacity> */}
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
  scroll: {
    // height:'100%',
    // flex: 1,
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
    height: '100%',
    // flexGrow:1,
    // padding: 5,
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
    marginLeft: 125,
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
  dates: {
    marginTop: -25,
  },
});
