import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const UsersDocument = gql`
  query users($id: String) {
    users(where: { id: { _eq: $id } }) {
      id
      firstName
      lastName
      email
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.UsersQuery,
    Types.UsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.UsersQuery, Types.UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.UsersQuery,
    Types.UsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.UsersQuery, Types.UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<
  Types.UsersQuery,
  Types.UsersQueryVariables
>
export const PostUserDocument = gql`
  mutation postUser($object: users_insert_input!) {
    insert_users(objects: [$object]) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export type PostUserMutationFn = Apollo.MutationFunction<
  Types.PostUserMutation,
  Types.PostUserMutationVariables
>

/**
 * __usePostUserMutation__
 *
 * To run a mutation, you first call `usePostUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUserMutation, { data, loading, error }] = usePostUserMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostUserMutation,
    Types.PostUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.PostUserMutation,
    Types.PostUserMutationVariables
  >(PostUserDocument, options)
}
export type PostUserMutationHookResult = ReturnType<typeof usePostUserMutation>
export type PostUserMutationResult =
  Apollo.MutationResult<Types.PostUserMutation>
export type PostUserMutationOptions = Apollo.BaseMutationOptions<
  Types.PostUserMutation,
  Types.PostUserMutationVariables
>
