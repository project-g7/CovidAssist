import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

class Welcome2 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          {
            <Image
              style={{
                height: 150,
                width: 150,
                marginBottom: 16,
                marginTop: 20,
              }}
              source={require('../../assets/logo.jpg')}
            />
          }
          <Text style={styles.headText}>How CovidAssist works</Text>
          <Text style={styles.bodyText}>
            CovidAssist provides Covid vaccine booking. You can Book a vaccine
            through CovidAssist.
          </Text>
          <Text style={styles.bodyText}>
            You have to Select your district and place first, where you wish to
            get the vaccine.
          </Text>
          <Text style={styles.bodyText}>
            After select details you have to fill your details like id number,
            full name and mobile number, booking date and if you get Covid
            vaccine previously that details.
          </Text>
          <Text style={styles.bodyText}>
            Your booking details will send to vaccination center and you can get
            vaccine from attending that date.
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Sign')}>
            <View style={styles.button_signin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
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
  bodyText: {
    fontSize: 20,
    alignContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 15,
  },
  headText: {
    fontSize: 30,
    marginBottom: 25,
    marginTop: 15,
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
export default Welcome2;
