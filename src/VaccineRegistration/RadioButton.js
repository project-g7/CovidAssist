import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'English',
    Value: 'en',
    name: 'english',
    color: '#3342C8',
  },
  {
    id: '2',
    label: 'සිංහල',
    Value: 'sn',
    name: 'sinhala',
    color: '#3342C8',
  },
  {
    id: '3',
    label: 'தமிழ்',
    Value: 'ta',
    name: 'tamil',
    color: '#3342C8',
  },
];

export default function App() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    console.log(radioButtonsArray);
    for(let i=0;i<3;i++){
      if(radioButtonsArray[i].selected == true){
        console.log(radioButtonsArray[i].Value);
        AsyncStorage.multiSet([['language', radioButtonsArray[i].Value ]]);
      }
    }
  }

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={onPressRadioButton}
      layout="row"
    />
  );
}
