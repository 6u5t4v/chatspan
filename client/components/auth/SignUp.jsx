import React from "react";
import { useForm, useController } from "react-hook-form";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";

import { COLORS } from "../../constants";

const InputField = ({ placeholder, isPassword, isEmail, control }) => {
  const { field } = useController({
    name: placeholder,
    control,
    rules: {
      required: true,
      pattern: isEmail ? /^\S+@\S+$/i : undefined,
    },
  });

  return (
    <TextInput
      secureTextEntry={isPassword}
      keyboardType={isEmail ? "email-address" : "default"}
      style={[styles.inputField, { width: "100%" }]}
      placeholder={placeholder}
      value={field.value}
      onchangeText={field.onChange}
    />
  );
};

const SignUp = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={[styles.inputContainer, { width: "90%" }]}>
          <View>
            <InputField placeholder="Name" control={control} />
            <InputField placeholder="Username" control={control} />
            <InputField placeholder="Email" isEmail control={control} />
            <InputField placeholder="Password" isPassword control={control} />
          </View>
          <Pressable
            style={styles.login}
            onPress={() => {
              handleSubmit(onSubmit);
            }}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </Pressable>
        </View>
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
    backgroundColor: COLORS.lightWhite,
  },
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
    marginBottom: 10,
  },
  login: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 18,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    fontStyle: "italic",
    color: COLORS.secondary,
    position: "absolute",
    top: 100,
  },
});
