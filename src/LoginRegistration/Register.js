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
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
const rx_live = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const name = /^[a-zA-Z]+ [a-zA-Z]+$/;
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
      addressError: '',
      nicError: '',
      lastNameError: '',
      FirstNameError: '',
      ContactNumberError: '',
    };
  }

  firstNameValidator() {
    if (this.state.firstName == '') {
      this.setState({firstNameError: "First Name can't be empty"});
    } else if (name.test(this.state.firstName)) {
      this.setState({firstNameError: "First Name can't be Numbers"});
    } else {
      this.setState({firstNameError: ''});
    }
  }

  lastNameValidator() {
    if (this.state.lastName == '') {
      this.setState({lastNameError: "Last Name can't be empty"});
    } else {
      this.setState({lastNameError: ''});
    }
  }
  nicValidator() {
    if (this.state.nic == '') {
      this.setState({nicError: "NIC can't be empty"});
    } else {
      this.setState({nicError: ''});
    }
  }

  addressValidator() {
    if (this.state.address == '') {
      this.setState({addressError: "Address can't be empty"});
    } else {
      this.setState({addressError: ''});
    }
  }

  emailValidator() {
    if (rx_live.test(this.state.email)) {
      this.setState({emailError: 'Wrong Email'});
    } else if (this.state.email == '') {
      this.setState({emailError: "Email can't be empty"});
    } else {
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
    } else if (this.state.password.length < 8) {
      this.setState({passwordError: 'Password must be more than 4 characters'});
    } else {
      this.setState({passwordError: ''});
    }
  }

  numberValidator() {
    if (this.state.contactNumber == '') {
      this.setState({contactNumberError: "Contact Number can't be empty"});
    } else {
      this.setState({ContactNumberError: ''});
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
            <Icon name="user" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              First Name
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="First Name"
              name="firstName"
              keyboardType="text"
              onBlur={() => this.firstNameValidator()}
              onChangeText={text => {
                this.setState({firstName: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.firstNameError}
            </Text>
            <Icon name="user" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              Last Name
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="Last Name"
              name="lastName"
              keyboardType="text"
              onBlur={() => this.lastNameValidator()}
              onChangeText={text => {
                this.setState({lastName: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.lastNameError}
            </Text>
            <Icon name="user" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              NIC Number
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="NIC"
              name="nic"
              onBlur={() => this.nicValidator()}
              onChangeText={text => {
                this.setState({nic: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.nicError}
            </Text>
            <Icon name="phone" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              Contact Number
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="Contact Number"
              keyboardType="numeric"
              name="contactNumber"
              onBlur={() => this.numberValidator()}
              onChangeText={text => {
                this.setState({contactNumber: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.contactNumberError}
            </Text>
            <Icon name="home" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              Address
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="Address"
              name="address"
              onBlur={() => this.addressValidator()}
              onChangeText={text => {
                this.setState({address: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.addressError}
            </Text>
            <Icon name="home" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              Email Address
            </Title>
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
            <Icon name="user" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              User Name
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="User Name"
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
            <Icon name="lock" color="#3342C8" size={22}></Icon>

            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              Password
            </Title>
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
    borderBottomColor: '#3342C8',
    borderBottomWidth: 1,
  },
  button_signin: {
    width: 260,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#3342C8',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#3342C8',
  },
});

export default Register;
