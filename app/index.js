import React, { } from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { HomeHeader, FriendsList } from "../components";

import { COLORS } from "../constants";

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

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <HomeHeader />
      <FriendsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: COLORS.white,
    width: "100%",
  },
});
