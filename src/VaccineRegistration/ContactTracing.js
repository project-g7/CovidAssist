import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {format} from 'date-fns';
import {Alert, Platform} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';
import axios from 'axios';
import update from 'immutability-helper';
import BLEAdvertiser from 'react-native-ble-advertiser';
import UUIDGenerator from 'react-native-uuid-generator';
import {PermissionsAndroid} from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Uses the Apple code to pick up iPhones
const APPLE_ID = 0x027d;
const MANUF_DATA = [1];

BLEAdvertiser.setCompanyId(APPLE_ID);

export async function requestLocationPermission() {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'BLE Avertiser Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('[Permissions]', 'Location Permission granted');
      } else {
        console.log('[Permissions]', 'Location Permission denied');
      }
    }

    const blueoothActive = await BLEAdvertiser.getAdapterState()
      .then(result => {
        console.log('[Bluetooth]', 'Bluetooth Status', result);
        return result === 'STATE_ON';
      })
      .catch(error => {
        console.log('[Bluetooth]', 'Bluetooth Not Enabled');
        return false;
      });

    if (!blueoothActive) {
      await Alert.alert(
        'Example requires bluetooth to be enabled',
        'Would you like to enable Bluetooth?',
        [
          {
            text: 'Yes',
            onPress: () => BLEAdvertiser.enableAdapter(),
          },
          {
            text: 'No',
            onPress: () => console.log('Do Not Enable Bluetooth Pressed'),
            style: 'cancel',
          },
        ],
      );
    }
  } catch (err) {
    console.warn(err);
  }
}

class ContactTracing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: this.props.dtk,
      username: this.props.username,
      isLogging: false,
      devicesFound: [],
      keys: [],
    };
  }

  sendKey(uuid, username) {
    let currentDate = format(new Date(), 'yyyy-MM-dd');
    console.log(uuid + ' ' + username + ' ' + currentDate);
    axios
      .get('http://192.168.8.100:3000/api/otherkeys', {
        params: {username: username, uuid: uuid, date: currentDate},
      })
      .then(function (response) {
        console.log(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getTracingKey() {
    let k = '';
    Axios.get('http://192.168.8.100:3000/api/tracingkey', {
      params: {username: this.state.username},
    })
      .then(function (response) {
        console.log('====================================');
        k = response.data[0].tracing_key;
        console.log(response.data[0].tracing_key);
        console.log('====================================');

        // setTracingKey(response.data[0].tracing_key);
        // console.log(tracingKey + 'inside get');
      })
      .catch(function (error) {});
    // console.log("k ="+k);
    //   setTimeout(() => {
    // this.start(k);

    //   }, 2000);
  }

  addDevice(_uuid, _name, _mac, _data, _rssi, _date) {
    const index = this.state.devicesFound.findIndex(({uuid}) => uuid == _uuid);
    console.log('====================================');
    console.log('Inside add device');
    console.log('====================================');
    this.sendKey(_uuid, this.props.username);
    if (index < 0) {
      this.setState({
        devicesFound: update(this.state.devicesFound, {
          $push: [
            {
              uuid: _uuid,
              name: _name,
              mac: _mac,
              data: _data,
              rssi: _rssi,
              start: _date,
              end: _date,
            },
          ],
        }),
      });
    } else {
      this.setState({
        devicesFound: update(this.state.devicesFound, {
          [index]: {
            end: {$set: _date},
            rssi: {$set: _rssi || this.state.devicesFound[index].rssi},
          },
        }),
      });
    }
  }

  componentDidMount() {
    requestLocationPermission();

    // UUIDGenerator.getRandomUUID(newUid => {
    this.setState({
      // uuid: newUid.slice(0, -2) + '00'
      uuid: this.props.dtk,
    });
    // });
    // this.getTracingKey();
    // this.start('37a4b8ab-7217-4b24-8caa-3e943a426227');
    AsyncStorage.multiGet(['tracingKey']).then(data => {
      let key = data[0][1];
      console.log('tr key = ' + key);
      // this.start(key);
    });
    // this.start();
    // this.simulatePress();
  }

  componentWillUnmount() {
    if (this.state.isLogging) this.stop();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dtk !== prevProps.dtk) {
      this.start();
    }
  }

  start() {
    console.log('Inside start===');
    console.log(this.props.dtk, 'Registering Listener');
    // console.log(uuid);
    const eventEmitter = new NativeEventEmitter(NativeModules.BLEAdvertiser);

    this.onDeviceFound = eventEmitter.addListener('onDeviceFound', event => {
      console.log('onDeviceFound', event);
      // console.log(this.state.devicesFound[0].uuid);
      if (event.serviceUuids) {
        for (let i = 0; i < event.serviceUuids.length; i++) {
          if (event.serviceUuids[i]) {
            let k = this.state.keys.find(key => {
              return key == event.serviceUuids[i];
            });
            console.log(k);
            if (typeof k == 'undefined') {
              var joined = this.state.keys.concat(event.serviceUuids[i]);
              this.setState({keys: joined});

              this.addDevice(
                event.serviceUuids[i],
                event.deviceName,
                event.deviceAddress,
                event.manufData,
                event.rssi,
                new Date(),
              );
            }
          }
        }
      }
    });

    console.log(this.props.dtk, 'Starting Advertising');
    BLEAdvertiser.broadcast(this.props.dtk, MANUF_DATA, {
      advertiseMode: BLEAdvertiser.ADVERTISE_MODE_BALANCED,
      txPowerLevel: BLEAdvertiser.ADVERTISE_TX_POWER_MEDIUM,
      connectable: false,
      includeDeviceName: false,
      includeTxPowerLevel: false,
    })
      .then(sucess => console.log(this.props.dtk, 'Adv Successful', sucess))
      .catch(error => console.log(this.props.dtk, 'Adv Error', error));

    console.log(this.state.uuid, 'Starting Scanner');
    BLEAdvertiser.scan(MANUF_DATA, {
      scanMode: BLEAdvertiser.SCAN_MODE_LOW_LATENCY,
    })
      .then(sucess => console.log(this.props.dtk, 'Scan Successful', sucess))
      .catch(error => console.log(this.props.dtk, 'Scan Error', error));

    this.setState({
      isLogging: true,
    });
  }

  stop() {
    console.log(this.state.uuid, 'Removing Listener');
    this.onDeviceFound.remove();
    delete this.onDeviceFound;

    console.log(this.state.uuid, 'Stopping Broadcast');
    BLEAdvertiser.stopBroadcast()
      .then(sucess =>
        console.log(this.state.uuid, 'Stop Broadcast Successful', sucess),
      )
      .catch(error =>
        console.log(this.state.uuid, 'Stop Broadcast Error', error),
      );

    console.log(this.state.uuid, 'Stopping Scanning');
    BLEAdvertiser.stopScan()
      .then(sucess =>
        console.log(this.state.uuid, 'Stop Scan Successful', sucess),
      )
      .catch(error => console.log(this.state.uuid, 'Stop Scan Error', error));

    this.setState({
      isLogging: false,
    });
  }

  short(str) {
    return (
      str.substring(0, 4) +
      ' ... ' +
      str.substring(str.length - 4, str.length)
    ).toUpperCase();
  }

  //   simulatePress() {
  //   this.touchable.props.onPress();
  // }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>BLE Advertiser Demo</Text>
            <Text style={styles.sectionDescription}>
              Broadcasting:{' '}
              <Text style={styles.highlight}>{this.short(this.props.dtk)}</Text>
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            {this.state.isLogging ? (
              <TouchableOpacity
                onPress={() => this.stop()}
                style={styles.stopLoggingButtonTouchable}>
                <Text style={styles.stopLoggingButtonText}>Stop</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                ref={component => (this.touchable = component)}
                onPress={() => this.start()}
                style={styles.startLoggingButtonTouchable}>
                <Text style={styles.startLoggingButtonText}>Start</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.sectionContainerFlex}>
            <Text style={styles.sectionTitle}>Devices Around</Text>
            <FlatList
              data={this.state.devicesFound}
              renderItem={({item}) => (
                <Text style={styles.itemPastConnections}>
                  {this.short(item.uuid)} {item.data} {item.rssi}
                </Text>
              )}
              keyExtractor={item => item.uuid}
            />
          </View>

          <View style={styles.sectionContainer}>
            <TouchableOpacity
              onPress={() => this.setState({devicesFound: []})}
              style={styles.startLoggingButtonTouchable}>
              <Text style={styles.startLoggingButtonText}>Clear Devices</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  sectionContainerFlex: {
    flex: 1,
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  sectionContainer: {
    flex: 0,
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  startLoggingButtonTouchable: {
    borderRadius: 12,
    backgroundColor: '#665eff',
    height: 52,
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
  },
  startLoggingButtonText: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  stopLoggingButtonTouchable: {
    borderRadius: 12,
    backgroundColor: '#fd4a4a',
    height: 52,
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
  },
  stopLoggingButtonText: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  listPastConnections: {
    width: '80%',
    height: 200,
  },
  itemPastConnections: {
    padding: 3,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default ContactTracing;
