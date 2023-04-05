import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 5,
        borderRadius: 10,
        width: '95%',
        height: 40,
    },
    placeholderText: {
        color: COLORS.gray,
        fontSize: SIZES.body3,
        marginLeft: 10,
    },
});

export default styles;