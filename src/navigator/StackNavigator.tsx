import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfinityScrollScreen } from '../screens/InfinityScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {useContext} from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const  StackNavigator = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <NavigationContainer
      theme={ theme }
    >
      <Stack.Navigator initialRouteName='SlidesScreen'
          screenOptions={{
            
            headerShown: false,
            cardStyle:{
              // backgroundColor: '#EEEEEE',
            }
          }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalSreen" component={ModalScreen} />
        <Stack.Screen name="InfinityScrollScreen" component={InfinityScrollScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}