import * as React from 'react'

import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/HomeScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { HomeParamList, TabSettingParamList, TabTwoParamList } from '../types'
import SettingScreen from '../screens/SettingScreen'
import MyUploadScreen from '../screens/MyUploadScreen'
import UploadRentalScreen from '../screens/UploadRentalScreen'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={TabSettingNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  )
}

const TabSettingStack = createStackNavigator<TabSettingParamList>()

function TabSettingNavigator() {
  return (
    <TabSettingStack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabSettingStack.Screen name="SettingScreen" component={SettingScreen} />
      <TabSettingStack.Screen
        name="MyUploadScreen"
        component={MyUploadScreen}
      />
      <TabSettingStack.Screen
        name="UploadRentalScreen"
        component={UploadRentalScreen}
      />
    </TabSettingStack.Navigator>
  )
}
