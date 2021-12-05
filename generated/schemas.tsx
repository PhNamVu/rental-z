export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

export type SubmitDoneTaskInput = {
  displayName: Scalars['String']
  ownerMail: Scalars['String']
  taskName: Scalars['String']
  url: Scalars['String']
}

export type SubmitDoneTaskRes = {
  __typename?: 'SubmitDoneTaskRes'
  message?: Maybe<Scalars['String']>
  status: Scalars['String']
  statusCode?: Maybe<Scalars['Int']>
}

export type UserSetupInput = {
  email: Scalars['String']
  id: Scalars['String']
  role: Scalars['String']
}

export type UserSetupRes = {
  __typename?: 'UserSetupRes'
  message?: Maybe<Scalars['String']>
  status: Scalars['String']
  statusCode?: Maybe<Scalars['Int']>
}

/** columns and relationships of "furniture" */
export type Furniture = {
  __typename?: 'furniture'
  id: Scalars['Int']
  /** fetch data from the table: "rentals" */
  rentals: Array<Rentals>
  /** An aggregate relationship */
  rentals_aggregate: Rentals_Aggregate
  title: Scalars['String']
}

/** columns and relationships of "furniture" */
export type FurnitureRentalsArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

/** columns and relationships of "furniture" */
export type FurnitureRentals_AggregateArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

/** aggregated selection of "furniture" */
export type Furniture_Aggregate = {
  __typename?: 'furniture_aggregate'
  aggregate?: Maybe<Furniture_Aggregate_Fields>
  nodes: Array<Furniture>
}

/** aggregate fields of "furniture" */
export type Furniture_Aggregate_Fields = {
  __typename?: 'furniture_aggregate_fields'
  avg?: Maybe<Furniture_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Furniture_Max_Fields>
  min?: Maybe<Furniture_Min_Fields>
  stddev?: Maybe<Furniture_Stddev_Fields>
  stddev_pop?: Maybe<Furniture_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Furniture_Stddev_Samp_Fields>
  sum?: Maybe<Furniture_Sum_Fields>
  var_pop?: Maybe<Furniture_Var_Pop_Fields>
  var_samp?: Maybe<Furniture_Var_Samp_Fields>
  variance?: Maybe<Furniture_Variance_Fields>
}

/** aggregate fields of "furniture" */
export type Furniture_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Furniture_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Furniture_Avg_Fields = {
  __typename?: 'furniture_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "furniture". All fields are combined with a logical 'AND'. */
export type Furniture_Bool_Exp = {
  _and?: Maybe<Array<Furniture_Bool_Exp>>
  _not?: Maybe<Furniture_Bool_Exp>
  _or?: Maybe<Array<Furniture_Bool_Exp>>
  id?: Maybe<Int_Comparison_Exp>
  rentals?: Maybe<Rentals_Bool_Exp>
  title?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "furniture" */
export enum Furniture_Constraint {
  /** unique or primary key constraint */
  FurniturePkey = 'furniture_pkey',
}

/** input type for incrementing numeric columns in table "furniture" */
export type Furniture_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "furniture" */
export type Furniture_Insert_Input = {
  id?: Maybe<Scalars['Int']>
  rentals?: Maybe<Rentals_Arr_Rel_Insert_Input>
  title?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Furniture_Max_Fields = {
  __typename?: 'furniture_max_fields'
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Furniture_Min_Fields = {
  __typename?: 'furniture_min_fields'
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "furniture" */
export type Furniture_Mutation_Response = {
  __typename?: 'furniture_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Furniture>
}

/** input type for inserting object relation for remote table "furniture" */
export type Furniture_Obj_Rel_Insert_Input = {
  data: Furniture_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Furniture_On_Conflict>
}

/** on conflict condition type for table "furniture" */
export type Furniture_On_Conflict = {
  constraint: Furniture_Constraint
  update_columns?: Array<Furniture_Update_Column>
  where?: Maybe<Furniture_Bool_Exp>
}

/** Ordering options when selecting data from "furniture". */
export type Furniture_Order_By = {
  id?: Maybe<Order_By>
  rentals_aggregate?: Maybe<Rentals_Aggregate_Order_By>
  title?: Maybe<Order_By>
}

/** primary key columns input for table: furniture */
export type Furniture_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "furniture" */
export enum Furniture_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "furniture" */
export type Furniture_Set_Input = {
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Furniture_Stddev_Fields = {
  __typename?: 'furniture_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Furniture_Stddev_Pop_Fields = {
  __typename?: 'furniture_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Furniture_Stddev_Samp_Fields = {
  __typename?: 'furniture_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Furniture_Sum_Fields = {
  __typename?: 'furniture_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "furniture" */
export enum Furniture_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
}

/** aggregate var_pop on columns */
export type Furniture_Var_Pop_Fields = {
  __typename?: 'furniture_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Furniture_Var_Samp_Fields = {
  __typename?: 'furniture_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Furniture_Variance_Fields = {
  __typename?: 'furniture_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "furniture" */
  delete_furniture?: Maybe<Furniture_Mutation_Response>
  /** delete single row from the table: "furniture" */
  delete_furniture_by_pk?: Maybe<Furniture>
  /** delete data from the table: "property_types" */
  delete_property_types?: Maybe<Property_Types_Mutation_Response>
  /** delete single row from the table: "property_types" */
  delete_property_types_by_pk?: Maybe<Property_Types>
  /** delete data from the table: "rental_note" */
  delete_rental_note?: Maybe<Rental_Note_Mutation_Response>
  /** delete single row from the table: "rental_note" */
  delete_rental_note_by_pk?: Maybe<Rental_Note>
  /** delete data from the table: "rentals" */
  delete_rentals?: Maybe<Rentals_Mutation_Response>
  /** delete single row from the table: "rentals" */
  delete_rentals_by_pk?: Maybe<Rentals>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "furniture" */
  insert_furniture?: Maybe<Furniture_Mutation_Response>
  /** insert a single row into the table: "furniture" */
  insert_furniture_one?: Maybe<Furniture>
  /** insert data into the table: "property_types" */
  insert_property_types?: Maybe<Property_Types_Mutation_Response>
  /** insert a single row into the table: "property_types" */
  insert_property_types_one?: Maybe<Property_Types>
  /** insert data into the table: "rental_note" */
  insert_rental_note?: Maybe<Rental_Note_Mutation_Response>
  /** insert a single row into the table: "rental_note" */
  insert_rental_note_one?: Maybe<Rental_Note>
  /** insert data into the table: "rentals" */
  insert_rentals?: Maybe<Rentals_Mutation_Response>
  /** insert a single row into the table: "rentals" */
  insert_rentals_one?: Maybe<Rentals>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  submitDoneTask?: Maybe<SubmitDoneTaskRes>
  /** update data of the table: "furniture" */
  update_furniture?: Maybe<Furniture_Mutation_Response>
  /** update single row of the table: "furniture" */
  update_furniture_by_pk?: Maybe<Furniture>
  /** update data of the table: "property_types" */
  update_property_types?: Maybe<Property_Types_Mutation_Response>
  /** update single row of the table: "property_types" */
  update_property_types_by_pk?: Maybe<Property_Types>
  /** update data of the table: "rental_note" */
  update_rental_note?: Maybe<Rental_Note_Mutation_Response>
  /** update single row of the table: "rental_note" */
  update_rental_note_by_pk?: Maybe<Rental_Note>
  /** update data of the table: "rentals" */
  update_rentals?: Maybe<Rentals_Mutation_Response>
  /** update single row of the table: "rentals" */
  update_rentals_by_pk?: Maybe<Rentals>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  userSetup?: Maybe<UserSetupRes>
}

/** mutation root */
export type Mutation_RootDelete_FurnitureArgs = {
  where: Furniture_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Furniture_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Property_TypesArgs = {
  where: Property_Types_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Property_Types_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Rental_NoteArgs = {
  where: Rental_Note_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Rental_Note_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_RentalsArgs = {
  where: Rentals_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Rentals_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_FurnitureArgs = {
  objects: Array<Furniture_Insert_Input>
  on_conflict?: Maybe<Furniture_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Furniture_OneArgs = {
  object: Furniture_Insert_Input
  on_conflict?: Maybe<Furniture_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Property_TypesArgs = {
  objects: Array<Property_Types_Insert_Input>
  on_conflict?: Maybe<Property_Types_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Property_Types_OneArgs = {
  object: Property_Types_Insert_Input
  on_conflict?: Maybe<Property_Types_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Rental_NoteArgs = {
  objects: Array<Rental_Note_Insert_Input>
  on_conflict?: Maybe<Rental_Note_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Rental_Note_OneArgs = {
  object: Rental_Note_Insert_Input
  on_conflict?: Maybe<Rental_Note_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RentalsArgs = {
  objects: Array<Rentals_Insert_Input>
  on_conflict?: Maybe<Rentals_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Rentals_OneArgs = {
  object: Rentals_Insert_Input
  on_conflict?: Maybe<Rentals_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootSubmitDoneTaskArgs = {
  input: SubmitDoneTaskInput
}

/** mutation root */
export type Mutation_RootUpdate_FurnitureArgs = {
  _inc?: Maybe<Furniture_Inc_Input>
  _set?: Maybe<Furniture_Set_Input>
  where: Furniture_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Furniture_By_PkArgs = {
  _inc?: Maybe<Furniture_Inc_Input>
  _set?: Maybe<Furniture_Set_Input>
  pk_columns: Furniture_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Property_TypesArgs = {
  _inc?: Maybe<Property_Types_Inc_Input>
  _set?: Maybe<Property_Types_Set_Input>
  where: Property_Types_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Property_Types_By_PkArgs = {
  _inc?: Maybe<Property_Types_Inc_Input>
  _set?: Maybe<Property_Types_Set_Input>
  pk_columns: Property_Types_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Rental_NoteArgs = {
  _set?: Maybe<Rental_Note_Set_Input>
  where: Rental_Note_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Rental_Note_By_PkArgs = {
  _set?: Maybe<Rental_Note_Set_Input>
  pk_columns: Rental_Note_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_RentalsArgs = {
  _inc?: Maybe<Rentals_Inc_Input>
  _set?: Maybe<Rentals_Set_Input>
  where: Rentals_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Rentals_By_PkArgs = {
  _inc?: Maybe<Rentals_Inc_Input>
  _set?: Maybe<Rentals_Set_Input>
  pk_columns: Rentals_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUserSetupArgs = {
  input: UserSetupInput
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "property_types" */
export type Property_Types = {
  __typename?: 'property_types'
  id: Scalars['Int']
  /** fetch data from the table: "rentals" */
  rentals: Array<Rentals>
  /** An aggregate relationship */
  rentals_aggregate: Rentals_Aggregate
  title: Scalars['String']
}

/** columns and relationships of "property_types" */
export type Property_TypesRentalsArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

/** columns and relationships of "property_types" */
export type Property_TypesRentals_AggregateArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

/** aggregated selection of "property_types" */
export type Property_Types_Aggregate = {
  __typename?: 'property_types_aggregate'
  aggregate?: Maybe<Property_Types_Aggregate_Fields>
  nodes: Array<Property_Types>
}

/** aggregate fields of "property_types" */
export type Property_Types_Aggregate_Fields = {
  __typename?: 'property_types_aggregate_fields'
  avg?: Maybe<Property_Types_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Property_Types_Max_Fields>
  min?: Maybe<Property_Types_Min_Fields>
  stddev?: Maybe<Property_Types_Stddev_Fields>
  stddev_pop?: Maybe<Property_Types_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Types_Stddev_Samp_Fields>
  sum?: Maybe<Property_Types_Sum_Fields>
  var_pop?: Maybe<Property_Types_Var_Pop_Fields>
  var_samp?: Maybe<Property_Types_Var_Samp_Fields>
  variance?: Maybe<Property_Types_Variance_Fields>
}

/** aggregate fields of "property_types" */
export type Property_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Property_Types_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Property_Types_Avg_Fields = {
  __typename?: 'property_types_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "property_types". All fields are combined with a logical 'AND'. */
export type Property_Types_Bool_Exp = {
  _and?: Maybe<Array<Property_Types_Bool_Exp>>
  _not?: Maybe<Property_Types_Bool_Exp>
  _or?: Maybe<Array<Property_Types_Bool_Exp>>
  id?: Maybe<Int_Comparison_Exp>
  rentals?: Maybe<Rentals_Bool_Exp>
  title?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "property_types" */
export enum Property_Types_Constraint {
  /** unique or primary key constraint */
  PropertyTypesPkey = 'property_types_pkey',
}

/** input type for incrementing numeric columns in table "property_types" */
export type Property_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "property_types" */
export type Property_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>
  rentals?: Maybe<Rentals_Arr_Rel_Insert_Input>
  title?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Property_Types_Max_Fields = {
  __typename?: 'property_types_max_fields'
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Property_Types_Min_Fields = {
  __typename?: 'property_types_min_fields'
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "property_types" */
export type Property_Types_Mutation_Response = {
  __typename?: 'property_types_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Property_Types>
}

/** input type for inserting object relation for remote table "property_types" */
export type Property_Types_Obj_Rel_Insert_Input = {
  data: Property_Types_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Property_Types_On_Conflict>
}

/** on conflict condition type for table "property_types" */
export type Property_Types_On_Conflict = {
  constraint: Property_Types_Constraint
  update_columns?: Array<Property_Types_Update_Column>
  where?: Maybe<Property_Types_Bool_Exp>
}

/** Ordering options when selecting data from "property_types". */
export type Property_Types_Order_By = {
  id?: Maybe<Order_By>
  rentals_aggregate?: Maybe<Rentals_Aggregate_Order_By>
  title?: Maybe<Order_By>
}

/** primary key columns input for table: property_types */
export type Property_Types_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "property_types" */
export enum Property_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "property_types" */
export type Property_Types_Set_Input = {
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Property_Types_Stddev_Fields = {
  __typename?: 'property_types_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Property_Types_Stddev_Pop_Fields = {
  __typename?: 'property_types_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Property_Types_Stddev_Samp_Fields = {
  __typename?: 'property_types_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Property_Types_Sum_Fields = {
  __typename?: 'property_types_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "property_types" */
export enum Property_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
}

/** aggregate var_pop on columns */
export type Property_Types_Var_Pop_Fields = {
  __typename?: 'property_types_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Property_Types_Var_Samp_Fields = {
  __typename?: 'property_types_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Property_Types_Variance_Fields = {
  __typename?: 'property_types_variance_fields'
  id?: Maybe<Scalars['Float']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "furniture" */
  furniture: Array<Furniture>
  /** fetch aggregated fields from the table: "furniture" */
  furniture_aggregate: Furniture_Aggregate
  /** fetch data from the table: "furniture" using primary key columns */
  furniture_by_pk?: Maybe<Furniture>
  /** fetch data from the table: "property_types" */
  property_types: Array<Property_Types>
  /** fetch aggregated fields from the table: "property_types" */
  property_types_aggregate: Property_Types_Aggregate
  /** fetch data from the table: "property_types" using primary key columns */
  property_types_by_pk?: Maybe<Property_Types>
  /** fetch data from the table: "rental_note" */
  rental_note: Array<Rental_Note>
  /** fetch aggregated fields from the table: "rental_note" */
  rental_note_aggregate: Rental_Note_Aggregate
  /** fetch data from the table: "rental_note" using primary key columns */
  rental_note_by_pk?: Maybe<Rental_Note>
  /** fetch data from the table: "rentals" */
  rentals: Array<Rentals>
  /** An aggregate relationship */
  rentals_aggregate: Rentals_Aggregate
  /** fetch data from the table: "rentals" using primary key columns */
  rentals_by_pk?: Maybe<Rentals>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootFurnitureArgs = {
  distinct_on?: Maybe<Array<Furniture_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Furniture_Order_By>>
  where?: Maybe<Furniture_Bool_Exp>
}

export type Query_RootFurniture_AggregateArgs = {
  distinct_on?: Maybe<Array<Furniture_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Furniture_Order_By>>
  where?: Maybe<Furniture_Bool_Exp>
}

export type Query_RootFurniture_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootProperty_TypesArgs = {
  distinct_on?: Maybe<Array<Property_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Types_Order_By>>
  where?: Maybe<Property_Types_Bool_Exp>
}

export type Query_RootProperty_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Types_Order_By>>
  where?: Maybe<Property_Types_Bool_Exp>
}

export type Query_RootProperty_Types_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootRental_NoteArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

export type Query_RootRental_Note_AggregateArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

export type Query_RootRental_Note_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootRentalsArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

export type Query_RootRentals_AggregateArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

export type Query_RootRentals_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

/** columns and relationships of "rental_note" */
export type Rental_Note = {
  __typename?: 'rental_note'
  /** createdAt */
  createdAt?: Maybe<Scalars['timestamptz']>
  id: Scalars['String']
  note: Scalars['String']
  /** An object relationship */
  owner: Users
  /** An object relationship */
  rental: Rentals
  rentalId: Scalars['String']
  userId: Scalars['String']
}

/** aggregated selection of "rental_note" */
export type Rental_Note_Aggregate = {
  __typename?: 'rental_note_aggregate'
  aggregate?: Maybe<Rental_Note_Aggregate_Fields>
  nodes: Array<Rental_Note>
}

/** aggregate fields of "rental_note" */
export type Rental_Note_Aggregate_Fields = {
  __typename?: 'rental_note_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Rental_Note_Max_Fields>
  min?: Maybe<Rental_Note_Min_Fields>
}

/** aggregate fields of "rental_note" */
export type Rental_Note_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rental_Note_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "rental_note" */
export type Rental_Note_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Rental_Note_Max_Order_By>
  min?: Maybe<Rental_Note_Min_Order_By>
}

/** input type for inserting array relation for remote table "rental_note" */
export type Rental_Note_Arr_Rel_Insert_Input = {
  data: Array<Rental_Note_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Rental_Note_On_Conflict>
}

/** Boolean expression to filter rows from the table "rental_note". All fields are combined with a logical 'AND'. */
export type Rental_Note_Bool_Exp = {
  _and?: Maybe<Array<Rental_Note_Bool_Exp>>
  _not?: Maybe<Rental_Note_Bool_Exp>
  _or?: Maybe<Array<Rental_Note_Bool_Exp>>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  note?: Maybe<String_Comparison_Exp>
  owner?: Maybe<Users_Bool_Exp>
  rental?: Maybe<Rentals_Bool_Exp>
  rentalId?: Maybe<String_Comparison_Exp>
  userId?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "rental_note" */
export enum Rental_Note_Constraint {
  /** unique or primary key constraint */
  RentalNotePkey = 'rental_note_pkey',
}

/** input type for inserting data into table "rental_note" */
export type Rental_Note_Insert_Input = {
  /** createdAt */
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  owner?: Maybe<Users_Obj_Rel_Insert_Input>
  rental?: Maybe<Rentals_Obj_Rel_Insert_Input>
  rentalId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Rental_Note_Max_Fields = {
  __typename?: 'rental_note_max_fields'
  /** createdAt */
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  rentalId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "rental_note" */
export type Rental_Note_Max_Order_By = {
  /** createdAt */
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  note?: Maybe<Order_By>
  rentalId?: Maybe<Order_By>
  userId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Rental_Note_Min_Fields = {
  __typename?: 'rental_note_min_fields'
  /** createdAt */
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  rentalId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "rental_note" */
export type Rental_Note_Min_Order_By = {
  /** createdAt */
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  note?: Maybe<Order_By>
  rentalId?: Maybe<Order_By>
  userId?: Maybe<Order_By>
}

/** response of any mutation on the table "rental_note" */
export type Rental_Note_Mutation_Response = {
  __typename?: 'rental_note_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Rental_Note>
}

/** on conflict condition type for table "rental_note" */
export type Rental_Note_On_Conflict = {
  constraint: Rental_Note_Constraint
  update_columns?: Array<Rental_Note_Update_Column>
  where?: Maybe<Rental_Note_Bool_Exp>
}

/** Ordering options when selecting data from "rental_note". */
export type Rental_Note_Order_By = {
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  note?: Maybe<Order_By>
  owner?: Maybe<Users_Order_By>
  rental?: Maybe<Rentals_Order_By>
  rentalId?: Maybe<Order_By>
  userId?: Maybe<Order_By>
}

/** primary key columns input for table: rental_note */
export type Rental_Note_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "rental_note" */
export enum Rental_Note_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  RentalId = 'rentalId',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "rental_note" */
export type Rental_Note_Set_Input = {
  /** createdAt */
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  rentalId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

/** update columns of table "rental_note" */
export enum Rental_Note_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  RentalId = 'rentalId',
  /** column name */
  UserId = 'userId',
}

/** columns and relationships of "rentals" */
export type Rentals = {
  __typename?: 'rentals'
  area: Scalars['Int']
  bedroom: Scalars['Int']
  description?: Maybe<Scalars['String']>
  /** An object relationship */
  furniture?: Maybe<Furniture>
  furnitureId?: Maybe<Scalars['Int']>
  id: Scalars['String']
  location: Scalars['String']
  /** An array relationship */
  notes: Array<Rental_Note>
  /** An aggregate relationship */
  notes_aggregate: Rental_Note_Aggregate
  price: Scalars['Int']
  /** An object relationship */
  property: Property_Types
  /** An object relationship */
  reporter?: Maybe<Users>
  reporterId?: Maybe<Scalars['String']>
  thumbnail: Scalars['String']
  title: Scalars['String']
  typeId: Scalars['Int']
}

/** columns and relationships of "rentals" */
export type RentalsNotesArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

/** columns and relationships of "rentals" */
export type RentalsNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

/** aggregated selection of "rentals" */
export type Rentals_Aggregate = {
  __typename?: 'rentals_aggregate'
  aggregate?: Maybe<Rentals_Aggregate_Fields>
  nodes: Array<Rentals>
}

/** aggregate fields of "rentals" */
export type Rentals_Aggregate_Fields = {
  __typename?: 'rentals_aggregate_fields'
  avg?: Maybe<Rentals_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Rentals_Max_Fields>
  min?: Maybe<Rentals_Min_Fields>
  stddev?: Maybe<Rentals_Stddev_Fields>
  stddev_pop?: Maybe<Rentals_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Rentals_Stddev_Samp_Fields>
  sum?: Maybe<Rentals_Sum_Fields>
  var_pop?: Maybe<Rentals_Var_Pop_Fields>
  var_samp?: Maybe<Rentals_Var_Samp_Fields>
  variance?: Maybe<Rentals_Variance_Fields>
}

/** aggregate fields of "rentals" */
export type Rentals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rentals_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "rentals" */
export type Rentals_Aggregate_Order_By = {
  avg?: Maybe<Rentals_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Rentals_Max_Order_By>
  min?: Maybe<Rentals_Min_Order_By>
  stddev?: Maybe<Rentals_Stddev_Order_By>
  stddev_pop?: Maybe<Rentals_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Rentals_Stddev_Samp_Order_By>
  sum?: Maybe<Rentals_Sum_Order_By>
  var_pop?: Maybe<Rentals_Var_Pop_Order_By>
  var_samp?: Maybe<Rentals_Var_Samp_Order_By>
  variance?: Maybe<Rentals_Variance_Order_By>
}

/** input type for inserting array relation for remote table "rentals" */
export type Rentals_Arr_Rel_Insert_Input = {
  data: Array<Rentals_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Rentals_On_Conflict>
}

/** aggregate avg on columns */
export type Rentals_Avg_Fields = {
  __typename?: 'rentals_avg_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "rentals" */
export type Rentals_Avg_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "rentals". All fields are combined with a logical 'AND'. */
export type Rentals_Bool_Exp = {
  _and?: Maybe<Array<Rentals_Bool_Exp>>
  _not?: Maybe<Rentals_Bool_Exp>
  _or?: Maybe<Array<Rentals_Bool_Exp>>
  area?: Maybe<Int_Comparison_Exp>
  bedroom?: Maybe<Int_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  furniture?: Maybe<Furniture_Bool_Exp>
  furnitureId?: Maybe<Int_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  location?: Maybe<String_Comparison_Exp>
  notes?: Maybe<Rental_Note_Bool_Exp>
  price?: Maybe<Int_Comparison_Exp>
  property?: Maybe<Property_Types_Bool_Exp>
  reporter?: Maybe<Users_Bool_Exp>
  reporterId?: Maybe<String_Comparison_Exp>
  thumbnail?: Maybe<String_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  typeId?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "rentals" */
export enum Rentals_Constraint {
  /** unique or primary key constraint */
  RentalsPkey = 'rentals_pkey',
}

/** input type for incrementing numeric columns in table "rentals" */
export type Rentals_Inc_Input = {
  area?: Maybe<Scalars['Int']>
  bedroom?: Maybe<Scalars['Int']>
  furnitureId?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Int']>
  typeId?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "rentals" */
export type Rentals_Insert_Input = {
  area?: Maybe<Scalars['Int']>
  bedroom?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  furniture?: Maybe<Furniture_Obj_Rel_Insert_Input>
  furnitureId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  notes?: Maybe<Rental_Note_Arr_Rel_Insert_Input>
  price?: Maybe<Scalars['Int']>
  property?: Maybe<Property_Types_Obj_Rel_Insert_Input>
  reporter?: Maybe<Users_Obj_Rel_Insert_Input>
  reporterId?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  typeId?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Rentals_Max_Fields = {
  __typename?: 'rentals_max_fields'
  area?: Maybe<Scalars['Int']>
  bedroom?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  furnitureId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  reporterId?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  typeId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "rentals" */
export type Rentals_Max_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  description?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  id?: Maybe<Order_By>
  location?: Maybe<Order_By>
  price?: Maybe<Order_By>
  reporterId?: Maybe<Order_By>
  thumbnail?: Maybe<Order_By>
  title?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Rentals_Min_Fields = {
  __typename?: 'rentals_min_fields'
  area?: Maybe<Scalars['Int']>
  bedroom?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  furnitureId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  reporterId?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  typeId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "rentals" */
export type Rentals_Min_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  description?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  id?: Maybe<Order_By>
  location?: Maybe<Order_By>
  price?: Maybe<Order_By>
  reporterId?: Maybe<Order_By>
  thumbnail?: Maybe<Order_By>
  title?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** response of any mutation on the table "rentals" */
export type Rentals_Mutation_Response = {
  __typename?: 'rentals_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Rentals>
}

/** input type for inserting object relation for remote table "rentals" */
export type Rentals_Obj_Rel_Insert_Input = {
  data: Rentals_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Rentals_On_Conflict>
}

/** on conflict condition type for table "rentals" */
export type Rentals_On_Conflict = {
  constraint: Rentals_Constraint
  update_columns?: Array<Rentals_Update_Column>
  where?: Maybe<Rentals_Bool_Exp>
}

/** Ordering options when selecting data from "rentals". */
export type Rentals_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  description?: Maybe<Order_By>
  furniture?: Maybe<Furniture_Order_By>
  furnitureId?: Maybe<Order_By>
  id?: Maybe<Order_By>
  location?: Maybe<Order_By>
  notes_aggregate?: Maybe<Rental_Note_Aggregate_Order_By>
  price?: Maybe<Order_By>
  property?: Maybe<Property_Types_Order_By>
  reporter?: Maybe<Users_Order_By>
  reporterId?: Maybe<Order_By>
  thumbnail?: Maybe<Order_By>
  title?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** primary key columns input for table: rentals */
export type Rentals_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "rentals" */
export enum Rentals_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Bedroom = 'bedroom',
  /** column name */
  Description = 'description',
  /** column name */
  FurnitureId = 'furnitureId',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Price = 'price',
  /** column name */
  ReporterId = 'reporterId',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  TypeId = 'typeId',
}

/** input type for updating data in table "rentals" */
export type Rentals_Set_Input = {
  area?: Maybe<Scalars['Int']>
  bedroom?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  furnitureId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  reporterId?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  typeId?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Rentals_Stddev_Fields = {
  __typename?: 'rentals_stddev_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "rentals" */
export type Rentals_Stddev_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Rentals_Stddev_Pop_Fields = {
  __typename?: 'rentals_stddev_pop_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "rentals" */
export type Rentals_Stddev_Pop_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Rentals_Stddev_Samp_Fields = {
  __typename?: 'rentals_stddev_samp_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "rentals" */
export type Rentals_Stddev_Samp_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Rentals_Sum_Fields = {
  __typename?: 'rentals_sum_fields'
  area?: Maybe<Scalars['Int']>
  bedroom?: Maybe<Scalars['Int']>
  furnitureId?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Int']>
  typeId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "rentals" */
export type Rentals_Sum_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** update columns of table "rentals" */
export enum Rentals_Update_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Bedroom = 'bedroom',
  /** column name */
  Description = 'description',
  /** column name */
  FurnitureId = 'furnitureId',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Price = 'price',
  /** column name */
  ReporterId = 'reporterId',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  TypeId = 'typeId',
}

/** aggregate var_pop on columns */
export type Rentals_Var_Pop_Fields = {
  __typename?: 'rentals_var_pop_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "rentals" */
export type Rentals_Var_Pop_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Rentals_Var_Samp_Fields = {
  __typename?: 'rentals_var_samp_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "rentals" */
export type Rentals_Var_Samp_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Rentals_Variance_Fields = {
  __typename?: 'rentals_variance_fields'
  area?: Maybe<Scalars['Float']>
  bedroom?: Maybe<Scalars['Float']>
  furnitureId?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  typeId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "rentals" */
export type Rentals_Variance_Order_By = {
  area?: Maybe<Order_By>
  bedroom?: Maybe<Order_By>
  furnitureId?: Maybe<Order_By>
  price?: Maybe<Order_By>
  typeId?: Maybe<Order_By>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "furniture" */
  furniture: Array<Furniture>
  /** fetch aggregated fields from the table: "furniture" */
  furniture_aggregate: Furniture_Aggregate
  /** fetch data from the table: "furniture" using primary key columns */
  furniture_by_pk?: Maybe<Furniture>
  /** fetch data from the table: "property_types" */
  property_types: Array<Property_Types>
  /** fetch aggregated fields from the table: "property_types" */
  property_types_aggregate: Property_Types_Aggregate
  /** fetch data from the table: "property_types" using primary key columns */
  property_types_by_pk?: Maybe<Property_Types>
  /** fetch data from the table: "rental_note" */
  rental_note: Array<Rental_Note>
  /** fetch aggregated fields from the table: "rental_note" */
  rental_note_aggregate: Rental_Note_Aggregate
  /** fetch data from the table: "rental_note" using primary key columns */
  rental_note_by_pk?: Maybe<Rental_Note>
  /** fetch data from the table: "rentals" */
  rentals: Array<Rentals>
  /** An aggregate relationship */
  rentals_aggregate: Rentals_Aggregate
  /** fetch data from the table: "rentals" using primary key columns */
  rentals_by_pk?: Maybe<Rentals>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootFurnitureArgs = {
  distinct_on?: Maybe<Array<Furniture_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Furniture_Order_By>>
  where?: Maybe<Furniture_Bool_Exp>
}

export type Subscription_RootFurniture_AggregateArgs = {
  distinct_on?: Maybe<Array<Furniture_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Furniture_Order_By>>
  where?: Maybe<Furniture_Bool_Exp>
}

export type Subscription_RootFurniture_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootProperty_TypesArgs = {
  distinct_on?: Maybe<Array<Property_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Types_Order_By>>
  where?: Maybe<Property_Types_Bool_Exp>
}

export type Subscription_RootProperty_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Types_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Types_Order_By>>
  where?: Maybe<Property_Types_Bool_Exp>
}

export type Subscription_RootProperty_Types_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootRental_NoteArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

export type Subscription_RootRental_Note_AggregateArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

export type Subscription_RootRental_Note_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootRentalsArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

export type Subscription_RootRentals_AggregateArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

export type Subscription_RootRentals_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  created_at: Scalars['timestamptz']
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  id: Scalars['String']
  lastName?: Maybe<Scalars['String']>
  /** An array relationship */
  rental_notes: Array<Rental_Note>
  /** An aggregate relationship */
  rental_notes_aggregate: Rental_Note_Aggregate
  /** fetch data from the table: "rentals" */
  rentals: Array<Rentals>
  /** An aggregate relationship */
  rentals_aggregate: Rentals_Aggregate
  role: Scalars['String']
  status?: Maybe<Scalars['String']>
}

/** columns and relationships of "users" */
export type UsersRental_NotesArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersRental_Notes_AggregateArgs = {
  distinct_on?: Maybe<Array<Rental_Note_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rental_Note_Order_By>>
  where?: Maybe<Rental_Note_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersRentalsArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersRentals_AggregateArgs = {
  distinct_on?: Maybe<Array<Rentals_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rentals_Order_By>>
  where?: Maybe<Rentals_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  firstName?: Maybe<String_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  lastName?: Maybe<String_Comparison_Exp>
  rental_notes?: Maybe<Rental_Note_Bool_Exp>
  rentals?: Maybe<Rentals_Bool_Exp>
  role?: Maybe<String_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  rental_notes?: Maybe<Rental_Note_Arr_Rel_Insert_Input>
  rentals?: Maybe<Rentals_Arr_Rel_Insert_Input>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firstName?: Maybe<Order_By>
  id?: Maybe<Order_By>
  lastName?: Maybe<Order_By>
  rental_notes_aggregate?: Maybe<Rental_Note_Aggregate_Order_By>
  rentals_aggregate?: Maybe<Rentals_Aggregate_Order_By>
  role?: Maybe<Order_By>
  status?: Maybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
}
