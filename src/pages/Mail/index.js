import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';


import email from 'react-native-email'

export default function Mail() {

  const [emailUser, setEmail]     = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  handleEmail = () => {
    const to = ['maycon.ricardo@sga.pucminas.br', 'jean.rabelo@sga.pucminas.br']
    email(to, {
        bcc: emailUser, // string or array of email addresses
        subject: subject,
        body: message
    }).catch(console.error)
}

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={emailUser}
          onChangeText={setEmail}
        />
        
        <TextInput 
          style={styles.input}
          placeholder="Assunto"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={subject}
          onChangeText={setSubject}
        />
        
        <TextInput 
          style={styles.inputBox}
          placeholder="Sua Mensagem"
          placeholderTextColor="#999"
          autoCapitalize="words"
          multiline = {true}
          numberOfLines = {4}
          autoCorrect={false}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleEmail}>
            <Text style={styles.buttonText}>Enviar Email</Text>
        </TouchableOpacity>
      </View>
    </View>
            
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      marginTop: 30,
      
  },
  label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8
  },
  input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      height:44,
      marginBottom: 20,
      borderRadius: 2
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 180,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
      height: 42,
      backgroundColor: '#3D0075',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
  },
  buttonText: {
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 16,
  },

});


