

import React from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { useRef } from 'react';

export const Animation102Screen = () => {

  const pan = useRef( new Animated.ValueXY() ).current;

  const panRemponse = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        { toValue:{ x: 0, y: 0 }, useNativeDriver: false }
      ).start();
    },
  });

  return (
    <View style={styles.container}>
        <Animated.View 
          { ...panRemponse.panHandlers }
          style={[  pan.getLayout(), styles.purpleBox]} />
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
        backgroundColor: '#36FFF2',
        width: 150,
        height: 150,
        borderRadius: 10,
    }
})