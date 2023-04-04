import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./header.styles";

const Header = ({ conversation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backBtn} onPress={() => alert("Go back")}>
        <FontAwesome name="angle-left" size={32} color="#25292e" />
      </Pressable>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: conversation.imageUri }} style={styles.image} />
        <Text style={styles.title}>{conversation.name}</Text>
      </View>
    </View>
  );
};

export default Header;
