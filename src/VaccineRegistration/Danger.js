import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

const Danger = props => {
  const {t, i18n} = useTranslation();
  // i18n.changeLanguage(props.language);

  useEffect(() => {
    i18n.changeLanguage(props.language);
  }, []);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const handleStatus = () => {
    console.log('status');
    axios
      .get('http://192.168.8.101:3000/api/updatestatus', {
        params: {username: props.userName},
      })
      .then(function (response) {
        console.log('Successss');
      })
      .catch(function (error) {});
  };

  const setAlert = () =>
    Alert.alert(
      'Mark as Safe',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: handleStatus,
        },
      ],
      {cancelable: false},
    );
  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <Text style={styles.text1}>{props.userName}</Text>
        <Text style={styles.text2}>{t('danger')}</Text>
        <Text style={styles.text3}>{t('dangermsg')}</Text>
        <AnimatedTouchable onPress={setAlert}>
          <View style={styles.buttonNext}>
            <Text style={styles.butonText}>{t('dangerbtn')}</Text>
          </View>
        </AnimatedTouchable>
      </View>
    </View>
  );
};

export default Danger;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  box: {
    width: '100%',
    height: '35%',
    padding: 5,
    zIndex: 10,
  },
  inner: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#AA0303',
    borderWidth: 10,
  },
  text1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'left',
  },
  text2: {
    color: '#EC0000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text3: {
    color: '#EC0000',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonNext: {
    marginTop: 10,
    width: 120,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#228b22',
    alignContent: 'center',
  },
  butonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
