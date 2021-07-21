//Android 10 figma
import React,{useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({navigation}) => {
  const [userName , setUserName] = useState('');
  AsyncStorage.multiGet(['username']).then(data => {
  let username = data[0][1];
  setUserName(username);
  });
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text1}>{userName}</Text>
          <Text style={styles.text2}>You are Safe</Text>
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
    backgroundColor:'white'
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
