

import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { MenuItem } from '../interfaces/Interfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';







export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
 

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top +20, marginBottom: 20 }}>
       <HeaderTitle  title='Opciones de Menú'/>
      </View>
    )
  }
  const itemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 1,
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
