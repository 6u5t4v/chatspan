import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Stack } from "expo-router";

import { SignInForm, SignUpButton } from "../../../components";
import { COLORS } from "../../../constants";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      {/* Should be a logo, but I dont have one atm */}
      <Text style={styles.title}>ChatSpan</Text>

      <View style={{ width: "90%" }}>
        <SignInForm />

        <SignUpButton />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },

  title: {
    fontSize: 48,
    fontWeight: "bold",
    fontStyle: "italic",
    color: COLORS.secondary,
    position: "absolute",
    top: 50,
  },
});
