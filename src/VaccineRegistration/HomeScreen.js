import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {format} from 'date-fns';
import BackgroundTask from 'react-native-background-task';
import ContactTracing from './ContactTracing';
import Safe from './Safe';
import Danger from './Danger';

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [tracingKey, setTracingKey] = useState('');
  const [dailyTracingKey, setDailyTracingKey] = useState('');
  const [rollingProximityKey, setRollingProximityKey] = useState('');
  const [showSafe, setShowSafe] = useState(true);
  const [showDanger, setShowDanger] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    // BackgroundTask.schedule();
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      setUserName(username);
      fetchData(username);
      checkStatus(username);
      // setKeys(tracingKey, username);
      // setRPK(dailyTracingKey,username);
      setInterval(() => {
        // checkStatus(username);
      }, 2000);
    });
  }, []);

  const checkStatus = async username => {
    Axios.get('http://192.168.8.101:3000/api/checkstatus', {
      params: {username: username},
    })
      .then(function (response) {
        console.log(response.data[0].contact_tracing_status);
        let s = response.data[0].contact_tracing_status;
        setStatus(response.data[0].contact_tracing_status);
        if (s == 0) {
          setShowSafe(true);
          setShowDanger(false);
        } else {
          setShowDanger(true);
          setShowSafe(false);
        }
        // setTracingKey(response.data[0]);
        // console.log(tracingKey+"trrr");
      })
      .catch(function (error) {});
  };

  const fetchData = async username => {
    Axios.get('http://192.168.8.101:3000/api/tracingkey', {
      params: {username: username},
    })
      .then(function (response) {
        console.log(response.data[0].tracing_key);
        setTracingKey(response.data[0].tracing_key);
        console.log(tracingKey + 'trrr');
      })
      .catch(function (error) {});
  };

  return (
    <View style={styles.container}>
      {showSafe && <Safe userName={userName} />}
      {showDanger && <Danger userName={userName} />}
      {/* <View> */}

      {/* <LottieView
        style={styles.anime}
        source={require('../../assets/40375-health-loader-radar.json')}
        autoPlay
        loop
      /> */}
      {/* </View> */}
      <ContactTracing dtk={tracingKey} username={userName} />
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text1: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
  },
  text2: {
    color: '#228b22',
    fontSize: 20,
    textAlign: 'left',
  },
  text3: {
    color: '#228b22',
    fontSize: 17,
    textAlign: 'center',
  },
  anime: {
    marginTop: 110,
  },
});
