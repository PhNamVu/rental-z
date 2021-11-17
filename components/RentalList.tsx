import * as React from 'react'
import { FlatList, Text, View } from 'native-base'

import { useAllRentalsQuery } from '../generated/hooks'
import RentalComponent from '../components/shared/RentalComponent'

interface Props {
  searchTerm: string
}

const RentalList: React.FC<Props> = ({ searchTerm }) => {
  console.log(searchTerm)
  const { data, loading } = useAllRentalsQuery({
    variables: {
      where: {
        _and: [
          {
            _or: [
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
              {
                property: {
                  title: {
                    _ilike: `%${searchTerm}%`,
                  },
                },
              },
            ],
          },
        ],
      },
    },
    fetchPolicy: 'network-only',
  })
  const rentals = data?.rentals || []
  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      {rentals.length !== 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={rentals}
          renderItem={({ item }) => <RentalComponent rental={item} canSave />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>Can found property</Text>
      )}
    </View>
  )
}

export default RentalList
