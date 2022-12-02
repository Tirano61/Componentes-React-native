

import React from 'react'
import { Switch, Platform } from 'react-native';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props{
    isOn: boolean,
    onChange: (isEnable: boolean) => void,
}


export const CuatomSwitch = ({ isOn, onChange }: Props ) => {
    const {theme:{colors, secundary}} = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange( !isEnabled );
    }

    return (
        <Switch
            trackColor={{ false: "#D9D9B9", true: secundary }}
            thumbColor={ (Platform.OS === 'android') ? colors.primary  : "" }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
