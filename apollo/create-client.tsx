/* eslint-disable */
import createAuthApolloClient from './auth-client'
import createUnAuthClient from './unauth-client'

export function createClient(state: any) {
  let client: any
  let role: string
  let isUserLoggedin: boolean

  if (!state?.user) {
    client = createUnAuthClient()
    role = 'nonUser'
    isUserLoggedin = false
  } else {
    client = createAuthApolloClient(state?.user)
    role =
      state?.customClaims?.claims['https://hasura.io/jwt/claims'][
        'x-hasura-default-role'
      ] || 'anonymous'
    isUserLoggedin = true
  }
  return [client, role, isUserLoggedin]
}
