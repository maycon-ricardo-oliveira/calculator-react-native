import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen       from './src/pages/Home'
import AboutScreen      from './src/pages/About'
import CalculatorScreen from './src/pages/Calculator'
import MailScreen       from './src/pages/Mail'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options = {{
          title: "Bem Vindo",
          headerStyle: {
            backgroundColor: '#3D0075',
          },
          headerTintColor: '#fff'

        }}
        />
        
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Mail" component={MailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;