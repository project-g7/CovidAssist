import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import third from './third';
class Welcome extends Component {

  componentDidMount(){
    const storeData = async() => {
      try {
      // console.log("ffdd");
        await AsyncStorage.setItem('appStatus', "2");

      } catch (e) {
        // saving error
      }
    }
    
    const getData = async () => {
        console.log("sss");
      try {
        const value = await AsyncStorage.getItem('appStatus');
        if(value !== null) {
          // value previously stored

          console.log(value);
        }
      } catch(e) {
        // error reading value
      }
    }
  storeData();
  getData();
      AsyncStorage.multiSet([["appStatus", "2"]]);
  
  }

  render(navigation) {
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
          <Text style={styles.headText}>How CovidAssist Works</Text>
          <Text style={styles.bodyText}>
            Bluetooth signals are used to determine you’re near another
            CovidAssist user.
          </Text>
          <Text style={styles.bodyText}>
            Every instance of close contact between you and other CovidAssit
            users is noted to create contact data. This information is encrypted
            and only stored in your phone.
          </Text>
          <Text style={styles.bodyText}>
            If you test positive to Covid-19 as a CovidAssit user, a state or
            territory health official will contact you. They will assist with
            voluntery upload of your contact data to a highly secure information
            storage system.
          </Text>
          <Text style={styles.bodyText}>
            CovidAssit can also inform you with alert if you came in close
            contact with another CovidAssit user who tested positive.
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Welcome2')}>
            <View style={styles.button_signin}>
              <Text style={styles.buttonText}>Next</Text>
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
    fontSize: 18,
    alignContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  headText: {
    fontSize: 25,
    marginBottom: 25,
    marginTop: 0,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  button_signin: {
    width: 200,
    borderRadius: 10,
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
});
export default Welcome;
