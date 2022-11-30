

import React from 'react'
import { View, Button, Modal, Text,Pressable } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ModalScreen = () => {
  
    const [isVisible, setVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='ModalSreen'/>

            <Button 
                title='Abrir Modal'
                onPress={() => setVisible(true)}
            />
            <Modal
                animationType='slide'
                visible={isVisible}
                transparent={true}
                
                
            >   
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                                          
                }}>
                    <View style={{width: '80%',alignSelf: 'center'}}>
                        {/* Contenido del modal */}
                        <View style={{backgroundColor: 'white', paddingHorizontal: 20,borderRadius: 10   }}>
                            <HeaderTitle title='Titulo Modal'/>
                            <Text>Cuerpo del modal</Text>
                            <View style={{height: 30}}/>
                                <Pressable
                                    style={{borderRadius: 8,
                                        padding: 10,
                                        elevation: 1,
                                        backgroundColor: 'grey',
                                        width: '50%',
                                        alignItems: 'center',
                                        alignSelf: 'center'
                                    }}
                                    onPress={() => setVisible(false)}
                                >
                                    <Text style={{backgroundColor:'transparent'}}>Salir</Text>
                                </Pressable> 
                        </View>
                    </View>
                    
                </View>

            </Modal>
        </View>
  )
}
