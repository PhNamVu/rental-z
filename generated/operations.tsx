import * as Types from './schemas'

export type UsersQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type UsersQuery = {
  __typename?: 'query_root'
  users: Array<{
    __typename?: 'users'
    id: string
    firstName?: string | null | undefined
    lastName?: string | null | undefined
    email: string
  }>
}

export type PostUserMutationVariables = Types.Exact<{
  object: Types.Users_Insert_Input
}>

export type PostUserMutation = {
  __typename?: 'mutation_root'
  insert_users?:
    | {
        __typename?: 'users_mutation_response'
        affected_rows: number
        returning: Array<{ __typename?: 'users'; id: string }>
      }
    | null
    | undefined
}
