import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
    value: 'yes',
    color: '#1167b1',
  },
  {
    id: '2',
    label: 'No',
    value: 'no',
    color: '#1167b1',
  },
];

export default function App() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={onPressRadioButton}
      layout="row"
    />
  );
}
