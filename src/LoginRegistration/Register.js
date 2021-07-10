import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Axios from 'axios';
class Register extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      nic: '',
      userName: '',
      password: '',
      testData: '',
    };
  }

  

    // useEffect(()=>{
    //   fetchData();
    // },[])

    // const fetchData = async ()=>{
    //   const response = await fetch('http://192.168.1.3:3001/api/get');
    //   const users = await response.json();
    //   setTest(users);
    //   // console.log(data);
    // }
 
    submitDetails = () => {
        const {firstName, lastName, nic, contactNumber, email, userName, password} =
      this.state; 
    // this.props.navigation.navigate('Forget_password');
    Axios.post('http://3.21.100.220:3000/api/insert', {
      firstName: firstName,
      lastName: lastName,
      nic: nic,
      contactNumber: contactNumber,
      email: email,
      userName: userName,
      password: password,
    }) 
      .then(() => {
        alert('Successful insert');
      })
      .catch(error => {
        alert(error);
      });
  };
  render() {
  return (
    <View style={styles.view}>
      {
        <Image
          style={{
            height: 200,
            width: 200,
            marginBottom: 16,
            marginTop: 20,
          }}
          source={require('../../assets/logo.jpg')}
        />
      }
      <View style={styles.regform}>
        <TextInput
          style={styles.textinput}
          placeholder="First name"
          name="firstName"
          onChangeText={value => this.setState({firstName: value})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Last name"
          name="lastName"
          onChangeText={value => this.setState({lastName: value})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="NIC"
          name="nic"
          onChangeText={value => this.setState({nic: value})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Phone Number"
          name="contactNumber"
          onChangeText={value => this.setState({contactNumber: value})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          name="email"
          onChangeText={value => this.setState({email: value})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="User name"
          name="userName"
          onChangeText={value => this.setState({userName: value})}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          name="password"
          secureTextEntry={true}
          onChangeText={value => this.setState({password: value})}
          underlineColorAndroid={'transparent'}
        />
      </View>
      <View>
        <TouchableOpacity 
        onPress={() => this.submitDetails()}
        >
          <View style={styles.button_signin}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* {testData.map((val)=>{
          return(
            <Text> id: {val.id} | testNum: {val.test_num} | testText: {val.test_text}</Text>
      );
        })} */}
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
  regform: {
    alignSelf: 'center',
    width: '60%',
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 20,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  button_signin: {
    width: 260,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#3342C8',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default Register;
