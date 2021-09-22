import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [userName, setUsername] = useState('');
  const [date,setDate] = useState('');

  useEffect(() => {
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      setUsername(username);
      getBookings(username);
    });
  }, []);

  const getBookings = username => {
    axios
      .get('http://192.168.43.14:3000/api/getbookings', {
        params: {username: username},
      })
      .then(function (response) {
        console.log(response.data);
        // let dbDate = new Date(response.data.date.toISOString().substring(0, 10));
        // dbDate.setDate(dbDate.getDate() + 1);
        // let newDate = dbDate.toISOString().substring(0, 10);
        // setDate(newDate);
        setBookings(response.data);
        console.log('Successss');
      })
      .catch(function (error) {});
  };

  const cancelBooking = bookingId => {
    console.log('cancelll');
    console.log(bookingId);
    axios
      .get('http://192.168.43.14:3000/api/cancelbooking', {
        params: {bookingId: bookingId},
      })
      .then(function (res) {
        console.log(res.data);
        getBookings(userName);
      })
      .catch(function (err) {});
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={styles.row}>
              <View>
                <Text style={styles.title}>Center :</Text>
                <Text style={styles.center}>{item.name}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{marginTop: 20}}>
                <Text style={styles.title}>Date :</Text>
                <Text style={styles.center}>{new Date(new Date(item.date.substring(0, 10)).setDate(new Date(item.date.substring(0, 10)).getDate() + 1)).toISOString().substring(0, 10)}</Text>
                {/* <Text style={styles.center}>{item.date}</Text> */}
              </View>
            </View>
            <View style={styles.row}>
              <View style={{marginTop: 20}}>
                <Text style={styles.title}>Time :</Text>
                <Text style={styles.center}>{item.time}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{marginTop: 20}}>
                <Text style={styles.title}>Vaccine :</Text>
                <Text style={styles.center}>{item.vaccine_name}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{marginTop: 20}}>
                <Text style={styles.title}>Dose :</Text>
                <Text style={styles.center}>{item.dose}</Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              {item.status ? (
                <Text></Text>
              ) : (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    console.log(item.booking_id);
                    cancelBooking(item.booking_id);
                  }}>
                  <Text style={styles.btnText}>Cancel Booking</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MyBookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#0EA2F0',
    borderRadius: 15,
    marginTop: 20,
    borderColor: 'green',
    backgroundColor: 'white',
    // height: '100%',
    // borderColor: 'red',
    borderColor: 'blue',
    borderWidth: 5,
  },
  center: {
    // color: '#fff',
    // fontSize: 17,
    // marginLeft: 10,
    // marginTop: 3,
    // color: 'black',
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginLeft: 100,
    marginTop: -25,
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  },
  date: {
    // color: '#fff',
    fontSize: 18,
    marginTop: 5,
    color: 'black',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    // color: '#fff',
    fontSize: 20,
    color: 'black',
    // fontFamily: 'Cochin',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  },
  btn: {
    marginTop: 50,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#AA0303',
    marginBottom: 5,
    alignContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  btnContainer: {
    alignItems: 'center',
  },
});
