//Android 10 figma
import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {format} from 'date-fns';
import BackgroundTask from 'react-native-background-task';
import ContactTracing from './ContactTracing'

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [tracingKey, setTracingKey] = useState('');
  const [dailyTracingKey, setDailyTracingKey] = useState('');
  const [rollingProximityKey, setRollingProximityKey] = useState('');

  useEffect(() => {
    BackgroundTask.schedule();
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      setUserName(username);
      fetchData(username);
      setKeys(tracingKey, username);
      // setRPK(dailyTracingKey,username);

    });
  }, [tracingKey]);

  useEffect(() => {
    // setRPK(dailyTracingKey);
  }, []);

  BackgroundTask.define(() => {
    // console.log('Hello from a background task');
    // BackgroundTask.finish();
    let Htime = Number(format(new Date(),'HH'));
    if(Htime == '00'){
      let mtime = Number(format(new Date(),'mm'));        
      if(mtime>='00' && mtime<='15'){
        AsyncStorage.multiGet(['username']).then(data => {
          let username = data[0][1];
          setKeys(tracingKey, username);
        });
          
      }
    }

    // setRPK(dailyTracingKey,userName);

  });


 

  const fetchData = async username => {
    Axios.get('http://3.21.100.220:3000/api/tracingkey', {
      params: {username: username},
    })
      .then(function (response) {
        setTracingKey(response.data[0].tracing_key);
        console.log(tracingKey);
      })
      .catch(function (error) {});
  };

  const setKeys = (tracingKey, username) => {
    let currentDate = format(new Date(), 'yyyy-MM-dd');
    let formatedDate = currentDate.replace(/[^0-9 ]/g, '');
    console.log(formatedDate);
    let dtk = tracingKey + formatedDate;
    setDailyTracingKey(dtk);
    console.log(dtk);

    Axios.post('http://192.168.1.103:3000/api/dailytracingkey', {
      dailyTracingKey: dtk,
      userName: username,
    })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        alert(error);
      });
  };

  // const setRPK = (dailyTK,username) => {
  //   let Htime = Number(format(new Date(), 'HH'));
  //   let mtime = Number(format(new Date(), 'mm'));
  //   let timeInMin = Number(Htime * 60 + mtime);
  //   let minNumber = Math.ceil(timeInMin / 15);
  //   console.log(timeInMin);
  //   console.log(minNumber);
  //   let rpk = dailyTK + minNumber.toString();
  //   setRollingProximityKey(rpk);

  //   // Axios.post('http://192.168.1.103:3000/api/rollingproximitykey', {
  //   //       rollingproximitykey: dailyTK,
  //   //       userName: username,
  //   //     })
  //   //       .then(data => {
  //   //         console.log(data);
  //   //       })
  //   //       .catch(error => {
  //   //         alert(error);
  //   //       });

  // };



  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text1}>{userName}</Text>
          <Text style={styles.text2}>You are Safe </Text>
          <Text style={styles.text3}>
            You are Safe You haven`t expoused to a Covid patient
          </Text>
        </View>
      </View>
      {/* <View> */}

      <LottieView
        style={styles.anime}
        source={require('../../assets/40375-health-loader-radar.json')}
        autoPlay
        loop
      />
      {/* </View> */}
      {/* <ContactTracing dtk={dailyTracingKey}/> */}
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  box: {
    width: '100%',
    height: '35%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#228b22',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text1: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  text2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  text3: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  anime: {
    marginTop: 110,
  },
});
