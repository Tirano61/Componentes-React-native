

import React from 'react'
import { View, RefreshControl, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);

    const [dataState, setDataState] = useState<string>()

    const onRefresh = () => {

        setRefreshing(true);

        setTimeout(() => {
            console.log('termino');
            setRefreshing(false);
            setDataState('Hola que tal !!!')
        }, 3000);

    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={ () => onRefresh() }
                    progressViewOffset={100}
                    progressBackgroundColor="#FAF2D4"
                    colors={[ "#27AE60","#2AFFDF", "#FF2AE3","#FAF2D410" ]}
                    title='Refreshing'
                    titleColor={"#FF2AE3"}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to Refresh'/>

                <Text>{ dataState }</Text>

            </View>
        </ScrollView>
    
    )
}
