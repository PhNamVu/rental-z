import * as React from 'react'
import { FlatList, Text, View } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import SearchBar from '../components/SearchBar'
import { useAllRentalsQuery } from '../generated/hooks'
import RentalComponent from '../components/shared/RentalComponent'
import useDebounce from '../hooks/use-debounce'

const HomeScreen = () => {
  const [input, setInput] = React.useState('')
  const searchTerm = useDebounce(input, 1000)
  const { data } = useAllRentalsQuery({
    variables: {
      where: {
        _and: [
          {
            title: {
              _ilike: `%${searchTerm}%`,
            },
          },
          {
            location: {
              _ilike: `%${searchTerm}%`,
            },
          },
        ],
      },
    },
    fetchPolicy: 'network-only',
  })
  const rentals = data?.rentals || []
  return (
    <SafeAreaView>
      <View m={6}>
        <Text fontSize="xl">Welcome Home</Text>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Find your dream 🏠
        </Text>
        <SearchBar input={input} setInput={setInput} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={rentals}
          renderItem={({ item }) => <RentalComponent rental={item} canSave />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
