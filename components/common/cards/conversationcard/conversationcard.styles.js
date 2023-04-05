import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 10,
        marginBottom: 5,
        marginHorizontal: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        marginLeft: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
    context: {
        fontSize: 12,
        color: "gray",
    }
});

export default styles;