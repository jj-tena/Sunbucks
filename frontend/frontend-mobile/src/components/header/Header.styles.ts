import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/colours";

const HeaderStyles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: COLOURS.brown
    }, shoppingBag: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight
    }, logo: {
        width: '20%',
        height: '100%',
    }, cart: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: COLOURS.backgroundLight
    }
})

export default HeaderStyles;