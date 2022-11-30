

import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/Interfaces';
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props{
    menuItem: MenuItem,
}

export const FlatListMenuItem = ({menuItem}: Props) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={ () =>  navigation.navigate( menuItem.component) }
        >
            <View style={styles.container}>
                <Icon 
                    name={ menuItem.icon }
                    size={20}
                    color= 'blue'
                />
                <Text style={styles.itemText}>{ menuItem.name } - { menuItem.icon } </Text>

                <View style={{ flex: 1 }} />
                
                <Icon 
                    name='chevron-forward-outline'
                    size={20}
                    color= 'blue'
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
