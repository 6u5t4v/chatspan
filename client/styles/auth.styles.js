import { StyleSheet } from "react-native";

import { COLORS } from "../constants";

export default StyleSheet.create({
    inputField: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10,
        borderColor: COLORS.secondary,
        borderWidth: 1,
        fontSize: 16,
    },
    login: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        width: "100%",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    loginText: {
        color: "white",
        fontSize: 18,
    },
});

