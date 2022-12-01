

import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/Interfaces';
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useNavigation } from '@react-navigation/native';



interface Props{
    menuItem: MenuItem,
}

export const FlatListMenuItem = ({menuItem}: Props) => {
    const navigation = useNavigation();
  
    const { theme: { colors } } = useContext(ThemeContext)
    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={ () =>  navigation.navigate( menuItem.component) }
        >
            <View style={styles.container}>
                <Icon 
                    name={ menuItem.icon }
                    size={20}
                    color= {colors.primary}
                />
                <Text style={styles.itemText}>{ menuItem.name } - { menuItem.icon } </Text>

                <View style={{ flex: 1 }} />
                
                <Icon 
                    name='chevron-forward-outline'
                    size={20}
                    color= {colors.primary}
                />
                
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 20,

    },

})
