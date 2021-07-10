import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
    };
  }
  validate_feild = () => {
    const {Username, Password} = this.state;
    if (Username == '') {
      alert('Please enter the User name');
      return false;
    } else if (Password == '') {
      alert('Please enter the password');
      return false;
    }
    this.props.navigation.navigate('MainTabsScreen');
    return true;
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
        <View style={styles.credentialText}>
          <TextInput
            style={styles.textinput}
            placeholder="Username"
            onChangeText={value => this.setState({Username: value})}
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            onChangeText={value => this.setState({Password: value})}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={{marginTop: '30%'}}>
          <TouchableOpacity onPress={() => this.validate_feild()}>
            <View style={styles.button_signin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forget_password')}>
            <Text style={styles.bodyText}>Forget Password?</Text>
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
  bodyText: {
    fontSize: 20,
    alignContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#3342C8',
  },
  credentialText: {
    alignSelf: 'center',
    width: '60%',
    marginTop: 50,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 20,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
});

export default Login;
