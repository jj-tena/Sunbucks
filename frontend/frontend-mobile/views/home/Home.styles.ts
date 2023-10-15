import { COLOURS } from "../../constants/colours";

const HomeStyles = {
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    }, header1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    }, shoppingBag: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight
    }, cart: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: COLOURS.backgroundLight
    }, header2: {
        marginBottom: 10,
        padding: 16,
        alignItems: 'center',
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
}

export default HomeStyles;