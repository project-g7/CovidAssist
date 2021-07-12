import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
class Forget_password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  userNameValidator() {
    if (this.state.userName == '') {
      this.setState({UsernameError: 'User name is empty'});
    } else {
      this.setState({UsernameError: ''});
    }
  }
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
        <Text style={styles.headText}>Forgot Your Password?</Text>
        <Text style={styles.bodyText}>
          Enter your user name and we’ll send you a link to reset your password.
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
        </View>
        <View style={{marginTop: '20%'}}>
          <TouchableOpacity>
            <View
              style={styles.button_signin}
              onPress={() => this.props.navigation.navigate('main')}>
              <Text style={styles.buttonText}>Send Link</Text>
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
