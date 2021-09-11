import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconf from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({route, navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  // const {first_name,last_name,nic,contact_number,email,user_name} = route.params;
  // console.log(route.params);

  const [data, setData] = useState([]);
  // const [data,setData] = useState([]);
  useEffect(() => {
    // const interval = setInterval(() => {
    // console.log('This will run every second!');
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      console.log(username);
      fetchData(username);
    });
    // fetchData();
    // console.log(lastName);

    // }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async username => {
    console.log(username);
    const encodedUsername = encodeURIComponent(username);
    const response = await fetch(
<<<<<<< HEAD
      `http://192.168.8.100:3000/api/users?username=${encodedUsername}`,
=======
      `http://192.168.1.104:3000/api/users?username=${encodedUsername}`,
>>>>>>> 20702e2c46c42fd16d9e2df49fce2f84c5397629
      {method: 'GET'},
    );
    const users = await response.json();
    setData(users);
    setFirstName(users[0].first_name);
    setLastName(users[0].last_name);
    setNic(users[0].nic);
    setContactNumber(users[0].contact_number);
    setEmail(users[0].email);
    setUsername(users[0].user_name);
    // data.map((val)=>{
    //   setFirstName(val.first_name);
    // })
    // users.map((val)=>{
    //             setFirstName(val.first_name);
    //             setLastName(val.last_name);
    //             setNic(val.nic);
    //             setContactNumber(val.contact_number);
    //             setEmail(val.email);
    //             setUsername(val.user_name);
    //              // setFirstName(val.first_name); */}
    //   // console.log(val.first_name);

    //           })

    // console.log(firstName);
  };
  const SaveProfile = () => {
    // console.log(firstName);
    Axios.put('http://192.168.1.103:3000/api/editprofile', {
      firstName: firstName,
      lastName: lastName,
      nic: nic,
      contactNumber: contactNumber,
      email: email,
      username: username,
    })
      .then(() => {
        // console.log("save po");
        alert('Updated');
        fetchData(username);
      })
      .catch(error => {
        // console.log("errrr");
        alert(error);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.userInfoSection}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              alignItems: 'center',
              marginTop: '8%',
              marginBottom: '11%',
            }}>
            <Avatar.Image
              source={require('../../assets/avatar.png')}
              size={100}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Iconf name="user" color="black" size={24} />
              <Title
                style={[
                  styles.title,
                  {
                    marginLeft: 10,
                    marginTop: -3,
                    marginBottom: 5,
                  },
                ]}>
                First Name
              </Title>
            </View>
            {/* <TextInput style={styles.caption} underlineColorAndroid={'blue'} width={'80%'} onChange={(e) => { setFirstName(e.nativeEvent.text) }}>Limal</TextInput> */}
            {data.map(val => {
              {
                /* setFirstName(val.first_name); */
              }
              {
                /* const nn = val.first_name; */
              }
              return (
                <TextInput
                  key={val.first_name}
                  style={styles.caption}
                  underlineColorAndroid={'blue'}
                  width={'80%'}
                  onChange={e => {
                    setFirstName(e.nativeEvent.text);
                  }}>
                  {val.first_name}
                </TextInput>
              );
            })}
          </View>
          <View style={{marginTop: '5%'}}>
            <View style={{flexDirection: 'row'}}>
              <Iconf name="user" color="black" size={24} />
              <Title
                style={[
                  styles.title,
                  {
                    marginLeft: 10,
                    marginTop: -3,
                    marginBottom: 5,
                  },
                ]}>
                Last Name
              </Title>
            </View>
            {data.map(val => {
              {
                /* setLastName(val.last_name); */
              }
              return (
                <TextInput
                  style={styles.caption}
                  key={val.last_name}
                  underlineColorAndroid={'blue'}
                  width={'80%'}
                  onChange={e => {
                    setLastName(e.nativeEvent.text);
                  }}>
                  {val.last_name}
                </TextInput>
              );
            })}
          </View>
          <View style={{marginTop: '5%'}}>
            <View style={{flexDirection: 'row'}}>
              <Iconf name="user" color="black" size={24} />
              <Title
                style={[
                  styles.title,
                  {
                    marginLeft: 10,
                    marginTop: -3,
                    marginBottom: 5,
                  },
                ]}>
                NIC Number
              </Title>
            </View>
            {data.map(val => {
              {
                /* setNic(val.nic); */
              }
              return (
                <TextInput
                  style={styles.caption}
                  key={val.nic}
                  underlineColorAndroid={'blue'}
                  width={'80%'}
                  onChange={e => {
                    setNic(e.nativeEvent.text);
                  }}>
                  {val.nic}
                </TextInput>
              );
            })}
          </View>
          <View style={{marginTop: '5%'}}>
            <View style={{flexDirection: 'row'}}>
              <Iconf name="phone" color="black" size={24} />
              <Title
                style={[
                  styles.title,
                  {
                    marginLeft: 10,
                    marginTop: -3,
                    marginBottom: 5,
                  },
                ]}>
                Contact Number
              </Title>
            </View>
            {data.map(val => {
              {
                /* setContactNumber(val.contact_number); */
              }
              return (
                <TextInput
                  style={styles.caption}
                  key={val.contact_number}
                  underlineColorAndroid={'blue'}
                  width={'80%'}
                  onChange={e => {
                    setContactNumber(e.nativeEvent.text);
                  }}>
                  {val.contact_number}
                </TextInput>
              );
            })}
          </View>
          <View style={{marginTop: '5%'}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="mail" color="black" size={24} />
              <Title
                style={[
                  styles.title,
                  {
                    marginLeft: 10,
                    marginTop: -3,
                    marginBottom: 5,
                  },
                ]}>
                Email
              </Title>
            </View>
            {data.map(val => {
              {
                /* setEmail(val.email); */
              }
              return (
                <TextInput
                  style={styles.caption}
                  key={val.email}
                  underlineColorAndroid={'blue'}
                  width={'80%'}
                  onChange={e => {
                    setEmail(e.nativeEvent.text);
                  }}>
                  {val.email}
                </TextInput>
              );
            })}
          </View>

          <View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  SaveProfile();
                }}>
                <View style={styles.buttonNext}>
                  <Text style={styles.buttonText}>Save</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.buttonNext}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    color: '#1167b1',
  },
  caption: {
    fontSize: 17,
    color: 'black',

    fontWeight: '500',
    marginLeft: '9%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonNext: {
    marginTop: 30,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#3342C8',
    marginBottom: 5,
    alignContent: 'center',
    // marginLeft: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
