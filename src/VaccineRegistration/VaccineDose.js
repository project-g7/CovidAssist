import React, {useState,useEffect} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next'

export default function VaccineDose(props) {
const {t,i18n} = useTranslation();

useEffect(() => {
  console.log(props.language+"llll");
  i18n.changeLanguage(props.language);

}, [])

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: `${t("yes")}`,
    value: true,
    color: '#1167b1',
    // selected : true
  },
  {
    id: '2',
    label: `${t("no")}`,
    value: false,
    color: '#1167b1',
    // selected : true
  },
];

const newRadioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: `${t("dose1")}`,
    value: 'dose1',
    color: '#1167b1',
  },
  {
    id: '2',
    label: `${t("dose2")}`,
    value: 'dose2',
    color: '#1167b1',
  },
];

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [newRadioButtons, setNewRadioButtons] = useState(newRadioButtonsData);
  // const [isYes, setIsYes] = useState(false);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    for (let i = 0; i < radioButtonsArray.length; i++) {
      // console.log(radioButtonsArray[i].selected);
      if (radioButtonsArray[i].selected) {
        props.updateDoseType(radioButtonsArray[i].value);
      }
    }

    // console.log(radioButtonsArray);
  }
  function onPressNewRadioButton(newRadioButtonsArray) {
    setNewRadioButtons(newRadioButtonsArray);
    for (let i = 0; i < newRadioButtonsArray.length; i++) {
      // console.log(radioButtonsArray[i].selected);
      if (newRadioButtonsArray[i].selected) {
        props.updateDose(newRadioButtonsArray[i].value);
      }
    }

    // console.log(radioButtonsArray);
  }

  let selectedButton = radioButtons.find(e => e.selected == true);
  let newSelectedButton = newRadioButtons.find(e => e.selected == true);
  selectedButton = selectedButton ? selectedButton.value : false;

  return (
    <View>
      <View style={styles.radio1}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />
      </View>
      {selectedButton && (
        <View style={styles.box3}>
          <RadioGroup
            radioButtons={newRadioButtons}
            onPress={onPressNewRadioButton}
            layout="column"
          />
        </View>
      )}
      <Text></Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box3: {
    marginLeft: -10,
    marginTop: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    marginBottom: -50,
    zIndex: 10,
  },
  radio1: {
    marginTop: 10,
    marginBottom: -15,
    zIndex: 10,
    // marginBottom: -30,
  },
});
