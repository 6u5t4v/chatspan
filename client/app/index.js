import React, { } from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter } from 'expo-router';


import { HomeHeader, FriendsList } from "../components";
import SignIn from "./auth/SignIn";

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
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container} >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: ""
        }}
      />
      {/* <HomeHeader />
      <FriendsList /> */}
      <SignIn />
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
