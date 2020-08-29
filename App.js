import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Splash, Webview, Error} from './src/Pages';
const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splace">
          <Stack.Screen
            name="Splace"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Webview"
            component={Webview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Error"
            component={Error}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
