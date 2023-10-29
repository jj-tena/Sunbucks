import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/colours";

const HomeStyles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    }, header: {
        marginBottom: 5,
        padding: 16,
        alignItems: 'center',
        marginTop: 25
    }, title: {
        fontSize: 26,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 10
    }, subtitle: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400',
        letterSpacing: 1,
        lineHeight: 24
    }
})

export default HomeStyles;