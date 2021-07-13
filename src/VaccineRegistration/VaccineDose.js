import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {StyleSheet, View} from 'react-native';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
    value: true,
    color: '#1167b1',
    // selected : true

  },
  {
    id: '2',
    label: 'No',
    value: false,
    color: '#1167b1',
    // selected : true
  },
];

const newRadioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Dose1',
    value: 'dose1',
    color: '#1167b1',
  },
  {
    id: '2',
    label: 'Dose2',
    value: 'dose2',
    color: '#1167b1',
  },
];

export default function App() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [newRadioButtons, setNewRadioButtons] = useState(newRadioButtonsData);
  // const [isYes, setIsYes] = useState(false);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    // console.log(radioButtonsArray);
  }
  function onPressNewRadioButton(newRadioButtonsArray) {
    setNewRadioButtons(newRadioButtonsArray);
    // console.log(radioButtonsArray);
  }

  let selectedButton = radioButtons.find(e => e.selected == true);
  let newSelectedButton = newRadioButtons.find(e => e.selected == true);
  selectedButton = selectedButton ? selectedButton.value : false;

  return (
    <View>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
      {selectedButton && (
        <View style={styles.box3}>
          <RadioGroup
            radioButtons={newRadioButtons}
            onPress={onPressNewRadioButton}
            layout="column"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box3: {
    marginLeft: -20,
    marginTop: 25,
    backgroundColor: 'white',
    width: 200,
    height: 80,
    borderRadius: 8,
    padding: 10,
  },
});
