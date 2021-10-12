/* eslint-disable */
import createAuthApolloClient from './auth-client'
import createUnAuthClient from './unauth-client'

export function createClient(state: any) {
  let client: any
  let role: string
  let isUserLoggedin: boolean

  if (state?.user) {
    client = createAuthApolloClient(state.user)
    role = 'user'
    isUserLoggedin = true
  } else {
    client = createUnAuthClient()
    role = 'nonUser'
    isUserLoggedin = false
  }
  return [client, role, isUserLoggedin]
}
