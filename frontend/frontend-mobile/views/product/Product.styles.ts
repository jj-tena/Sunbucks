import { COLOURS } from "../../constants/colours";

const ProductStyles = {
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative'
    }, header1: {
        width: '100%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4
    }, homeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingLeft: 16
    }, home: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.white,
        borderRadius: 10
    }, imageContainer: {
        width: '100%',
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40
    }, image: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 15
    }, bodyContainer: {
        paddingHorizontal: 16,
        marginTop: 6
    }, cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 14,
    }, cartIcon: {
        fontSize: 18,
        color: COLOURS.blue,
        marginRight: 6
    }, cartText: {
        fontSize: 12,
        color: COLOURS.black
    }, detailsContainer: {
        marginVertical: 4,
        alignItems: 'center',
    }, detailsName: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginVertical: 4,
        color: COLOURS.black,
        maxWidth: '84%'
    }, detailsDescription: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '400',
        letterSpacing: 1,
        opacity: 0.5,
        lineHeight: 20,
        maxWidth: '85%',
        maxHeight: 44,
        marginBottom: 18
    }, detailsPrice: {
        fontSize: 18,
        fontWeight: '500',
        maxWidth: '85%',
        color: COLOURS.black,
        marginBottom: 15
    }, buttonContainer: {
        height: '48%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }, buttonTouchable: {
        width: '86%',
        height: '90%',
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }, buttonName: {
        fontSize: 22,
        fontWeight: '500',
        letterSpacing: 1,
        color: COLOURS.white,
        textTransform: 'uppercase'
    }
}

export default ProductStyles;