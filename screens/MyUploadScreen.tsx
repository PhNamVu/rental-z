import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Box, Text, VStack, Button, Icon } from 'native-base'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { TabSettingParamList } from '../types'
import Colors from '../constants/Colors'
import { useAuth } from '../hooks/useAuth'

export interface LoginForm {
  email: string
  password: string
}

const MyUploadScreen = () => {
  const {
    state: { user },
  }: any = useAuth()
  const navigation =
    useNavigation<StackNavigationProp<TabSettingParamList, 'MyUploadScreen'>>()

  return (
    <VStack flex={1} justifyContent="flex-start" mt={20} mx={10}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          My Upload
        </Text>
      </Box>
      <Box my={5} flexDirection="row" alignItems="center">
        <Button
          size="sm"
          endIcon={<Icon as={Ionicons} name="add-outline" size="xs" />}
          borderRadius={50}
          onPress={() => navigation.navigate('UploadRentalScreen')}
        >
          New
        </Button>
      </Box>
      {/* <TouchableOpacity onPress={() => console.warn('hihi')}>
        <Box my={5} flexDirection="row" alignItems="center">
          <Feather name="upload" size={24} color="gray" />
          <Text ml={3} fontSize="xl" fontWeight={400}>
            My Upload
          </Text>
        </Box>
      </TouchableOpacity> */}
    </VStack>
  )
}

export default MyUploadScreen
