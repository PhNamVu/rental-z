import { Box, Text, Image, IconButton, Icon } from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import {
  MyUploadDocument,
  useDeleteRentalMutation,
} from '../../generated/hooks'
import { negativeToast, positiveToast } from '../../helpers/toaster'
import { useAuth } from '../../hooks/useAuth'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface Props {
  rental: any
  editable?: boolean
  isSaved?: boolean
  canSave?: boolean
}

const RentalComponent: React.FC<Props> = ({ rental, editable, canSave }) => {
  const {
    state: { user },
  }: any = useAuth()
  const [saved, setSaved] = React.useState(false)
  const navigation = useNavigation()

  const [deleteRental] = useDeleteRentalMutation({
    variables: {
      id: rental.id,
    },
    refetchQueries: [
      {
        query: MyUploadDocument,
        variables: {
          reporterId: user.uid,
        },
      },
    ],
  })

  const handleDelete = async () => {
    try {
      await deleteRental()
      positiveToast('Removed')
    } catch (err) {
      negativeToast('Removed fail')
      console.error(err)
    }
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RentalDetailScreen', { id: rental.id })
      }
    >
      <Box
        my={2}
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth="1"
        bg="blueGray.50"
        flexDirection="row"
        w="100%"
        p={3}
        alignItems="center"
      >
        <Image
          source={{
            uri: rental.thumbnail,
          }}
          alt="Alternate Text"
          size="lg"
          rounded="lg"
          mr={5}
        />
        <Box width="65%">
          <Box flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" alignItems="center">
              <Text fontSize="md" fontWeight="bold">
                ${rental.price}
              </Text>
              <Text>/month</Text>
            </Box>
            {canSave && (
              <IconButton
                onPress={() => {
                  setSaved(!saved)
                }}
                icon={
                  <Icon
                    as={AntDesign}
                    color={saved ? 'pink.500' : 'grey'}
                    name="heart"
                    size={5}
                  />
                }
              />
            )}
            {editable && (
              <Box flexDirection="row" alignItems="center">
                <IconButton
                  icon={
                    <Icon
                      as={FontAwesome5}
                      color="lightBlue.500"
                      name="pen"
                      size={4}
                    />
                  }
                  onPress={() =>
                    navigation.navigate('UpdateRentalScreen', { id: rental.id })
                  }
                />
                <IconButton
                  icon={
                    <Icon
                      as={FontAwesome}
                      color="red.500"
                      name="remove"
                      size={5}
                    />
                  }
                  onPress={handleDelete}
                />
              </Box>
            )}
          </Box>

          <Text fontSize="md" fontWeight={500} mb={1}>
            {rental.title}
          </Text>
          <Box flexDirection="row" alignItems="center">
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color="#0995E7"
            />
            <Text>{rental.location}</Text>
          </Box>

          <Box flexDirection="row" justifyContent="space-between" mr={2}>
            <Box
              flexDirection="row"
              alignItems="center"
              rounded="md"
              bg="blueGray.200"
              py={0.7}
              px={4}
            >
              <Ionicons name="bed" size={15} color="black" />
              {'  '}
              <Text fontWeight={500}>{rental.bedroom}</Text>
            </Box>

            <Box
              flexDirection="row"
              alignItems="center"
              rounded="md"
              bg="blueGray.200"
              py={0.7}
              px={4}
            >
              <Feather name="maximize" size={15} color="black" />
              {'  '}
              <Text fontWeight={500}>{rental.area} m2</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default RentalComponent
