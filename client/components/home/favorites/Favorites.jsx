import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import FavoriteCard from "../../common/cards/favoritecard/FavoriteCard";

const Favorites = ({ users }) => {
  const [favorites, setFavorites] = useState(users);

  useEffect(() => {
    setFavorites((favs) => favs);
  }, []);

  return (
    <View style={{ flexDirection: "row", marginVertical: 10 }}>
      <FlatList
        style={{ marginHorizontal: 10 }}
        data={favorites}
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
