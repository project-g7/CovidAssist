import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconf from 'react-native-vector-icons/FontAwesome';
import EditProfile from './EditProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

// function MyProfileScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is MyProfile</Text>
//             <Button
//                 title="Go to Edit Profile"
//                 onPress={() => navigation.navigate('EditProfile')}
//             />
//     </View>
//   );
// }

// componentDidMount(){
//   const [data,setData] = useState([]);
//   fetchData();
// }

const MyProfile = ({navigation}) => {
  const [data, setData] = useState([]);
  // const [data,setData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('This will run every second!');
      AsyncStorage.multiGet(['username']).then(data => {
        let username = data[0][1];
        // console.log(username);
        fetchData(username);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async username => {
    // console.log(username);
    const encodedUsername = encodeURIComponent(username);
    const response = await fetch(
      `http://192.168.1.103:3001/api/users?username=${encodedUsername}`,
      {method: 'GET'},
    );
    const users = await response.json();
    setData(users);
    // console.log(data);
  };
  // let name = data.map((item)=> {item})
  // console.log(name);

  return (
    // <MyProfileScreen/>
    // <Stack.Navigator initialRouteName="My Profile">
    //     <Stack.Screen name="My Profile" component={MyProfileScreen} />
    //     <Stack.Screen name="EditProfile" component={EditProfile} />
    // </Stack.Navigator>
    <SafeAreaView nestedScrollEnabled={true} listMode="SCROLLVIEW">
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
            {data.map(val => {
              return (
                <Text key={val.first_name} style={styles.caption}>
                  {val.first_name}
                </Text>
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
              return (
                <Text key={val.last_name} style={styles.caption}>
                  {val.last_name}
                </Text>
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
            {/* <Caption style={styles.caption}>98306</Caption> */}
            {/* <Caption style={styles.caption}>{data[0].nic}</Caption> */}
            {data.map(val => {
              return (
                <Text key={val.nic} style={styles.caption}>
                  {val.nic}
                </Text>
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
            {/* <Caption style={styles.caption}>0774444</Caption> */}
            {/* <Caption style={styles.caption}>{data[0].contact_number}</Caption> */}
            {data.map(val => {
              return (
                <Text key={val.contact_number} style={styles.caption}>
                  {val.contact_number}
                </Text>
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
            {/* <Text>{username}</Text> */}
            {/* <Caption style={styles.caption}>manjitha@gmail</Caption> */}
            {/* <Caption style={styles.caption}>{data[0].email}</Caption> */}
            {data.map(val => {
              return (
                <Text key={val.email} style={styles.caption}>
                  {val.email}
                </Text>
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
                Username
              </Title>
            </View>
            {data.map(val => {
              return (
                <Text key={val.user_name} style={styles.caption}>
                  {val.user_name}
                </Text>
              );
            })}
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{width: '40%', alignItems: 'center'}}>
              {/* <TouchableOpacity */}
              {/* // onPress={() => navigation.navigate('EditProfile', {data})}> */}
              {data.map(val => {
                return (
                  <TouchableOpacity
                    key={val.first_name}
                    onPress={() =>
                      navigation.navigate('EditProfile', {
                        first_name: val.first_name,
                        last_name: val.last_name,
                        nic: val.nic,
                        contact_number: val.contact_number,
                        email: val.email,
                        user_name: val.user_name,
                      })
                    }>
                    <View style={styles.buttonNext}>
                      <Text style={styles.buttonText}>Edit Profile</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 15,
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
    //fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
