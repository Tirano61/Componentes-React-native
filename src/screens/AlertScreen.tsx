

import React from 'react'
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
    
    const showAlert = () => {
        Alert.alert(
            "Titulo de Alerta",
            "Este es el mensaje de la alerta !!!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            
          );
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: '',
                placeholder: 'Password'
            }
        );
    }
    
    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Alerts'/>

            <Button 
                title='Alerts'
                onPress={() => showAlert()}
            />
            <View style={{ height:20 }}/>
            <Button 
                title='Prompts'
                onPress={() => showPrompt()}
            />
        </View>
    )
}
