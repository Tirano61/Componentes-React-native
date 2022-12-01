

import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

  const { setDarkTheme, setLightTheme } = useContext(ThemeContext)
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Change Theme'/>
      <View style={{flexDirection: 'row',justifyContent: 'space-between' }}>
        <TouchableOpacity 
        onPress={ setLightTheme }
          activeOpacity={0.7}
          style={style.touchable}>
          <Text style={style.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={ setDarkTheme }
            activeOpacity={0.7}
            style={style.touchable}>
          <Text style={style.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>
        
    </View>
  )
}


const style = StyleSheet.create({
  touchable: {
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 10,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,

  }
});