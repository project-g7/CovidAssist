//Android 14 select data figma
import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
//import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withTranslation } from 'react-i18next';

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

    // console.log(new Date());
  }
  // componentDidMount() {
  //   // AsyncStorage.multiGet(['date']).then(date => {
  //   //  let dateselect = date[0][1];
  //   // console.log(username);
  //   //fetchData(username);
  //   let dateselect = this.state.date;
  //   this.apicall(dateselect);
  //   // });
  // }
  // async apicall(dateselect) {
  //   const encodedDate = encodeURIComponent(dateselect);
  //   const response = await fetch(
  //     `http://192.168.8.100:3000/api/VaccineSelecteDate?dateselect=${encodedDate}`,
  //     {method: 'GET'},
  //   );
  //   const users = await response.json();
  //   //console.warn(respJson);
  //   // this.setState({data: users});
  //   //console.log(respJson);
  // }
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{this.props.t("selectDate")}</Text>
        <DatePicker
          style={{width: 360, alignSelf:'center'}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-05-01"
          maxDate="2030-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: 10,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              // marginLeft: 26,
              marginRight: 13,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            this.setState({date: date});
            this.props.updateDate(date);
          }}
        />
      </View>
    );
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     isVisible: false,
  //   };
  // }
  // handlePicker = () => {
  //   this.setState({
  //     isVisible: false,
  //   });
  // };
  // hidePicker = () => {
  //   this.setState({
  //     isVisible: false,
  //   });
  // };
  // showPicker = () => {
  //   this.setState({
  //     isVisible: true,
  //   });
  // };
  // render() {
  //   return (
  //     // <View style={styles.Container}>
  //     //   <TouchableOpacity style={styles.button1} onPress={this.showPicker}>
  //     //     <Text style={styles.text}>Set Date</Text>
  //     //   </TouchableOpacity>
  //     //   <DateTimePicker
  //     //     isVisible={this.state.isVisible}
  //     //     onConfirm={this.handlePicker}
  //     //     onCancel={this.hidePicker}
  //     //     mode={'date'}
  //     //   />
  //     // </View>
  //   );
  // }
}

export default withTranslation()(MyDatePicker);

const styles = StyleSheet.create({
  row: {
    marginLeft:10,
    marginTop:10
  },
  label: {
    marginLeft: 17,
    marginBottom:5,
    fontSize: 16,
    // marginLeft: 30,
    color: 'blue',
  },
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
