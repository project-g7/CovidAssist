import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButton from './RadioButton';

export default class VaccineBooking extends Component {
  render() {
    return (
      <View style={styles.credentialText}>
        <Text style={styles.headText}>
          You will be registering for 2nd dose of the Vaccine
        </Text>
        <ScrollView style={styles.ScrollView}>
          <Icon name="user" color="#1167b1" size={22}></Icon>
          <Title
            style={[
              styles.title,
              {marginLeft: 25, marginTop: -25, marginBottom: -10},
            ]}>
            Full Name
          </Title>
          <TextInput
            style={styles.textinput}
            placeholder="Full Name"
            onChangeText={value => this.setState({FullName: value})}
            underlineColorAndroid={'transparent'}
          />
          <Icon name="user" color="#1167b1" size={22}></Icon>
          <Title
            style={[
              styles.title,
              {marginLeft: 25, marginTop: -25, marginBottom: -10},
            ]}>
            NIC Number
          </Title>
          <TextInput
            style={styles.textinput}
            placeholder="NIC Number"
            onChangeText={value => this.setState({NICNumber: value})}
            underlineColorAndroid={'transparent'}
          />
          <Icon name="phone" color="#1167b1" size={22}></Icon>
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
            onChangeText={value => this.setState({ContactNumber: value})}
            underlineColorAndroid={'transparent'}
          />
          <Icon name="home" color="#1167b1" size={22}></Icon>
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
            onChangeText={value => this.setState({ContactNumber: value})}
            underlineColorAndroid={'transparent'}
          />

          <Icon name="home" color="#1167b1" size={22}></Icon>
          <Title
            style={[
              styles.title,
              {marginLeft: 25, marginTop: -25, marginBottom: -10},
            ]}>
            Gender
          </Title>
          <TextInput
            onChangeText={value => this.setState({Gender: value})}
            //underlineColorAndroid={'transparent'}
          />
          <View style={styles.genderText}>
            <RadioButton />
          </View>

          <TouchableOpacity>
            <View style={styles.buttonNext}>
              <Text style={styles.butonText}>Register</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttonNext1}>
              <Text style={styles.butonText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  credentialText: {
    alignSelf: 'center',
    width: '100%',
    marginTop: 50,
    marginLeft: 60,
  },
  textinput: {
    marginTop: 8,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 20,

    borderBottomWidth: 0.5,
    borderBottomColor: 'blue',
  },
  headText: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: -15,
    marginTop: -18,
  },
  buttonNext: {
    marginTop: 15,
    width: 150,
    height: 50,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#1167b1',
    alignContent: 'center',
    marginLeft: 5,
  },
  buttonNext1: {
    marginTop: -50,
    width: 150,
    height: 50,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#1167b1',
    alignContent: 'center',
    marginLeft: 160,
  },
  butonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  ScrollView: {
    marginLeft: -5,
    marginVertical: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#1167b1',
  },
  genderText: {
    marginTop: -40,
    marginLeft: -180,
  },
});
