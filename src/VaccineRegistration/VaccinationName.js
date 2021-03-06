//Android 14 figma- vaccine name drop down
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {url} from '../config'

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.apicall();
  }
  async apicall() {

    let resp = await fetch(`${url.BASE_URL}/api/VaccineName`);
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
      <View style={styles.body1}>
        <Text style={styles.text}></Text>
        <Picker
          onValueChange={this.showVaccine}
          selectedValue={this.state.vaccine}>
          <Picker.Item label="Vaccine Name" value="disabled" color="blue" />
          {/* <Picker.Item label="Sputnik V" value="sputnikV" />
          <Picker.Item label="Covishield" value="covishield" />
          <Picker.Item label="Sinopharm" value="sinopharm" /> */}
          {this.state.data.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.vaccine_name}
              value={item.vaccine_name}
            />
          ))}
        </Picker>
      </View>
    );
  }
}
export default DropDown;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignItems: 'center',
  },
  body1: {
    flex: 1,
    marginTop: -80,
    marginLeft: -15,
    width: 380,
  },
});
