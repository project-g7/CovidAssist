//Android 10 figma
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text1}>Shubangi,</Text>
          <Text style={styles.text2}>You are Safe</Text>
          <Text style={styles.text1}>
            You are Safe You haven`t expoused to a Covid patient
          </Text>
        </View>
      </View>
      {/* <View> */}
      <LottieView style={styles.anime} source={require('../../assets/40375-health-loader-radar.json')} autoPlay loop />
      {/* </View> */}
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  },
  text1: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
  },
  text2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  anime:{
    marginTop: 110
  }
});
