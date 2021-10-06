import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import {url} from '../config'

const VaccineBooking = props => {
  const {t, i18n} = useTranslation();

  const [data, setData] = useState([]);
  useEffect(() => {
    //const interval = setInterval(() => {
    // console.log('This will run every second!');
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      // console.log(username);
      fetchData(username);
    });
    //}, 2000);

    //return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(props.language);
  }, [props.language]);

  const fetchData = async username => {
    // console.log(username);
    const encodedUsername = encodeURIComponent(username);
    const response = await fetch(
      `${url.BASE_URL}/api/users?username=${encodedUsername}`,

      {method: 'GET'},
    );
    const users = await response.json();
    setData(users);
    // console.log(data);
  };
  return (
    <View style={styles.credentialText}>
      <Text style={styles.headText}>{t('registerforVaccine')}</Text>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.heder}>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Icon name="user" color="#3342C8" size={23}></Icon>
          </View>
          <Title
            style={[
              styles.title,
              {marginLeft: 55, marginTop: -30, marginBottom: -10},
            ]}>
            {t('fullname')}
          </Title>
          {data.map(val => {
            return (
              <Text key={val.first_name} style={styles.textinput}>
                {val.first_name} {val.last_name}
              </Text>
            );
          })}
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Icon name="user" color="#3342C8" size={23}></Icon>
          </View>
          <Title
            style={[
              styles.title,
              {marginLeft: 55, marginTop: -25, marginBottom: -10},
            ]}>
            {t('nicNum')}
          </Title>
          {data.map(val => {
            return (
              <Text key={val.nic} style={styles.textinput}>
                {val.nic}
              </Text>
            );
          })}
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Icon name="phone" color="#3342C8" size={23}></Icon>
          </View>
          <Title
            style={[
              styles.title,
              {marginLeft: 55, marginTop: -25, marginBottom: -10},
            ]}>
            {t('contactNumber')}
          </Title>
          {data.map(val => {
            return (
              <Text key={val.contact_number} style={styles.textinput}>
                {val.contact_number}
              </Text>
            );
          })}
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Icon name="home" color="#3342C8" size={23}></Icon>
          </View>
          <Title
            style={[
              styles.title,
              {marginLeft: 55, marginTop: -25, marginBottom: -10},
            ]}>
            {t('address')}
          </Title>

          {data.map(val => {
            return (
              <Text key={val.address} style={styles.textinput}>
                {val.address}
              </Text>
            );
          })}
          <Title
            style={[
              styles.title,
              {marginLeft: 55, marginTop: -25, marginBottom: 20},
            ]}></Title>
          {/* <View style={{marginTop: 20}}>
          <Icon name="home" color="#3342C8" size={25}></Icon>
        </View> */}
          {/* <Title
          style={[
            styles.title,
            {marginLeft: 25, marginTop: -25, marginBottom: -10},
          ]}>
          Gender
        </Title>
        <TextInput
           onChangeText={value => this.setState({Gender: value})}
           underlineColorAndroid={'transparent'}
        /> */}
          {/* <View style={styles.genderText}>
          <RadioButton />
        </View> */}

          {/* <TouchableOpacity>
          <View style={styles.buttonNext}>
            <Text style={styles.butonText}>Register</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonNext1}>
            <Text style={styles.butonText}>Cancel</Text>
          </View>
        </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};
export default VaccineBooking;
const styles = StyleSheet.create({
  heder: {
    width:'100%',
    borderColor: 'blue',
    borderWidth: 3,
    height: 'auto',
    marginTop: 10,
  },
  credentialText: {
    // alignSelf: 'center',
    width: '100%',
    height: 'auto',
    // marginTop: 300,
    // marginLeft: 25,

    // borderStartColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0,
    // shadowRadius: 4.65,

    // elevation: 8,
  },

  textinput: {
    // marginTop: 8,
    // alignSelf: 'stretch',
    // height: 40,
    // marginBottom: 20,

    // borderBottomWidth: 0.5,
    // borderBottomColor: 'blue',
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginLeft: '15%',
    marginTop: 15,
  },
  headText: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    // marginLeft: 24,
    marginTop: 20,
    marginBottom: 15,
    // color: 'black',
    color: 'blue',

    // fontWeight: 'bold'
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
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
    marginTop: -100,
    marginBottom: 100,
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
    marginTop: 20,
    // marginLeft: -5,
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#3342C8',
  },
  genderText: {
    marginTop: -30,
    marginLeft: -180,
    marginBottom: 60,
    color: '#3342C8',
    fontSize: 18,
  },
  caption: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginLeft: '9%',
  },
  main:{
    display:'flex',
    flexDirection:'column',
    // marginTop:150,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  }
});
