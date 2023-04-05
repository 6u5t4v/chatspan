import React from "react";
import { Image, View, Text } from "react-native";

import styles from "./conversationcard.styles";

const ConversationCard = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.context}>You: i said something dumb</Text>
      </View>
    </View>
  );
};

export default ConversationCard;
