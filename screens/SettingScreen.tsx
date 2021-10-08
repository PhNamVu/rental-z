import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Box, Text, VStack, Avatar } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import { TabSettingParamList } from '../types'
import Colors from '../constants/Colors'
import { useAuth } from '../hooks/useAuth'
import { TouchableOpacity } from 'react-native'

export interface LoginForm {
  email: string
  password: string
}

const SettingScreen = () => {
  const {
    state: { user },
    signout,
  }: any = useAuth()
  const navigation =
    useNavigation<StackNavigationProp<TabSettingParamList, 'SettingScreen'>>()

  console.info(user)
  return (
    <VStack flex={1} justifyContent="flex-start" mt={20} mx={10}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Setting
        </Text>
      </Box>
      <Box my={5} flexDirection="row" alignItems="center">
        <Avatar bg="green.500" size="sm">
          {user.email.charAt(0).toUpperCase()}
        </Avatar>

        <Text ml={2} fontSize="xl" fontWeight={400}>
          {user.email}
        </Text>
      </Box>
      <TouchableOpacity onPress={() => navigation.navigate('MyUploadScreen')}>
        <Box my={5} flexDirection="row" alignItems="center">
          <Feather name="upload" size={24} color="gray" />
          <Text ml={3} fontSize="xl" fontWeight={400}>
            My Upload
          </Text>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signout()}>
        <Box my={5} flexDirection="row" alignItems="center">
          <AntDesign name="logout" size={24} color="red" />
          <Text ml={3} fontSize="xl" fontWeight={400} color="red.500">
            Log out
          </Text>
        </Box>
      </TouchableOpacity>
    </VStack>
  )
}

export default SettingScreen
