import { useRoute } from '@react-navigation/native'
import {
  Box,
  Text,
  Image,
  View,
  Input,
  IconButton,
  FlatList,
} from 'native-base'
import React from 'react'

import { negativeToast, positiveToast } from '../helpers/toaster'
import {
  usePostRentalNoteMutation,
  useRentalDetailQuery,
} from '../generated/hooks'
import { useAuth } from '../hooks/useAuth'
import { Feather, Ionicons } from '@expo/vector-icons'
import NoteItem from '../components/NoteItem'

const RentalDetailScreen = () => {
  const [input, setInput] = React.useState('')
  const route = useRoute()
  const { id }: any = route.params

  const {
    state: { user },
  }: any = useAuth()
  const [postRentalNote] = usePostRentalNoteMutation()

  const { data, loading, refetch } = useRentalDetailQuery({
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  })

  const handleTakeNote = async () => {
    try {
      await postRentalNote({
        variables: {
          object: {
            userId: user.uid,
            rentalId: id,
            note: input,
          },
        },
      })
      positiveToast('Note added')
      refetch()
      setInput('')
    } catch (e) {
      negativeToast('Add note failed')
      console.error(e)
    }
  }
  const rental = data?.rentals[0]
  const note = rental?.notes || []

  if (loading) return <Box> Loading</Box>
  return (
    <View h="100%" flex={1}>
      <Image
        w="100%"
        h="40%"
        source={{ uri: rental?.thumbnail }}
        alt="Rental pic"
      />
      <View m={8}>
        <View flexDirection="row" justifyContent="space-between" w="100%">
          <Text fontSize="xl" fontWeight="bold">
            {rental?.title}
          </Text>
          <Text fontSize="lg">${rental?.price}</Text>
        </View>
        <Text fontSize="md">{rental?.location}</Text>
        <View flexDirection="row" alignItems="center" mt={5}>
          <Ionicons name="bed" size={25} color="black" />
          <Text fontWeight={500} fontSize="lg" ml={2}>
            {rental?.bedroom}
          </Text>
        </View>
        <View flexDirection="row" alignItems="center" mt={5}>
          <Feather name="maximize" size={25} color="black" />
          <Text fontWeight={500} fontSize="lg" ml={2}>
            {rental?.area} m2
          </Text>
        </View>
        <Box flexDirection="row" alignItems="center">
          <Box w="90%">
            <Input
              value={input}
              onChangeText={setInput}
              my={5}
              size="xl"
              placeholder="Note"
              mr="2"
            />
          </Box>
          <IconButton
            disabled={input === ''}
            onPress={handleTakeNote}
            size="sm"
            variant="solid"
            _icon={{
              as: Ionicons,
              name: 'send',
            }}
          />
        </Box>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={note}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id}
        />

        {/* <Box
          flexDirection="row"
          alignItems="center"
          rounded="md"
          bg="blueGray.200"
          py={0.7}
          px={4}
        >
         
        </Box> */}
      </View>
    </View>
  )
}

export default RentalDetailScreen
