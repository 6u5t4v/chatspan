import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../../constants";

import { ActionButton } from "../../components";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}
              >
                Back
              </Text>
            </Pressable>
          ),
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

        <ActionButton
          btnStyle={styles.login}
          txtStyle={{
            color: "white",
            fontSize: 18,
          }}
          action={() => {
            console.log("Send");
          }}
          text="Send"
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  login: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
  inputField: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    fontSize: 16,
  },
});
