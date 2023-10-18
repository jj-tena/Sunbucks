import { COLOURS } from "../../constants/colours";

const ProductCardStyles = {
    main: {
        width: '48%',
        marginVertical: 14
    }, imageContainer: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    }, image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
        borderRadius: 10
    }, name: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 2
    }
}

export default ProductCardStyles;