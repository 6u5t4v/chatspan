import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import { COLORS } from "../../constants";

import { SignUpForm, SignInButton } from "../../components";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <SignUpForm />
        <SignInButton />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
