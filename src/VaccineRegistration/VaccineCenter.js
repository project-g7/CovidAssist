import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class VaccineCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // isLoading: true,
      // PickerValueHolder : '',
    };
  }

  componentDidMount() {
    this.apicall();
  }
  async apicall() {
    let resp = await fetch('http://192.168.1.103:3001/api/VaccineCenter');
    let respJson = await resp.json();
    //console.warn(respJson);
    this.setState({data: respJson});
  }

  state = {vaccine: ''};
  showVaccine = option => {
    if (option !== 'disabled') {
      this.setState({vaccine: option});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxBoder}>
          <View style={styles.body}>
            <Text style={styles.text}></Text>
            <Picker
              onValueChange={this.showVaccine}
              selectedValue={this.state.vaccine}>
              <Picker.Item
                label="Select Vaccination center"
                value="disabled"
                color="blue"
              />
              {/* <Picker.Item label="NIC" value="nic" />
              <Picker.Item label="Drving Licene" value="driving licene" />
              <Picker.Item label="Passport" value="passport" /> */}
              {this.state.data.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.name} />
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
