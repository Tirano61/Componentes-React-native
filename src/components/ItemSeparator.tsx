import { View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const ItemSeparator = () => {
  const {theme:{dividerColor}} = useContext(ThemeContext);
    return (
      <View style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
        borderBottomColor: dividerColor,
      }} />
    )
  }