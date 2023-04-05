import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: 50,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    title: {
        fontSize: 24, fontWeight: "bold", marginLeft: 10
    },
    backBtn: {
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
      },
});

export default styles;