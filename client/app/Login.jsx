import React from "react";
import { View, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Username" />

      <TextInput placeholder="Password" />

      <Switch value={true} />

      <Switch value={false} />

      <Button title="Login" onPress={() => console.log("Login")} />

      <Button title="Register" onPress={() => console.log("Register")} />

      <Button
        title="Forgot Password"
        onPress={() => console.log("Forgot Password")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
