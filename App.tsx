import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { extendTheme, NativeBaseProvider } from 'native-base'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { ProvideAuth, useAuth } from './hooks/useAuth'
import Toast from 'react-native-toast-message'
import { createClient } from './apollo/create-client'
import { ApolloProvider } from '@apollo/client'

export default function App() {
  const { state }: any = useAuth()
  const [client] = createClient(state)
  const isLoadingComplete = useCachedResources()
  const newColorTheme = {
    primary: {
      500: '#0995E7',
    },
  }
  const theme = extendTheme({ colors: newColorTheme })
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ProvideAuth>
        <NativeBaseProvider theme={theme}>
          <ApolloProvider client={client}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
              <Toast ref={(ref) => Toast.setRef(ref)} />
            </SafeAreaProvider>
          </ApolloProvider>
        </NativeBaseProvider>
      </ProvideAuth>
    )
  }
}
