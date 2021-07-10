//Android 14 select data figma
import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }
  handlePicker = () => {
    this.setState({
      isVisible: false,
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };
  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={styles.button1} onPress={this.showPicker}>
          <Text style={styles.text}>Set Date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'date'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  button1: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 2,
    justifyContent: 'center',
    marginTop: 150,
    marginRight: 78,
    borderWidth: 0.1,
    borderColor: 'blue',
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    marginLeft: 15,
  },
});
