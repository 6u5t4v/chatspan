import React, { useEffect, useState } from "react";
import { FlatList, Text, Image, View } from "react-native";

import styles from "./favorites.styles";
import FavoriteCard from "../../common/cards/favoritecard/FavoriteCard";

const Favorites = ({ users }) => {
  const [favorites, setFavorites] = useState(users);

  useEffect(() => {
    setFavorites((favs) => favs);
  }, []);

  // console.log(users);
  return (
    <View style={{ flexDirection: "row", marginVertical: 10 }}>
      <FlatList
        style={{ marginHorizontal: 10 }}
        data={users}
        renderItem={(item) => {
          return <FavoriteCard user={item.item} />;
        }}
        horizontal
        keyExtractor={(user) => user.id}
      />
    </View>
  );
};

export default Favorites;
