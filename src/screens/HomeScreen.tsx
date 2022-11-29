

import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { MenuItem } from '../interfaces/Interfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { useNavigation } from '@react-navigation/native';




const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  }
]

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
 

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top +20, marginBottom: 20 }}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    )
  }
  const itemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 2,
        opacity: 0.4,
        marginVertical: 8,
      }} />
    )
  }

  return (
    <View style={{ flex:1, ...styles.globalMargin }}>
      
      <FlatList 
        data={ menuItems }
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} /> }
        keyExtractor={ (item) =>item.name }
        ListHeaderComponent={ () => renderListHeader() }
        ItemSeparatorComponent={ () => itemSeparator() }
      />
        
    </View>
  )
}
