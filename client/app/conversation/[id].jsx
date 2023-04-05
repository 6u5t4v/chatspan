import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import { Header, MessageHistory } from "../../components";

const users = [
  {
    id: "u1",
    me: true,
    name: "Vadim",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  },
  {
    id: "u2",
    me: false,
    name: "Elon Musk",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
  },
];

const conversation = [
  {
    id: "1",
    content: "Hello world! This is a long message that needs to be truncated",
    createdAt: "2020-10-03T14:48:00.000Z",
    user: users[0],
  },
  {
    id: "2",
    content: "I am Elon Musk",
    createdAt: "2020-10-03T15:40:00.000Z",
    user: users[1],
  },
  {
    id: "3",
    content: "Omg you are so cool, jk I am cooler",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[0],
  },
  {
    id: "4",
    content: "Ohahahaha get trolled biiitch",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[1],
  },
  {
    id: "5",
    content:
      "i very very long message written by the other member of this conversation that needs to be truncated",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[1],
  },
  {
    id: "6",
    content:
      "goofy aah mf bruh moment lmao xD xD xD a very very very long funny message that needs to be truncated",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[0],
  },
  {
    id: "7",
    content: "short",
    createdAt: "2020-10-04T14:48:00.000Z",
    user: users[0],
  },
];

export default function App() {
  // Fetch the conversation from the backend
  // Fetch the messages from the backend

  return (
    <SafeAreaView style={styles.container}>
      <Header conversation={users[1]}  />

      <MessageHistory users={users} conversation={conversation} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "100%",
  },
});
