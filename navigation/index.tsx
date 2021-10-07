import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { createClient } from '../apollo/create-client'
import { useAuth } from '../hooks/useAuth'
import LandingScreen from '../screens/LandingScreen'

import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import AuthTabNavigator from './AuthTabNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  const { state }: any = useAuth()
  const [, , isUserLoggedin] = createClient(state)

  return (
    <Stack.Navigator
      initialRouteName={isUserLoggedin ? 'Root' : 'Auth'}
      screenOptions={{ headerShown: false }}
    >
      {isUserLoggedin ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthTabNavigator} />
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
}
