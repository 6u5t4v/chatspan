import { Pressable, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { COLORS } from "../../../constants";

import styles from "./header.styles";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Hamburger menu button */}
      <Pressable style={styles.button} onPress={() => alert("Open side menu")}>
        <Entypo name="menu" size={24} color={COLORS.primary} />
      </Pressable>
      <Text style={styles.title}>Friends</Text>
      {/* New conversations button */}
      <Pressable style={styles.button} onPress={() => alert("New message")}>
        <Entypo name="new-message" size={24} color={COLORS.primary} />
      </Pressable>
    </View>
  );
};

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 250, backgroundColor: "#d2d2d2", opacity: 0.9 }}>
        <View
          style={{
            height: 200,
            backgroundColor: "Green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/icon.png")}
            style={{ height: 150, width: 150, borderRadius: 60 }}
          />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "Green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>John Doe</Text>
        </View>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "center", bottom: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", marginRight: 15 }}>
            <Icon
              name="flask"
              style={{ fontSize: 24 }}
              onPress={() => console.log("Tıkladın")}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Icon
              name="call"
              style={{ fontSize: 24 }}
              onPress={() => console.log("Tıkladın")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
