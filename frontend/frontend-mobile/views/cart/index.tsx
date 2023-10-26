import { View, Text, ScrollView, Pressable } from "react-native"
import { COLOURS } from "../../constants/colours";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import useCart from "./Cart";
import CartStyles from "./Cart.styles";
import ProductCartCard from "../../components/product-cart-card";
import Header from "../../components/header";

const Cart = () => {

    const {cart, total, goHome, checkout, getDataFromCart} = useCart();

    return (
        <View style={CartStyles.mainContainer}>
            <Header />
            <ScrollView>
                <View style={CartStyles.headerContainer}>
                    <Pressable onPress={goHome}>
                        <MaterialCommunityIcons name="chevron-left" style={CartStyles.backIcon} />
                    </Pressable>
                    <Text style={CartStyles.headerText}>
                        Detalles del pedido
                    </Text>
                    <View></View>
                </View>
                <Text style={CartStyles.subheaderText}>
                    Mi pedido
                </Text>
                <View style={CartStyles.productList}>
                    {cart.length>0 ? cart.map((value, index)=> <ProductCartCard key={index} inventory={value} refresh={getDataFromCart}/>) : null}
                </View>
                <View>
                    <View style={CartStyles.directionHeaderContainer}>
                        <Text style={CartStyles.directionHeaderText}>
                            Dirección de entrega
                        </Text>
                        <View style={CartStyles.directionBodyContainer}>
                            <View style={CartStyles.directionBodyDataContainer}>
                                <View style={CartStyles.directionBodyDataIconContainer}>
                                    <MaterialCommunityIcons 
                                        name="truck-delivery-outline" 
                                        style={CartStyles.directionBodyDataIcon}
                                    />
                                </View>
                                <View>
                                    <Text style={CartStyles.directionBodyDataAddress}>
                                        Avd Extremadura 72 A
                                    </Text>
                                    <Text style={CartStyles.directionBodyDataCity}>
                                        06196, Corte de peleas
                                    </Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="chevron-right" style={{
                                fontSize: 22,
                                color: COLOURS.black
                            }}/>
                        </View>
                    </View>
                    <View style={CartStyles.paymentHeaderContainer}>
                        <Text style={CartStyles.paymentHeaderText}>
                            Método de pago
                        </Text>
                        <View style={CartStyles.paymentBodyContainer}>
                            <View style={CartStyles.paymentBodyDataContainer}>
                                <View style={CartStyles.paymentBodyDataIconContainer}>
                                    <Text style={CartStyles.paymentBodyDataIcon}>
                                        VISA
                                    </Text>
                                </View>
                                <View>
                                    <Text style={CartStyles.paymentBodyDataBank}>
                                        Visa Classic
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: COLOURS.black,
                                        fontWeight: '400',
                                        lineHeight: 20,
                                        opacity: 0.5
                                    }}>
                                        ****-9092
                                    </Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons 
                                name="chevron-right" 
                                style={CartStyles.paymentBodyIcon}
                            />
                        </View>
                    </View>
                    <View style={CartStyles.resumeHeaderContainer}>
                        <Text style={CartStyles.resumeHeaderText}>
                            Resumen del pedido
                        </Text>
                        <View style={CartStyles.resumeSubtotalContainer}>
                            <Text style={CartStyles.resumeSubtotalText}>
                                Subtotal
                            </Text>
                            <Text style={CartStyles.resumeSubtotalPrice}>
                                {total}
                            </Text>
                        </View>
                        <View style={CartStyles.resumeShippingContainer}>
                            <Text style={CartStyles.resumeShippingText}>
                                Gastos de envío
                            </Text>
                            <Text style={CartStyles.resumeShippingPrice}>
                                {total ? total / 20 : 1}
                            </Text>
                        </View>
                        <View style={CartStyles.resumeTotalContainer}>
                            <Text style={CartStyles.resumeTotalText}>
                                Total
                            </Text>
                            <Text style={CartStyles.resumeTotalPrice}>
                                {total ? (total + total/20) : 0}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={CartStyles.buttonContainer}>
                <Pressable 
                    onPress={() => (total != 0 ? checkout() : null)}
                    style={CartStyles.buttonTouchable}>
                        <Text style={CartStyles.buttonName}>
                            Confirmar pedido
                        </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart;