import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Text, VStack, Image, Button, Spinner } from "native-base";
import React from "react";
import { RootStackParamList } from "../types";

const LandingScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Landing">>();
  return (
    <VStack flex={1}>
      <Image
        w="100%"
        h="68%"
        source={require("../assets/images/landing.jpg")}
        alt="landing pic"
      />
      <Box mt={5} ml={5}>
        <Text fontSize="3xl" fontWeight="bold">
          Find your best
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          rental space
        </Text>

        <Text mt={5} fontSize="lg" color="gray.500">
          Join now and lets find you
        </Text>
        <Text fontSize="lg" color="gray.500">
          a new rental space
        </Text>
      </Box>
      <Box d="flex" flexDirection="row" justifyContent="flex-end" mt={5} mr={5}>
        <Button
          bg="black"
          size="sm"
          borderRadius={50}
          //TODO: change back to replace later
          onPress={() => navigation.navigate("Root")}
        >
          <Spinner color="white" size="sm" />
        </Button>
      </Box>
    </VStack>
  );
};

export default LandingScreen;
