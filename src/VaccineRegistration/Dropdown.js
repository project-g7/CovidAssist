//Android 11 figma id dropdown
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
class DropDown extends Component {
  state = {vaccine: ''};
  showVaccine = option => {
    if (option !== 'disabled') {
      this.setState({vaccine: option});
      this.props.updatePhotoID({vaccine: option});
    }
  };
  render() {
    return (
      <View style={styles.body}>
        {/* <Text style={styles.text4}>
          Photo ID card type, that will bring to Vaccination
        </Text> */}
        <Picker
          onValueChange={this.showVaccine}
          selectedValue={this.state.vaccine}>
          <Picker.Item
            label="please select ID"
            value="disabled"
            color="blue"
            height="-1"
          />
          <Picker.Item label="NIC" value="nic" />
          <Picker.Item label="Drving Licene" value="driving licene" />
          <Picker.Item label="Passport" value="passport" />
        </Picker>
      </View>
    );
  }
}
export default DropDown;
const styles = StyleSheet.create({
  text4: {
    fontSize: 16,
  },
  body: {
    width: '74.5%',
    flex: 1,
    margin: 30,
    marginLeft: 120,
    marginBottom: 50,
    fontSize: 22,
    marginTop: 10,
  },
});
