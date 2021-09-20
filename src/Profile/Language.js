import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButton from '../VaccineRegistration/RadioButton.js';
const Language = () => {
  return (
    <View>
      <View>
        <Text style={styles.txt}>Choose your preferred Language</Text>
      </View>
      <View style={styles.credentialText}>
        <RadioButton />
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  credentialText: {
    alignSelf: 'center',
    width: '60%',
    height: 150,
    marginTop:30,
    // marginTop: 300,
    // marginLeft: 25,
    borderStartColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius:15,
    shadowOpacity: 0,
    shadowRadius: 4.65,
    alignContent:"center",
    justifyContent:'center',
    elevation: 4,
  },
  txt:{
      color:"#3342C8",
      fontSize:20,
      fontWeight:'bold',
      alignSelf:'center',
      marginTop:20
  }
});
