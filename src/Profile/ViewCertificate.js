import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../config'

const ViewCertificate = () => {
  const [nic, setNic] = useState('');
  const [username, setUsername] = useState('');
  useEffect(() => {
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      console.log(username);
      setUsername(username);
      fetchData(username);
    });
  }, []);

  const fetchData = username => {
    Axios.get(`${url.BASE_URL}/api/getnic`, {
      params: {username: username},
    })
      .then(function (response) {
        console.log(response.data[0].nic);
        setNic(response.data[0].nic);
        // console.log(tracingKey + 'trrr');
      })
      .catch(function (error) {});
  };

  const handleDownload = async () => {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch(
        'GET',
        `https://covidassist-bucket.s3.us-east-2.amazonaws.com//output/certi_${nic}.png`,
      )
      .then(res => {
        CameraRoll.saveToCameraRoll(res.data, 'photo')
          .then(res => {
            Alert.alert(
              'Vaccine card',
              'Download Completed!',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
            console.log(res);
          })
          .catch(err => console.log(err));
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `https://covidassist-bucket.s3.us-east-2.amazonaws.com//output/certi_${nic}.png`,
          }}
        />
      </View>
      <TouchableOpacity onPress={handleDownload}>
        <View style={styles.buttonNext}>
          <Text style={styles.butonText}>Download Image</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCertificate;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 380,
    height: 530,
    justifyContent: 'center',
    marginTop: 10,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    width: 200,
    marginTop: 30,
    borderRadius: 50,
  },
  container: {
    alignItems: 'center',
  },
  buttonNext: {
    marginTop: 10,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#3342C8',
    alignContent: 'center',
  },
  butonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
