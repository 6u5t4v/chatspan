import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { Stack } from "expo-router";

import { HomeHeader, Searchbar, Favorites, Conversations } from "../../components";
import { COLORS } from "../../constants";
import Header from "../../components/home/header/Header";

const friends = [
  {
    id: "u1",
    name: "Arne",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
  },
  {
    id: "u2",
    name: "Elon Musk",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
  },
  {
    id: "u3",
    name: "Jeff Bezos",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
  },
  {
    id: "u4",
    name: "Zuck",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg",
  },
  {
    id: "u5",
    name: "Gates",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <HomeHeader />
      <Searchbar />
      <Favorites users={friends} />

      <Conversations friends={friends} />

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    height: "100%",
  }
});
