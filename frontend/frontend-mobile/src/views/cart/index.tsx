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
            </ScrollView>
            <View style={CartStyles.buttonContainer}>
                <Pressable 
                    onPress={() => (total != 0 ? checkout() : null)}
                    style={CartStyles.buttonTouchable}>
                        <Text style={CartStyles.buttonName}>
                            Proceder al pago
                        </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart;