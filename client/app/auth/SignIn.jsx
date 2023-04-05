import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";

import { COLORS } from "../../constants";

import authStyles from "../../styles/auth.styles";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate username and password
    // If valid, navigate to home screen

    router.replace("/home");
  };

  const validateUsername = (username) => {
    // Validate username
    if (!username.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      if (username.length > 20) {
        alert("Username must be less than 20 characters long");
        return;
      }
    }

    if (username.length < 3) {
      alert("Username must be at least 3 characters long");
      return;
    }

    return true;
  };

  return (
    <View style={styles.container}>
      {/* Should be a logo, but I dont have one atm */}
      <Text style={styles.title}>ChatSpan</Text>

      <View style={{ width: "90%" }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={authStyles.inputField}
            placeholder="Username or Email"
            onChangeText={setUsername}
          />
          <TextInput
            secureTextEntry={true}
            onChangeText={setPassword}
            style={authStyles.inputField}
            placeholder="Password"
          />
        </View>

        <Text
          style={styles.forgotPassword}
          onPress={() => {
            router.push("/auth/ForgotPassword");
          }}
        >
          Forgot password?
        </Text>

        {/* Darken button if both fields are not filled out */}
        <Pressable style={authStyles.login}>
          <Text style={authStyles.loginText}>Login</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Don't have an account?</Text>
        <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
          {" "}
          Sign up
        </Text>
      </View>
    </View>
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
