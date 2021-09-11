import {Label, StyleSharp, Title} from '@material-ui/icons';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

// const radioButtonsData = [
//   {
//     id: '1', // acts as primary key, should be unique and non-empty string
//     label: '9.00 a.m - 10.00 a.m',
//     value: '9.00 a.m - 10.00 a.m',
//     color: '#3342C8',
//   },
//   {
//     id: '2',
//     label: '11.00 a.m - 12.00 p.m',
//     value: '11.00 a.m - 12.00 p.m',
//     color: '#3342C8',
//   },
// ];

export default function TimeAvailable(props) {
  //const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  var arr = [];
  var len = props.time.length;
  for (var i = 0; i < len; i++) {
    arr.push({
      id: i,
      label: props.time[i],
      value: props.time[i],
      color: '#3342C8',
    });
  }
  const [radioButtons, setRadioButtons] = useState(arr);
  console.log('???????????');
  console.log(arr);

  function onPressRadioButton(radioButtonsArray) {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
    console.log(radioButtonsArray);
    console.log('*********************************');
    for (let i = 0; i < radioButtonsArray.length; i++) {
      console.log(radioButtonsArray[i].selected);
      if (radioButtonsArray[i].selected) {
        props.updateTime(radioButtonsArray[i].value);
      }
    }
  }

  return (
    <View style={styles.timeAvail}>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
    </View>
  );
}
const styles = StyleSheet.create({
  timeAvail: {
    marginLeft: 50,
    marginTop: -20,
    backgroundColor: 'white',
    width: 300,
    height: 150,
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
