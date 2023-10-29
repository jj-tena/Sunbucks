import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/colours";

const OrderStyles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative'
    }, headerContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems:'center'
    }, backIcon: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 12
    }, headerText: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400'
    }, subheaderText: {
        fontSize: 20,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        paddingTop: 20,
        paddingLeft: 16,
        marginBottom: 20
    }, productList: {
        paddingHorizontal: 16
    }, directionHeaderContainer: {
        paddingHorizontal: 16,
        marginVertical: 10
    }, directionHeaderText: {
        fontSize: 16,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 20,
    }, directionBodyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, directionBodyDataContainer: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center'
    }, directionBodyDataIconContainer: {
        backgroundColor: COLOURS.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 10,
        marginRight: 18
    }, directionBodyDataIcon: {
        fontSize: 18,
        color: COLOURS.blue
    }, directionBodyDataAddress: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '500'
    }, directionBodyDataCity: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '400',
        lineHeight: 20,
        opacity: 0.5
    }, directionBodyIcon: {
        fontSize: 22,
        color: COLOURS.black
    }, paymentHeaderContainer: {
        paddingHorizontal: 16,
        marginVertical: 10
    }, paymentHeaderText: {
        fontSize: 16,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 20,
    }, paymentBodyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, paymentBodyDataContainer: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center'
    }, paymentBodyDataIconContainer: {
        backgroundColor: COLOURS.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 10,
        marginRight: 18
    }, paymentBodyDataIcon: {
        fontSize: 10,
        fontWeight: '900',
        color: COLOURS.blue,
        letterSpacing: 1 
    }, paymentBodyDataBank: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '500'
    }, paymentBodyDataNumber: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '400',
        lineHeight: 20,
        opacity: 0.5
    }, paymentBodyIcon: {
        fontSize: 22,
        color: COLOURS.black
    }, resumeHeaderContainer: {
        paddingHorizontal: 16,
        marginTop: 40,
        marginBottom: 80
    }, resumeHeaderText: {
        fontSize: 16,
        color:COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 20
    }, resumeSubtotalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     }, resumeSubtotalText: {
        fontSize: 12,
        fontWeight: '400',
        maxWidth: '80%',
        color: COLOURS.black,
        opacity: 0.5
    }, resumeSubtotalPrice: {
        fontSize: 12,
        fontWeight: '400',
        color: COLOURS.black,
        opacity: 0.8
    }, resumeShippingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22
    }, resumeShippingText: {
        fontSize: 12,
        fontWeight: '400',
        maxWidth: '80%',
        color: COLOURS.black,
        opacity: 0.5
    }, resumeShippingPrice: {
        fontSize: 12,
        fontWeight: '400',
        color: COLOURS.black,
        opacity: 0.8
    }, resumeTotalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, resumeTotalText: {
        fontSize: 12,
        fontWeight: '400',
        maxWidth: '80%',
        color: COLOURS.black,
        opacity: 0.5
    }, resumeTotalPrice: {
        fontSize: 18,
        fontWeight: '500',
        color: COLOURS.black,
    }, buttonContainer: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }, buttonTouchable: {
        width: '86%',
        height: '60%',
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
})

export default OrderStyles;