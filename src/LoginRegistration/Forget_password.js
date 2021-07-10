import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
class Forget_password extends Component {
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
          <TextInput
            style={styles.textinput}
            placeholder="Username"
            underlineColorAndroid={'transparent'}
          />
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
  headText: {
    fontSize: 30,
    marginBottom: 25,
    marginTop: 15,
  },
  bodyText: {
    fontSize: 20,
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
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
});

export default Forget_password;
