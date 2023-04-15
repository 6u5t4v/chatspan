import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";

const SignInButton = () => {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <Text>Already have an account?</Text>
      <Text
        style={{ color: COLORS.primary, fontWeight: "bold" }}
        onPress={() => {
          router.push("/auth/signin/signin");
        }}
      >
        {" "}
        Sign in
      </Text>
    </View>
  );
};

export default SignInButton;

const styles = StyleSheet.create({});
