import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../types'

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import LandingScreen from '../screens/LandingScreen'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthTabNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="TabLogin" component={LoginScreen} />
      <Stack.Screen name="TabSignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthTabNavigator
