

import React, { useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {

  const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();

  return (
    <View style={ styles.container }>
      <Animated.View style={ {
          ...styles.purpleBox,
          opacity: opacity,
          marginBottom: 30,
          transform: [{
            translateY: position,
          }],
        }} 
      />
      <Button
        title='FadeIn'
        onPress={ () => {
          fadeIn();
          startMovingPosition(-300); 
        }}
      />
      <View style={{ height: 30 }} />
      <Button
        title='FadeOut'
        onPress={ fadeOut }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox:{
      backgroundColor: '#5856D6',
      width: 150,
      height: 150,
  },
})