import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";

const SignUpButton = () => {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <Text>Don't have an account?</Text>
      <Text
        style={{ color: COLORS.primary, fontWeight: "bold" }}
        onPress={() => {
          router.push("/auth/signup");
        }}
      >
        {" "}
        Sign up
      </Text>
    </View>
  );
};

export default SignUpButton;

const styles = StyleSheet.create({});
