import { COLOURS } from "../../constants/colours";

const ProductCategoryStyles = {
    main: {
        padding: 16
    }, header: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    }, category: {
        fontSize: 18,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1
    }, size: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400',
        opacity: 0.5,
        marginLeft: 10
    }, products: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}

export default ProductCategoryStyles;