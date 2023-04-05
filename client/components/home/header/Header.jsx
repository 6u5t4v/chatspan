import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import { COLORS, SIZES } from "../../../constants";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Hamburger menu button */}
      <Pressable style={styles.button} onPress={() => alert("New message")}>
        <Entypo name="menu" size={24} color={COLORS.primary} />
      </Pressable>
      <Text style={styles.title}>Friends</Text>
      {/* New conversations button */}
      <Pressable style={styles.button} onPress={() => alert("Open side menu")}>
        <Entypo name="new-message" size={24} color={COLORS.primary} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
  },
  button: {
    padding: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
