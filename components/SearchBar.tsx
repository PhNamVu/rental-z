import React from 'react'
import { VStack, Input, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ input, setInput }: any) => {
  return (
    <VStack width="100%" space={5} alignItems="center">
      <Input
        value={input}
        onChangeText={setInput}
        size="xl"
        placeholder="Search property by title"
        variant="rounded"
        width="100%"
        borderRadius="10"
        py="2"
        px="2"
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="5"
            color="gray.500"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </VStack>
  )
}

export default SearchBar
