import { COLOURS } from "../../constants/colours";

const ProductCartCardStyles = {
    main: {
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center'
    }, imageContainer: {
        width: '30%',
        height: 100,
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 10,
        marginRight: 22
    }, image: {
        width: '100%',
        height: '100%',
    }, detailsContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-around'
    }, detailsName: {
        fontSize: 14,
        maxWidth: '100%',
        color: COLOURS.black,
        fontWeight: '600',
        letterSpacing: 1
    }, detailsPriceContainer: {
        marginTop: 4,
        opacity: 0.6
    }, detailsPrice: {
        fontSize: 14,
        fontWeight: '400',
        maxWidth: '85%',
        marginRight: 4
    }, actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, actionsUnitsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }, actionsUnitsLessContainer: {
        borderRadius: 100,
        marginRight: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opacity: 0.5,
    }, actionsUnitsLessIcon: {
        fontSize: 30,
        color: COLOURS.backgroundDark,
    }, actionsUnitsMoreContainer: {
        borderRadius: 100,
        marginLeft: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opacity: 0.5
    }, actionsUnitsMoreIcon: {
        fontSize: 30,
        color: COLOURS.backgroundDark
    }, actionsDeleteIcon: {
        fontSize: 30,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLight,
        padding: 8,
        borderRadius: 100,
    }
}

export default ProductCartCardStyles;