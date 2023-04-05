import React from "react";
import { View } from "react-native";

import { Searchbar, Favorites, Conversations } from "../../../components";

import { COLORS } from "../../../constants";

const friends = [
  {
    id: "u1",
    me: false,
    name: "Arne",
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
  {
    id: "u3",
    me: false,
    name: "Jeff Bezos",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
  },
  {
    id: "u4",
    me: false,
    name: "Zuck",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg",
  },
  {
    id: "u5",
    me: false,
    name: "Gates",
    imageUri:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg",
  },
];

const FriendsList = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightWhite,
        alignItems: "center",
        height: "100%",
      }}
    >
      <Searchbar />
      <Favorites users={friends} />
      <Conversations friends={friends} />
    </View>
  );
};

export default FriendsList;
