//Android 11 figma id dropdown
import React, {Component,useState,useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next'

const DropDown = (props) => {
  // state = {vaccine: ''};
  const [vaccine,setVaccine] = useState('');

  const showVaccine = option => {
    if (option !== 'disabled') {
      // this.setState({vaccine: option});
      // this.props.updatePhotoID({vaccine: option});
      setVaccine(option);
      props.updatePhotoID({vaccine : option});
    }
  };
  
  const {t,i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(props.language);

  }, [props.language])


    return (
      <View style={styles.body}>
        {/* <Text style={styles.text4}>
          Photo ID card type, that will bring to Vaccination
        </Text> */}
        <Picker
          onValueChange={showVaccine}
          selectedValue={vaccine}>
          <Picker.Item
            label= {t("selectid")}
            value="disabled"
            color="blue"
            height="-1"
          />
          <Picker.Item label={t("nic")} value="nic" />
          <Picker.Item label={t("driving")} value="driving licene" />
          <Picker.Item label={t("passport")} value="passport" />
        </Picker>
      </View>
    );
  
}
export default DropDown;
const styles = StyleSheet.create({
  text4: {
    fontSize: 16,
  },
  body: {
    width: '95%',
    marginLeft: 15,
    fontSize: 22,
    marginTop: 20,
  },
});
