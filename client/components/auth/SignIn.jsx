import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { useRouter, Stack } from "expo-router";

import { COLORS } from "../../constants";

import authStyles from "../../styles/auth.styles";

import { AuthContext } from "../../context/AuthContext";
import { AxiosContext } from "../../context/AxiosContext";

import * as SecureStore from "expo-secure-store";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);
  const { publicAxios } = useContext(AxiosContext);

  const onLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).catch((err) => {
        console.log("what is error");
      });

      // const response = await publicAxios.post("/login", {
      //   email,
      //   password,
      // });

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
      console.log("bitch");
      alert("Login Failed", error.response.data.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      {/* Should be a logo, but I dont have one atm */}
      <Text style={styles.title}>ChatSpan</Text>

      <View style={{ width: "90%" }}>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            style={authStyles.inputField}
            placeholder="Username or Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            secureTextEntry={true}
            onChangeText={setPassword}
            style={authStyles.inputField}
            value={password}
            placeholder="Password"
          />
        </View>

        <Text
          style={styles.forgotPassword}
          onPress={() => {
            console.log("Forgot password");
            // router.push("/auth/ForgotPassword");
          }}
        >
          Forgot password?
        </Text>

        {/* Darken button if both fields are not filled out */}
        <Pressable style={authStyles.login} onPress={onLogin}>
          <Text style={authStyles.loginText}>Login</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Don't have an account?</Text>
        <Text
          style={{ color: COLORS.primary, fontWeight: "bold" }}
          onPress={() => {
            router.push("/auth/SignUp");
          }}
        >
          {" "}
          Sign up
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },
  inputContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-between",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 20,
    color: COLORS.primary,
    fontWeight: "bold",
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
