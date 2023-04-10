import React from "react";
import { View, SafeAreaView, Text, Pressable, TextInput } from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from "../../styles/auth.styles";
import { COLORS } from "../../constants";

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <View style={{ marginTop: 60, marginBottom: 50 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Having trouble logging in?
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Enter your email address below and we'll send you a link to reset
            your password.
          </Text>
        </View>

        <TextInput
          style={[styles.inputField, { width: "100%" }]}
          placeholder="Email"
        />

        <Pressable style={styles.login}>
          <Text style={styles.loginText}>Send</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
