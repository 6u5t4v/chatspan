import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    status: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'limegreen',
        position: 'absolute',
        bottom: 20,
        right: 10,
    }
});

export default styles;