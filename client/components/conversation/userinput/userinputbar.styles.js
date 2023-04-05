import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: "#f2f4f5",
        position: "absolute",
        bottom: 0,
    },
    button: {
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        width: "100%",
        marginRight: 12,
        flex: 1,
        color: "#f2f4f5"
    },
    messageContainer: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: "row",
        paddingRight: 10,
        paddingLeft: 15,
        backgroundColor: "#bdbebf",
        borderRadius: 20,
        justifyContent: "space-between",
        alignItems: "center",
      },
});

export default styles;