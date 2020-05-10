import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style = {styles.button}
        onPress= { () => navigation.navigate('About')}>
        <Text style={styles.text}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.button}
        onPress= { () => navigation.navigate('Calculator')}>
        <Text style={styles.text}>Calculadora</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.button}
        onPress= { () => navigation.navigate('Mail')}>
        <Text style={styles.text}>Enviar Email</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#3D0075',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center'
  },
  
  text: {
		color: '#FFF',
		fontSize: 26,
  },

});


