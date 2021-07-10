import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Female',
    value: 'female',
    color: '#1167b1',
  },
  {
    id: '2',
    label: 'Male',
    value: 'male',
    color: '#1167b1',
  },
];

export default function App() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
  );
}
