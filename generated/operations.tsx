import * as Types from './schemas'

export type PostRentalMutationVariables = Types.Exact<{
  object: Types.Rentals_Insert_Input
}>

export type PostRentalMutation = {
  __typename?: 'mutation_root'
  insert_rentals?:
    | { __typename?: 'rentals_mutation_response'; affected_rows: number }
    | null
    | undefined
}

export type MyUploadQueryVariables = Types.Exact<{
  reporterId: Types.Scalars['String']
}>

export type MyUploadQuery = {
  __typename?: 'query_root'
  rentals: Array<{
    __typename?: 'rentals'
    id: string
    location: string
    price: number
    bedroom: number
    area: number
    thumbnail: string
    title: string
  }>
}

export type DeleteRentalMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DeleteRentalMutation = {
  __typename?: 'mutation_root'
  delete_rentals?:
    | {
        __typename?: 'rentals_mutation_response'
        affected_rows: number
        returning: Array<{ __typename?: 'rentals'; id: string }>
      }
    | null
    | undefined
}

export type RentalDetailQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type RentalDetailQuery = {
  __typename?: 'query_root'
  rentals: Array<{
    __typename?: 'rentals'
    id: string
    location: string
    price: number
    bedroom: number
    area: number
    thumbnail: string
    title: string
    description?: string | null | undefined
    typeId: number
    furnitureId?: number | null | undefined
    notes: Array<{
      __typename?: 'rental_note'
      note: string
      id: string
      createdAt?: any | null | undefined
      owner: { __typename?: 'users'; email: string }
    }>
  }>
}

export type UpdateRentalMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
  object: Types.Rentals_Set_Input
}>

export type UpdateRentalMutation = {
  __typename?: 'mutation_root'
  update_rentals?:
    | {
        __typename?: 'rentals_mutation_response'
        affected_rows: number
        returning: Array<{ __typename?: 'rentals'; id: string }>
      }
    | null
    | undefined
}

export type AllRentalsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Rentals_Bool_Exp>
}>

export type AllRentalsQuery = {
  __typename?: 'query_root'
  rentals: Array<{
    __typename?: 'rentals'
    id: string
    location: string
    price: number
    bedroom: number
    area: number
    thumbnail: string
    title: string
  }>
}

export type PostRentalNoteMutationVariables = Types.Exact<{
  object: Types.Rental_Note_Insert_Input
}>

export type PostRentalNoteMutation = {
  __typename?: 'mutation_root'
  insert_rental_note?:
    | { __typename?: 'rental_note_mutation_response'; affected_rows: number }
    | null
    | undefined
}

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
