import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Text, VStack, Button, View, Input } from "native-base";
import React from "react";
import { Formik } from "formik";

import { AuthStackParamList } from "../types";
import { SignUpSchemaValidation } from "../helpers/validation";
import Colors from "../constants/Colors";

export interface LoginForm {
  email: string;
  password: string;
}

const SignUpScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "TabSignUp">>();
  return (
    <VStack flex={1} justifyContent="space-evenly" mt={5} mx={10}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Sign Up
        </Text>
      </Box>
      <Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={SignUpSchemaValidation}
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
                _focus={{ borderColor: "info.500" }}
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
                _focus={{ borderColor: "info.500" }}
                mt={10}
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
              <Input
                _focus={{ borderColor: "info.500" }}
                mt={10}
                value={values.passwordConfirmation}
                onChangeText={handleChange("passwordConfirmation")}
                placeholder="Confirm password"
                onBlur={() => setFieldTouched("passwordConfirmation")}
                secureTextEntry={true}
                isInvalid={touched.email && !!errors.email}
              />
              {touched.passwordConfirmation && errors.passwordConfirmation && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.passwordConfirmation}
                </Text>
              )}
              <Button
                mt={10}
                color="#3740FE"
                disabled={!isValid}
                onPress={() => handleSubmit}
              >
                Sign Up
              </Button>
            </View>
          )}
        </Formik>
      </Box>
      <Box justifyContent="center" flexDirection="row">
        <Text fontSize="md">I'm already a member</Text>

        <Text
          fontSize="md"
          fontWeight={500}
          color="info.500"
          onPress={() => navigation.replace("TabLogin")}
        >
          {" "}
          Sign In
        </Text>
      </Box>
    </VStack>
  );
};

export default SignUpScreen;
