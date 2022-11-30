

import React, {useState} from 'react'
import { View, Switch, StyleSheet, Text } from "react-native";
import { CuatomSwitch } from '../components/CuatomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,

  });
  const {isActive, isHungry, isHappy} = state;
  
  const onChange = ( value: boolean, field: string ) => {
    setState({
      ...state,
      [field]: value,
    })
  }

  return (

    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle  title='Switchs'/>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Active</Text>
        <CuatomSwitch isOn={ isActive } onChange={ (value) => onChange(value, 'isActive') } />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Hungry</Text>
        <CuatomSwitch isOn={ isHungry } onChange={ (value) => onChange(value, 'isHungry') } />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Happy</Text>
        <CuatomSwitch isOn={ isHappy } onChange={ (value) => onChange(value, 'isHappy') } />
      </View>

      <Text style={styles.switchText}>
       {JSON.stringify(state, null, 5)}
      </Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
    
  },
  switchRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  }
});
