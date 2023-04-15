import { StyleSheet, View, TextInput, Text } from "react-native";
import React, { useState, useContext } from "react";
import { useRouter } from "expo-router";

import { AuthContext } from "../../../context/AuthContext";
import { AxiosContext } from "../../../context/AxiosContext";

import * as SecureStore from "expo-secure-store";

import { ActionButton } from "../../../components";

import { COLORS } from "../../../constants";

const SignInForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);
  const { publicAxios } = useContext(AxiosContext);

  const onLogin = async () => {
    try {
      const response = await publicAxios.post("/login", {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;
      authContext.setAuthState({
        accessToken,
        refreshToken,
        authenticated: true,
      });

      await SecureStore.setItemAsync(
        "token",
        JSON.stringify({
          accessToken,
          refreshToken,
        })
      );
    } catch (error) {
      alert("Login Failed", error.response.data.message);
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.inputField}
          placeholder="Username or Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.inputField}
          value={password}
          placeholder="Password"
        />
      </View>

      <Text
        style={styles.forgotPassword}
        onPress={() => {
          console.log("Forgot password");
          router.push("/auth/forgotpassword");
        }}
      >
        Forgot password?
      </Text>

      {/* Darken button if both fields are not filled out */}
      <ActionButton
        btnStyle={styles.login}
        txtStyle={{
          color: "white",
          fontSize: 18,
        }}
        action={onLogin}
        text="Login"
      />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-between",
  },
  inputField: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 20,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  login: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
});
