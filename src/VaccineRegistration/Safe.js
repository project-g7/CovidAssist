import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Safe = (props) => {
  return (
    
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text1}>{props.userName}</Text>
          <Text style={styles.text2}>You are Safe </Text>
          <Text style={styles.text3}>
             You haven`t exposed to a Covid patient
          </Text>
        </View>
      </View>
    
  );
};

export default Safe;

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
    borderColor:'#228b22',
    borderWidth:10
  },
  text1: {
    color: 'black',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'left',
  },
  text2: {
    color: '#228b22',
    fontSize: 22,
    fontWeight:'bold',
    textAlign: 'left',
  },
  text3: {
    color: '#228b22',
    fontSize: 17,
    textAlign: 'center',
  },
});
