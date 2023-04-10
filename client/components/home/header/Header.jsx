import { Pressable, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { COLORS } from "../../../constants";

import styles from "./header.styles"; 

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
