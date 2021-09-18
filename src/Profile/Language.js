import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButton from '../VaccineRegistration/RadioButton.js'
const Language = () => {
    return (
        <View>
        <View>
            <Text>Choose your preferred Language</Text>
        </View>
           <RadioButton/>
        </View>
    )
}

export default Language

const styles = StyleSheet.create({})
