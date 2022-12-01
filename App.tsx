
import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer,DefaultTheme, DarkTheme, Theme  } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

const customeTheme: Theme = {
  dark: true,
  colors:{
    ...DarkTheme.colors,
    // primary: string;
    background: 'black',
    // card: string;
    // text: string;
    // border: string;
    // notification: string;
  }
}

export const App = () => {
  return (
    <Appstate >       
        <StackNavigator />
    </Appstate>
    
  )
}

const Appstate = ({children}: any) => {
  return (

    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;
