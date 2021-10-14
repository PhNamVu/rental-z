import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Box, Text, VStack, Button, Icon, FlatList, View } from 'native-base'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { TabSettingParamList } from '../types'
import Colors from '../constants/Colors'
import { useAuth } from '../hooks/useAuth'
import { useMyUploadQuery } from '../generated/hooks'
import RentalComponent from '../components/shared/RentalComponent'

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

  const { data } = useMyUploadQuery({
    variables: {
      reporterId: user.uid,
    },
    fetchPolicy: 'network-only',
  })

  const rentals = data?.rentals

  return (
    <View mt={20} mx={10}>
      <VStack>
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
      </VStack>
      {/* <Box> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={rentals}
        renderItem={({ item }) => <RentalComponent rental={item} editable />}
        keyExtractor={(item) => item.id}
      />
      {/* </Box> */}
    </View>
  )
}

export default MyUploadScreen
