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
import {v4 as uuid} from 'uuid';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
import RadioButton from '../VaccineRegistration/RadioButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Value} from 'react-native-reanimated';
const rx_live = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const name = /^[a-zA-Z]+[a-zA-Z]+$/;
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
      tracingKey: '',
      UsernameError: '',
      emailError: '',
      addressError: '',
      nicError: '',
      lastNameError: '',
      FirstNameError: '',
      ContactNumberError: '',
      Gender: '',
      data: ['Male', 'Female'],
      Checked: 0,
      GenderError: 'Gender is required.',
    };
  }

  firstNameValidator() {
    if (this.state.firstName == '') {
      this.setState({firstNameError: 'First Name is required.'});
    } else if (!name.test(this.state.firstName)) {
      this.setState({firstNameError: "First Name can't have Numbers"});
    } else {
      this.setState({firstNameError: ''});
    }
  }

  lastNameValidator() {
    if (this.state.lastName == '') {
      this.setState({lastNameError: 'Last Name is required.'});
    } else if (!name.test(this.state.lastName)) {
      this.setState({lastNameError: "Last Name can't have Numbers"});
    } else {
      this.setState({lastNameError: ''});
      console.log(this.state.lastName.slice(-1));
    }
  }
  nicValidator() {
    if (this.state.nic == '') {
      this.setState({nicError: 'NIC is required.'});
    } else if (this.state.nic.slice(-1) == 'V') {
      if (this.state.nic.length != 10) {
        this.setState({nicError: 'Invalid Id type'});
      } else {
        this.setState({nicError: ''});
      }
    } else if (this.state.nic.slice(-1) == 'v') {
      if (this.state.nic.length != 10) {
        this.setState({nicError: 'Invalid Id type'});
      } else {
        this.setState({nicError: ''});
      }
    } else if (this.state.nic.length != 12) {
      this.setState({nicError: 'Invalid Id type'});
    } else {
      this.setState({nicError: ''});
    }
  }

  addressValidator() {
    if (this.state.address == '') {
      this.setState({addressError: 'Address is required.'});
    } else {
      this.setState({addressError: ''});
    }
  }

  emailValidator() {
    if (!rx_live.test(this.state.email)) {
      this.setState({emailError: 'Invalid Email'});
    } else if (this.state.email == '') {
      this.setState({emailError: 'Email is required.'});
    } else {
      this.setState({emailError: ''});
    }
  }
  userNameValidator() {
    if (this.state.userName == '') {
      this.setState({UsernameError: 'User Name is required.'});
    } else {
      this.setState({UsernameError: ''});
    }
  }

  passwordValidator() {
    if (this.state.Password == '') {
      this.setState({passwordError: 'Password is required.'});
    } else if (this.state.password.length < 8) {
      this.setState({passwordError: 'Password must be more than 8 characters'});
    } else {
      this.setState({passwordError: ''});
    }
  }

  numberValidator() {
    if (this.state.contactNumber == '') {
      this.setState({contactNumberError: 'Contact Number is required.'});
    } else if (this.state.contactNumber.length != 10) {
      this.setState({contactNumberError: 'Invalid Number'});
    } else {
      this.setState({contactNumberError: ''});
    }
  }
  GenderValidator() {
    if (this.state.Gender == '') {
      this.setState({GenderError: 'Gender is required.'});
    } else {
      this.setState({GenderError: ''});
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
    let tracingKey = uuid();
    // let tracingKey = str.replace(/[^a-zA-Z0-9 ]/g, "");

    // this.state.tracingKey = tracingKey;
    // AsyncStorage.multiSet([['tracingKey', tracingKey]]);

    const {
      firstName,
      lastName,
      nic,
      contactNumber,
      email,
      userName,
      password,
      address,
      Gender,
    } = this.state;
    console.log('nuwan');
    console.log(Gender);
    if (firstName == '') {
      alert('First Name is empty.. Invalid!');
    } else if (!name.test(this.state.firstName)) {
      alert('First name Invalid.!');
    } else if (lastName == '') {
      alert('Last Name is empty.. Invalid!');
    } else if (!name.test(this.state.lastName)) {
      alert('Last name Invalid.!');
    } else if (nic == '') {
      alert('NIC is empty.. Invalid!');
    } else if (contactNumber == '') {
      alert('Contact Number is empty.. Invalid!');
    } else if (contactNumber.length != 10) {
      alert('Invalid Contact Number!');
    } else if (email == '') {
      alert('email is empty.. Invalid!');
    }
    if (!rx_live.test(this.state.email)) {
      alert('Invalid Email.!');
    } else if (userName == '') {
      alert('User Name is empty.. Invalid!');
    } else if (password == '') {
      alert('Password is empty.. Invalid!');
    } else if (password.length < 8) {
      alert('Password must have more than 8 characters.. Invalid!');
    } else if (address == '') {
      alert('Address is empty.. Invalid!');
    } else if (Gender == '') {
      alert('Please Select Gender.. Invalid!');
    }
    // else if (Gender=='') {
    //   alert('Please Select Gender.. Invalid!');
    // }
    else {
      //this.props.navigation.navigate('MainTabsScreen');

      console.log(tracingKey);

      Axios.post('http://192.168.1.3:3001/api/insert', {
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        contactNumber: contactNumber,
        email: email,
        userName: userName,
        password: password,
        address: address,
        Gender: Gender,
        tracingKey: tracingKey,
      })
        .then(data => {
          console.log(data.data);
          if (data.data == 'wrong') {
            alert('Duplicate User Name. Invalid..!');
          } else {
            alert('Successfull');
            this.props.navigation.navigate('Login');
          }
        })
        .catch(error => {
          alert(error);
        });
    }
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
              source={require('../../assets/logoNew.png')}
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
            <Icon name="envelope-square" color="#3342C8" size={22}></Icon>
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

            <Icon name="male" color="#3342C8" size={22}></Icon>
            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: 5},
              ]}>
              Gender
            </Title>

            {this.state.data.map((data, key) => {
              return (
                <View style={{marginTop: 4}}>
                  {this.state.checked == key ? (
                    <TouchableOpacity style={styles.btn}>
                      <Image
                        style={styles.img}
                        source={require('../../assets/radio.png')}
                      />
                      <Text style={styles.btnText}>{data}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({checked: key, Gender: data});
                        this.GenderValidator();
                      }}
                      style={styles.btn}>
                      <Image
                        style={styles.img}
                        source={require('../../assets/radio1.png')}
                      />

                      <Text style={styles.btnText}>{data}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
            <Text style={{color: 'red', textAlign: 'center'}}>
              {this.state.GenderError}
            </Text>
          </View>
          <View style={{marginBottom: 10, marginTop: 10}}>
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
    fontSize: 20,
    fontWeight: 'normal',
    color: '#3342C8',
  },
  genderText: {
    marginTop: -30,
    marginLeft: -40,
    marginBottom: 40,
    color: '#3342C8',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 10,
  },
  img: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  btnText: {
    color: '#3342C8',
  },
});

export default Register;
