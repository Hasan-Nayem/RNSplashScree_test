import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Navigations/StackNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})