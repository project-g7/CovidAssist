import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class VaccineCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      vaccine_center: '',
      vaccine_name: '',
      // isLoading: true,
      // PickerValueHolder : '',
    };
  }

  componentDidMount() {
    AsyncStorage.multiGet(['username']).then(data => {
      let username = data[0][1];
      // console.log(username);
      //fetchData(username);
      this.apicall(username);
    });
  }
  async apicall(username) {
    const encodedUsername = encodeURIComponent(username);
    const response = await fetch(
      `http://192.168.1.104:3000/api/VaccineCenterDistrict?username=${encodedUsername}`,
      {method: 'GET'},
    );
    const users = await response.json();
    //console.warn(respJson);
    this.setState({data: users});
    //console.log(respJson);
  }
  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleChangeVaccine = event => {
    this.setState({vaccine_center: event.target.value});
  };

  // state = {vaccine: ''};
  // showVaccine = option => {
  //   if (option !== 'disabled') {
  //     this.setState({vaccine: option});
  //   }
  // };
  render() {
    const data = this.state.data;
    const vaccine_center = this.state.vaccine_center;

    const filterDropdown = data.filter(function (result) {
      return result.name === vaccine_center;
    });
    console.log(filterDropdown);
    return (
      <View style={styles.container}>
        <View style={styles.boxBoder}>
          <View style={styles.body}>
            <Text style={styles.text}></Text>
            <Picker
              value={this.state.vaccine_center}
              // onValueChange={this.showVaccine}
              // selectedValue={this.state.vaccine}>
              onValueChange={text => {
                this.setState({vaccine_center: text});
                this.props.updateVaccine({vaccine_center: text});
              }}
              selectedValue={this.state.vaccine_center}>
              <Picker.Item
                label="Select Vaccination center"
                value="disabled"
                color="blue"
              />
              {/* <Picker.Item label="NIC" value="nic" />
              <Picker.Item label="Drving Licene" value="driving licene" />
              <Picker.Item label="Passport" value="passport" /> */}
              {this.state.data.map(vaccine_center => (
                <Picker.Item
                  key={vaccine_center.center_id}
                  label={vaccine_center.name}
                  value={vaccine_center.name}>
                  {vaccine_center.name}
                </Picker.Item>
              ))}
            </Picker>
            <Picker
              onValueChange={text => {
                this.setState({vaccine_name: text});
                this.props.updateVaccineName({vaccine_name: text});
              }}
              selectedValue={this.state.vaccine_name}>
              {/* // onValueChange={this.showVaccine}
              // selectedValue={this.state.vaccine}> */}
              <Picker.Item
                label="Select a Vaccine "
                value="disabled"
                color="blue"
              />
              {/* <Picker.Item label="NIC" value="nic" />
              <Picker.Item label="Drving Licene" value="driving licene" />
              <Picker.Item label="Passport" value="passport" /> */}
              {filterDropdown.map((vaccine_center, index) => (
                <Picker.Item
                  key={index}
                  label={vaccine_center.vaccine_name}
                  value={vaccine_center.vaccine_name}
                />
              ))}
            </Picker>
          </View>
        </View>
        {/* <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.name}</Text>}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '65%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxBoder: {
    flex: 1,
    marginTop: -60,
    marginLeft: -50,
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    margin: 30,
    width: 380,
  },
});
