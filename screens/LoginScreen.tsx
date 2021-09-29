import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Text, VStack, Button, View, Input } from "native-base";
import React from "react";
import { Formik } from "formik";

import { AuthStackParamList } from "../types";
import { LoginSchemaValidation } from "../helpers/validation";
import Colors from "../constants/Colors";

export interface LoginForm {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "TabLogin">>();
  return (
    <VStack flex={1} justifyContent="space-evenly" mt={5} mx={10}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Sign In
        </Text>
      </Box>
      <Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={LoginSchemaValidation}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View>
              <Input
                _focus={{ borderColor: Colors.primary.text }}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                placeholder="E-mail"
                isInvalid={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.email}
                </Text>
              )}
              <Input
                _focus={{ borderColor: Colors.primary.text }}
                mt={8}
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Password"
                onBlur={() => setFieldTouched("password")}
                secureTextEntry={true}
                isInvalid={touched.email && !!errors.email}
              />
              {touched.password && errors.password && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.password}
                </Text>
              )}
              <Box alignItems="flex-end" my={5}>
                <Text
                  fontSize="sm"
                  fontWeight={500}
                  color={Colors.primary.text}
                >
                  {" "}
                  Forgot password?
                </Text>
              </Box>
              <Button
                color="#3740FE"
                disabled={!isValid}
                onPress={() => handleSubmit}
              >
                Sign In
              </Button>
            </View>
          )}
        </Formik>
      </Box>
      <Box justifyContent="center" flexDirection="row">
        <Text fontSize="md" fontWeight={400}>
          I'm a new user.
        </Text>
        <Text
          fontSize="md"
          fontWeight={500}
          color={Colors.primary.text}
          onPress={() => navigation.replace("TabSignUp")}
        >
          {" "}
          Sign Up
        </Text>
      </Box>
    </VStack>
  );
};

export default LoginScreen;
