import { Text, Box, Avatar } from 'native-base'
import React from 'react'

const NoteItem = ({ item }: any) => {
  return (
    <Box flexDirection="row" alignItems="center" mb={2}>
      <Avatar bg="green.500" size="sm" mr={2}>
        {item.owner.email.charAt(0).toUpperCase()}
      </Avatar>
      <Box>
        <Text fontSize="sm" fontWeight="bold">
          {item.owner.email}
        </Text>

        <Text fontSize="sm">{item.note}</Text>
      </Box>
    </Box>
  )
}

export default NoteItem
