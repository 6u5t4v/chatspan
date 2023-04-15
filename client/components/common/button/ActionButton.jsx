import React from "react";
import { Pressable , Text} from "react-native";

import styles from "./actionbutton.styles";

const ActionButton = ({ action, Icon, text, btnStyle, txtStyle }) => {
  return (
    <Pressable style={[btnStyle, styles.button]} onPress={action}>
      {Icon && <Icon />}
      {text && <Text style={txtStyle}>{text}</Text>}
    </Pressable>
  );
};

export default ActionButton;
