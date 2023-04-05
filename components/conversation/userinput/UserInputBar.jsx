import React, { useState } from "react";

import { View, TextInput, Pressable } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles from "./userinputbar.styles";
import ActionButton from "../../common/button/ActionButton";

const UserInputBar = ({ onSend }) => {
  const [text, onChangeText] = useState("");

  const sendMessage = () => {
    // Send the message to the backend
    onSend(text);

    onChangeText("");
  };

  return (
    <View style={styles.container}>
      {/* Button that opens camera roll */}
      <ActionButton
        action={() => alert("Open camera roll")}
        icon="camera"
        iconSize={18}
        color="#25292e"
      />

      {/* TextInput with a bottom to select an emoji */}
      <View style={styles.messageContainer}>
        <TextInput
          autoFocus
          maxLength={250}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Send a message"
        />

        <Pressable onPress={() => alert("Open emoji picker")}>
          <MaterialIcons name="emoji-emotions" size={24} />
        </Pressable>
      </View>

      {/* Send bottom */}
      <Pressable style={styles.button} onPress={sendMessage}>
        <Ionicons name="send" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default UserInputBar;
