import React, {Component,useEffect,useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {

  const [checkPage,setCheckPage] = useState("");

  useEffect(() => {

    const storeData = async() => {
      try {
        await AsyncStorage.setItem('appStatus', "1")
      } catch (e) {
        // saving error
      }
    }

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('appStatus')
        if(value !== null) {
          // value previously stored
          console.log(value);
        }
      } catch(e) {
        // error reading value

      }
    }
      AsyncStorage.multiGet(['username']).then((data) => {
          let username = data[0][1];
          console.log(username);
          // fetchData(username);
        if(username == "logout"){
          setTimeout(() => {
            navigation.navigate('Sign');
          }, 2500);
        }else{
            navigation.navigate('MainTabsScreen');
        }
        });
    getData();
  }, [])
  
console.log(checkPage);
  return (
    <View style={styles.view}>
      <Image
        style={{
          height: 250,
          width: '80%',
          marginBottom: 100,
          marginTop: 150,
          marginLeft: '10%',
          marginRight: '10%',
        }}
        source={require('../../assets/logo.jpg')}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
