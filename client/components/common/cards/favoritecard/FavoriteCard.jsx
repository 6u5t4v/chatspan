import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./favoritecard.styles";

const FavoriteCard = ({ user }) => {
  // const imageUri = "https://picsum.photos/200";
  return (
    <View>
      <View style={{ alignItems: "center", marginRight: 10 }}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.status} />
    </View>
  );
};

export default FavoriteCard;
