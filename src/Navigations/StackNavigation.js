import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';
import HomeScreen from '../Screens/HomeScreen';

export default function StackNavigation() {
 const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
            headerShown: false
        }}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})