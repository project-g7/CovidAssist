import React, {Component} from 'react';
import Axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {url} from '../config'

class Forget_password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      password2: '',
      passwordError: '',
      password2Error: '',
    };
  }
  userNameValidator() {
    if (this.state.userName == '') {
      this.setState({UsernameError: 'User name is empty'});
    } else {
      this.setState({UsernameError: ''});
    }
  }
  passwordValidator() {
    if (this.state.password == '') {
      this.setState({passwordError: 'Password is empty'});
    } else if (this.state.password.length < 8) {
      this.setState({passwordError: 'Password must be more than 8 characters'});
    } else {
      this.setState({passwordError: ''});
    }
  }
  confirmpasswordValidator() {
    if (this.state.password2 == '') {
      this.setState({password2Error: 'Confirm Password is empty'});
    } else if (this.state.password2 != this.state.password) {
      this.setState({password2Error: 'Not matching'});
    } else {
      this.setState({password2Error: ''});
    }
  }
  sendUsername = () => {
    console.log('work');
    const {userName, password, password2} = this.state;

    if (userName == '') {
      alert('User Name is empty.. Invalid!');
    } else if (password == '') {
      alert('New Password is empty.. Invalid!');
    } else if (password2 == '') {
      alert('Confirm Password is empty.. Invalid!');
    } else if (password2 != password) {
      alert('Not matching Passwords.. Invalid!');
    } else {
      Axios.post(`${url.BASE_URL}/api/forgotpass`, {
        userName: userName,
        password: password,
        password2: password2,
      })
        .then(data => {
          console.log(data.data);
          if (data.data == 'wrong') {
            alert('User Name Invalid..!');
          } else {
            alert('Link Send to email');
            console.log(data.data);
            console.log('found');
            this.props.navigation.navigate('Login');
            // this.props.navigation.navigate('Link Send to email');
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
              source={require('../../assets/logo.jpg')}
            />
          }
          <Text style={styles.headText}>Forgot Your Password?</Text>
          <Text style={styles.bodyText}>
            Enter your user name and we’ll send you a link to reset your
            password.
          </Text>
          <View style={styles.username}>
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
              placeholder="Username"
              onBlur={() => this.userNameValidator()}
              onChangeText={text => {
                this.setState({userName: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', marginBottom: 10, textAlign: 'center'}}>
              {this.state.UsernameError}
            </Text>
            <Icon name="lock" color="#3342C8" size={22}></Icon>

            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
             New Password
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
            <Icon name="lock" color="#3342C8" size={22}></Icon>

            <Title
              style={[
                styles.title,
                {marginLeft: 25, marginTop: -25, marginBottom: -10},
              ]}>
              Confirm Password
            </Title>
            <TextInput
              style={styles.textinput}
              placeholder="Confirm Password"
              name="password2"
              secureTextEntry={true}
              onBlur={() => this.confirmpasswordValidator()}
              onChangeText={text => {
                this.setState({password2: text});
              }}
              underlineColorAndroid={'transparent'}
            />
            <Text style={{color: 'red', marginBottom: 15, textAlign: 'center'}}>
              {this.state.password2Error}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.sendUsername()}>
              <View style={styles.button_signin}>
                <Text style={styles.buttonText}>Send Link</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  button_signin: {
    width: 220,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#3342C8',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    //fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  headText: {
    fontSize: 25,
    marginBottom: 25,
    marginTop: 0,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 18,
    alignContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 0,
    color: '#757373',
  },
  username: {
    alignSelf: 'center',
    width: '60%',
    marginTop: 50,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 20,
    borderBottomColor: '#3342C8',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#3342C8',
  },
});

export default Forget_password;
