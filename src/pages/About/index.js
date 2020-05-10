import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


export default function About({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.userArea}>
        <Image
          source={require('../../assets/avatar_jean.png')}
          style={styles.userThumbnail}
        />
        <View style={styles.userTexts}>
          <Text style={styles.userName}>Jean Rabelo Borges</Text>
          <Text style={styles.userMail}>jean.rabelo@sga.pucminas.br</Text>
        </View>
      </View>

      <View style={styles.userArea}>
      <Image
          source={require('../../assets/avatar_maycon.png')}
          style={styles.userThumbnail}
        />
        <View style={styles.userTexts}>
          <Text style={styles.userName}>Maycon Ricardo Oliveira</Text>
          <Text style={styles.userMail}>maycon.ricardo@sga.pucminas.br</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-start'
  },
  
  userArea: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row'

  },

  userTexts: {
    flexDirection: 'column',
    marginLeft: 5
  },

  userThumbnail: {
    width: 60,
    height: 60,
    marginRight: 5
  },

  userName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  userMail: {
    fontSize: 15
  },

  buttonMail: {
    backgroundColor: '#3D0075',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    marginLeft: 85
    
  },
  
  text: {
		color: '#FFF',
		fontSize: 26,
  },


});


