import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthTabNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabLogin"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabLogin" component={LoginScreen} />
      <Stack.Screen name="TabSignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthTabNavigator;
