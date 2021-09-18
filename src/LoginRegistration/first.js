import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
class App extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Welcome2')

    },2000);
  }
  render() {
   
    return (
      <View style={styles.view}>
        <Image style={{height: 250, width: '80%', marginBottom: 100, marginTop: 100}} source={require('../../assets/logoNew.png')} />
        <Image style={{height: 200, width: '100%'}} source={require('./ns.jpg')} />
        <Image style={{height: 100, width: '100%'}} source={require('./ns2.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    height: '30%',
    marginTop: '10',
    justifyContent: 'center',
  },
});

export default App;
