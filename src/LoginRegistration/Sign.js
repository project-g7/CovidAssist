import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Sign extends Component {

  componentDidMount(){
        // AsyncStorage.setItem('username', "logout");
        // let checkVal = AsyncStorage.getItem('username');
        // console.log(checkVal);
    AsyncStorage.multiSet([["username", "logout"]]);
    AsyncStorage.multiSet([["tracingKey", ""]]);
    // AsyncStorage.multiSet([["username", "manjitha"]]);
    AsyncStorage.multiGet(['username']).then((data) => {
          let username = data[0][1];
          console.log(username);
          // fetchData(username);
        });
  }

  render(navigation) {
    return (
      <View style={styles.view}>
        {
          <Image
            style={{
              height: 220,
              width: 220,
              marginBottom: 16,
              marginTop: 20,
            }}
            source={require('../../assets/logoNew.png')}
          />
        }
        <View style={{marginTop: '45%'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.button_signin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <View style={styles.button_signup}>
              <Text style={styles.buttonText2}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_signin: {
    width: 260,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#3342C8',
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#3342C8',
  },
  button_signup: {
    width: 260,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#3342C8',
  },
  buttonText: {
    color: 'white',
    //fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonText2: {
    color: '#3342C8',
    //fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Sign;
