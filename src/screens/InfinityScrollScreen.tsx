

import React from 'react'
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';

export const InfinityScrollScreen = () => {

  const [numbers, setNumbers] = useState([1,2,3,4,5,6]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  }

  const renderItems = (item: number) => {
    return (
      <FadeInImage 
        uri={`https://picsum.photos/id/${item}/200/300`} 
        style={{
          width: '100%',
          height: 400,
        }}/> 
      // <Image                                                   
      //   source={{uri: `https://picsum.photos/id/${item}/200/300`}}
      //   style={{width:'100%', height: 400}}
      // />  
    )
  }

  return (
    <View style={{flex: 1}}>
        <FlatList 
          data={ numbers }
          keyExtractor={ (item,index) => item.toString()+index}
          renderItem={ ({item}) => renderItems(item) }
          ListHeaderComponent={<HeaderTitle title='Infinity Scroll'/>}
          onEndReached={() => loadMore()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            <View style={{
              height: 300,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ActivityIndicator size={30} color="red" />
            </View>
          )}
        />
    </View>
  )
}

const style = StyleSheet.create({
    textItem:{
      backgroundColor: 'green',
      height: 150,
    }
});
