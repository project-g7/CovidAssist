import React from 'react';
import {View, Text} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};
export default DetailsScreen;
