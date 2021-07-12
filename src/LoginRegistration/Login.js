import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      passwordError: '',
      UsernameError: '',
    };
  }
  
  passwordValidator(){
    if(this.state.password=="")
    {
         this.setState({passwordError:"Password can't be empty"})
    }
    else if(this.state.password.length<5){
      this.setState({passwordError:"Password must be more than 4 characters"})
    }
    else{
      this.setState({passwordError:""})
    }
  }
  userNameValidator(){
  if(this.state.userName=="")
  {
       this.setState({UsernameError:"User Name can't be empty"})
  }
  else{
    this.setState({UsernameError:""})
  }
}
  validate_feild = () => {
    const {Username, Password} = this.state;
    if (Username == '') {
      alert('Please enter the User name');
      return false;
    } else if (Password == '') {
      alert('Please enter the password');
      return false;
    } else{
          AsyncStorage.multiSet([["username", this.state.userName]]);
          console.log(this.state.userName);
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
        <Icon name="user" color="#1167b1" size={22}></Icon>
          <TextInput
            style={styles.textinput}
            placeholder="Username"
            onBlur={()=>this.userNameValidator()}
            onChangeText={(text) => {this.setState({userName: text})}}
            underlineColorAndroid={'transparent'}
          /><Text style={{color:'red', marginBottom:10,textAlign:'center'}}>{this.state.UsernameError}</Text>
          <Icon name="lock" color="#1167b1" size={22}></Icon>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            secureTextEntry={true}
            onBlur={()=>this.passwordValidator()}
            onChangeText={(text) => {this.setState({password: text})}}
            underlineColorAndroid={'transparent'}
          /><Text style={{color:'red', textAlign:'center'}}>{this.state.passwordError}</Text>
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
