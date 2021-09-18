import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DropDown from './Dropdown';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';
import VaccineDose from './VaccineDose';
import Dose from './Dose';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const DetailScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="DetailScreen">
      <Stack.Screen name="Detail" component={DetailScreenPage} />
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};

const DetailScreenPage = ({navigation}) => {
  const {t,i18n} = useTranslation();
  const [handlePhoto, sethandlePhoto] = useState('');
  const [selectDose, setSelectDose] = useState('');
  const [selectDoseType, setselectDoseType] = useState('');
  const [language,setLanguage] = useState('');

  const handlePhotoID = handlePhoto => {
    sethandlePhoto(handlePhoto.vaccine);
    console.log(handlePhoto.vaccine);
    console.log('photo type!!!!!!!!!!!!!');
  };
  const handleDoseType = selectDose => {
    setSelectDose(selectDose);
    console.log(selectDose);
    console.log('dose type!!!!!!!!!!!!!');
  };
  const handleDose = selectDoseType => {
    setselectDoseType(selectDoseType);
    console.log(selectDoseType);
    console.log('dose !!!!!!!!!!!!!');
  };

  useEffect(() => {
      AsyncStorage.multiGet(['language']).then(data => {
      console.log("###");
      console.log(data[0][1]);
      i18n.changeLanguage(data[0][1]);
      setLanguage(data[0][1]);
    });
  
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text1}>{t("areYouVaccinated")}</Text>
          </View>
        </View>
        <View style={styles.Radio}>
          <VaccineDose
            updateDoseType={handleDoseType}
            updateDose={handleDose}
            language={language}
          />
        </View>
        <View style={styles.box1}>
          <View style={styles.inner}>
            <Text style={styles.text1}>{t("registrationforVaccine")}</Text>
          </View>
        </View>
        {/* <View style={styles.box2}>
          <View style={styles.inner1}>
            <Text style={styles.text}>
              Photo ID card type, that will bring to Vaccination Center
            </Text>
          </View>
        </View> */}

        <View style={styles.dropdown}>
          <DropDown updatePhotoID={handlePhotoID} language={language}/>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <View style={styles.buttonNext}>
            <Text style={styles.butonText}>Next</Text>
          </View>
        </TouchableOpacity> */}
        {/* <View style={styles.register}> */}
        <RegisterScreen
          idType={handlePhoto}
          doseT={selectDose}
          doseType={selectDoseType}
          language={language}
        />
        {/* </View> */}
      </View>
        {/* <RegisterScreen/> */}

    </ScrollView>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  outer: {
    flexGrow: 1,
    width: '100%',
    // flexDirection: 'column',
  },
  register: {
    marginLeft: 0,
  },
  container: {
    width: '100%',
    height: 1350,
    padding: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white',

  },
  outer:{
    flexGrow:1
  },
  container2: {
    
    width: '100%',
    flexGrow:1,
    // height: '100%',
    padding: 5,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: 'white',
  },
  box: {
    width: '100%',
    height: 50,
  },
  inner: {
    // flex: 1,
    height:60,
    backgroundColor: '#7674DF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  },
  dropdown: {
    width:'100%',
    // marginLeft: -100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
    // marginBottom:-30
  },
  box1: {
    marginTop: 15,
    width: '100%',
    height: 50,
  },
  box2: {
    marginTop: -108,
    width: '100%',
    // height: '10%',
  },
  inner1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    marginLeft: -180,
    marginTop: 45,
    backgroundColor: 'grey',
    width: 200,
    borderRadius: 8,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  buttonNext: {
    marginTop: 20,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#3342C8',
    marginBottom: 130,
    alignContent: 'center',
    marginLeft: 130,
  },
  butonText: {
    color: 'white',
    //fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  Radio: {
    // marginLeft: 120,
    marginTop: 10,
    // marginBottom: 10,
  },
});
