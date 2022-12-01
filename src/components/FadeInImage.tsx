import React from 'react'
import { View, Animated, ActivityIndicator, ImageStyle, StyleProp } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';
import { styles } from '../theme/appTheme';

interface Props{
    uri: string,
    style?: StyleProp<ImageStyle>,
}



export const FadeInImage = ({uri, style}:Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    
    const loading = () => {
        setIsLoading(false);
        fadeIn();
    }
    return (
        <View style={{justifyContent:'center',alignItems: 'center'}}>
            {
                isLoading && <ActivityIndicator style={{position:'absolute'}}color="grey" size={30}/>
            }
            <Animated.Image 
                source={{uri}}
                onLoadEnd={() => loading()}
                style={{
                    ...style as any,
                    opacity: opacity,
                }}
            />
        </View>
        
    )
}
