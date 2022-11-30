

import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { CuatomSwitch } from '../components/CuatomSwitch';



export const TextInputScreen = () => {

   // Este custom hook, se usa para usar un objeto con todos los fields que se usaran en el formulario
    const { form, onChange} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });
    
    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    <View style={styles.globalMargin}>
                        
                        <HeaderTitle  title='TextInputs'/>
                        <TextInput 
                            style={ style.input }
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={ ( value ) => onChange(value, "name" ) }
                        />
                        <TextInput 
                            style={ style.input }
                            placeholder='Ingrese su email'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={ ( value ) => onChange(value, 'email') }
                        />
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Suscribirse</Text>
                            <CuatomSwitch isOn={ form.isSubscribed } onChange={ (value) => onChange(value, 'isSubscribed') } />
                        </View>
                        <HeaderTitle  title={ JSON.stringify(form, null, 4) }/>
                        <HeaderTitle  title={ JSON.stringify(form, null, 4) }/>
                        <TextInput 
                            style={ style.input }
                            placeholder='Ingrese su telefono'
                            autoCapitalize='none'
                            keyboardType='phone-pad'
                            onChangeText={ ( value ) => onChange(value, 'phone') }
                        />

                        <View style={{ height: 100 }}/>
                    
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

const style = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      paddingHorizontal: 10,
      borderColor: 'rgba(0,0,0,0.5)',
      marginVertical: 8,
    },
  });