import React from "react";
import { Text, View } from "react-native";

import styles from "./searchbar.styles";

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}>Searchbar</Text>
    </View>
  );
};

export default Searchbar;