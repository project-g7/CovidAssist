import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Welcome');
  }, 2500);
  return (
    <View style={styles.view}>
      <Image
        style={{
          height: 250,
          width: '80%',
          marginBottom: 100,
          marginTop: 50,
          marginLeft: '15%',
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
