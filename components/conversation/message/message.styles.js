import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    image: {
        width: 32,
        height: 32,
        borderRadius: 20,
    },
    container: {
        flexDirection: 'column',
        backgroundColor: COLORS.primary, // default own message color (blue) other color is "#8c8b8b" (gray)
        padding: 10,
        borderRadius: 10,
        marginLeft: 'auto',
        maxWidth: '80%',
    },
    name: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    time: {
        color: COLORS.gray2,
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.medium,
    }
});

export default styles;