import React from "react";
import { FlatList, Text, View } from "react-native";

import { ConversationCard } from "../../../components";

import styles from "./conversations.styles";

const Conversations = ({ friends }) => {
  return (
    <View
      style={styles.container}
    >
      <FlatList
        style={{ width: "100%" }}
        data={friends}
        renderItem={(item) => {
          return <ConversationCard user={item.item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Conversations;
