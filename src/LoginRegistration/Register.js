import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Axios from 'axios';
const rx_live = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//import MainTabScreen from '../VaccineRegistration/MainTabsScreen';
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
      passwordError: '',
      address: '',
      UsernameError: '',
      emailError: '',
    };
  }
  emailValidator() {
    if (rx_live.test(this.state.email)) {
      this.setState({emailError: 'Wrong Email'});
    }
    else if (this.state.email == '') {
      this.setState({emailError: "User Name can't be empty"});
    } 
    else {
      this.setState({emailError: ''});
    }
  }
  userNameValidator() {
    if (this.state.userName == '') {
      this.setState({UsernameError: "User Name can't be empty"});
    } else {
      this.setState({UsernameError: ''});
    }
  }

  passwordValidator() {
    if (this.state.Password == '') {
      this.setState({passwordError: "Password can't be empty"});
    } else if (this.state.password.length < 5) {
      this.setState({passwordError: 'Password must be more than 4 characters'});
    } else {
      this.setState({passwordError: ''});
    }
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
    const {
      firstName,
      lastName,
      nic,
      contactNumber,
      email,
      userName,
      password,
      address,
    } = this.state;
    //this.props.navigation.navigate('MainTabsScreen');
    Axios.post('http://3.21.100.220:3000/api/insert', {
      firstName: firstName,
      lastName: lastName,
      nic: nic,
      contactNumber: contactNumber,
      email: email,
      userName: userName,
      password: password,
      address: address,
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
      <ScrollView>
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
              keyboardType="numeric"
              name="contactNumber"
              onChangeText={value => this.setState({contactNumber: value})}
              underlineColorAndroid={'transparent'}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Address"
              name="address"
              onChangeText={value => this.setState({address: value})}
              underlineColorAndroid={'transparent'}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Email"
              onBlur={() => this.emailValidator()}
              onChangeText={text => {
                this.setState({email: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.emailError}
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="User name"
              name="userName"
              onBlur={() => this.userNameValidator()}
              onChangeText={text => {
                this.setState({userName: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.UsernameError}
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="Password"
              name="password"
              secureTextEntry={true}
              onBlur={() => this.passwordValidator()}
              onChangeText={text => {
                this.setState({password: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', marginBottom: 15, textAlign: 'center'}}>
              {this.state.passwordError}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.submitDetails()}>
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
      </ScrollView>
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
    marginBottom: 10,
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
