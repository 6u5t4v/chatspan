import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Message from "../message/Message";

import styles from "./messagehistory.styles";
import UserInputBar from "../userinput/UserInputBar";

const MessageHistory = ({ users, conversation }) => {
  const [messages, setMessages] = useState(conversation);

  useEffect(() => {
    setMessages((msgs) => msgs);
  }, []);

  const onSendPress = (user) => {
    // Send the message to the backend
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        content: text,
        createdAt: new Date().toISOString(),
        user: user,
      },
    ]);
  };

  return (
    <>
      <FlatList
        style={{ marginHorizontal: 10 }}
        data={messages}
        renderItem={(item) => {
          const prevItem = messages[item.index - 1];

          const space =
            prevItem && prevItem.user.id === item.item.user.id ? 2 : 10;
          return (
            <>
              <View style={{ marginTop: { space } }} />
              <Message message={item.item} />
            </>
          );
        }}
        keyExtractor={(item) => item.id}
      />

      <UserInputBar onSend={onSendPress(users[0])} />
    </>
  );
};

export default MessageHistory;
