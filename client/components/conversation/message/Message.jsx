import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./message.styles";

const Message = ({ message }) => {
  return message.user.me ? (
    <View style={styles.container}>
      <Text style={[styles.time, { textAlign: "right" }]}>
        {message.createdAt}
      </Text>
      <Text style={[styles.text, { textAlign: "right" }]}>
        {message.content}
      </Text>
    </View>
  ) : (
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: message.user.imageUri }} style={styles.image} />
      <View
        style={[
          styles.container,
          { backgroundColor: "#8c8b8b", marginLeft: 10 },
        ]}
      >
        <Text>
          <Text style={[styles.name, { paddingRight: 10 }]}>
            {message.user.name} -{" "}
          </Text>
          <Text style={styles.time}>{message.createdAt}</Text>
        </Text>
        <Text style={styles.text}>{message.content}</Text>
      </View>
    </View>
  );
};

export default Message;
