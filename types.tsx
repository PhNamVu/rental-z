import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthTabParamList> | undefined
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Modal: undefined
  NotFound: undefined
  UpdateRentalScreen: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >

export type HomeParamList = {
  HomeScreen: undefined
  SavedScreen: undefined
  CategoriesScreen: undefined
  SettingScreen: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}

export type AuthStackParamList = {
  Landing: undefined
  TabLogin: undefined
  TabSignUp: undefined
}

export type AuthTabParamList = {
  Landing: undefined
  TabLogin: undefined
  TabSignUp: undefined
}

export type TabSettingParamList = {
  SettingScreen: undefined
  MyUploadScreen: undefined
  UploadRentalScreen: undefined
  UpdateRentalScreen: undefined
}
