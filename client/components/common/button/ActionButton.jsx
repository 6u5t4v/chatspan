import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./actionbutton.styles";

const ActionButton = ({ action, icon, iconSize, color }) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <FontAwesome name={icon} size={iconSize} color={color} />
    </Pressable>
  );
};

export default ActionButton;
