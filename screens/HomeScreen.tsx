import * as React from 'react'
import { Text, View } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import SearchBar from '../components/SearchBar'
import useDebounce from '../hooks/use-debounce'
import RentalList from '../components/RentalList'

const HomeScreen = () => {
  const [input, setInput] = React.useState('')
  const searchTerm = useDebounce(input, 500)

  return (
    <SafeAreaView>
      <View m={6}>
        <Text fontSize="xl">Welcome Home</Text>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Find your dream 🏠
        </Text>
        <SearchBar input={input} setInput={setInput} />

        <RentalList searchTerm={searchTerm} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
