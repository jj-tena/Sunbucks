import { View, Text, ScrollView, Pressable, Modal, StyleSheet } from "react-native"
import { COLOURS } from "../../constants/colours";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from "../../components/header";
import OrderStyles from "./Order.styles";
import useOrder from "./Order";
import { useState } from "react";
import UserDetailsModal from "../../components/user-details-modal";
import AddressDetailsModal from "../../components/address-details-modal";
import PaymentDetailsModal from "../../components/payment-details-modal";

const Order = () => {

    const {user, total, goCart, checkout, getDataFromUser} = useOrder();

    const [userDetailsModalVisible, setUserDetailsModalVisible] = useState(false);
    const [addressDetailsModalVisible, setAddressDetailsModalVisible] = useState(false);
    const [paymentDetailsModalVisible, setPaymentDetailsModalVisible] = useState(false);

    return (
        <View style={OrderStyles.mainContainer}>
            <Header />
            <ScrollView>
                <View style={OrderStyles.headerContainer}>
                    <Pressable onPress={goCart}>
                        <MaterialCommunityIcons name="chevron-left" style={OrderStyles.backIcon} />
                    </Pressable>
                    <Text style={OrderStyles.headerText}>
                        Datos de compra
                    </Text>
                    <View></View>
                </View>
                <Text style={OrderStyles.subheaderText}>
                    Mis datos
                </Text>
                <View>
                    <View style={OrderStyles.directionHeaderContainer}>
                        <Text style={OrderStyles.directionHeaderText}>
                            Datos de usuario
                        </Text>
                        <View style={OrderStyles.directionBodyContainer}>
                            <View style={OrderStyles.directionBodyDataContainer}>
                                <View style={OrderStyles.directionBodyDataIconContainer}>
                                    <MaterialCommunityIcons 
                                        name="account-outline" 
                                        style={OrderStyles.directionBodyDataIcon}
                                    />
                                </View>
                                <View>
                                    <Text style={OrderStyles.directionBodyDataAddress}>
                                        {user ? user.name : "Nombre"} {user ? user.surnames : "Apellidos"}
                                    </Text>
                                    <Text style={OrderStyles.directionBodyDataCity}>
                                        {user ? user.email : "Dirección de correo"}, {user ? user.phone : "Número de télefono"}
                                    </Text>
                                </View>
                            </View>
                            <UserDetailsModal modalVisible={userDetailsModalVisible} setModalVisible={setUserDetailsModalVisible} refresh={getDataFromUser}/>
                            <MaterialCommunityIcons 
                                name="chevron-right" 
                                style={{
                                    fontSize: 30,
                                    color: COLOURS.black
                                }}
                                onPress={() => setUserDetailsModalVisible(true)}
                            />
                        </View>
                    </View>
                    <View style={OrderStyles.directionHeaderContainer}>
                        <Text style={OrderStyles.directionHeaderText}>
                            Dirección de entrega
                        </Text>
                        <View style={OrderStyles.directionBodyContainer}>
                            <View style={OrderStyles.directionBodyDataContainer}>
                                <View style={OrderStyles.directionBodyDataIconContainer}>
                                    <MaterialCommunityIcons 
                                        name="truck-delivery-outline" 
                                        style={OrderStyles.directionBodyDataIcon}
                                    />
                                </View>
                                <View>
                                    <Text style={OrderStyles.directionBodyDataAddress}>
                                        {user ? user.address : "Dirección"}
                                    </Text>
                                    <Text style={OrderStyles.directionBodyDataCity}>
                                        {user ? user.postalCode : "Código Postal"}, {user ? user.city : "Localidad"}
                                    </Text>
                                </View>
                            </View>
                            <AddressDetailsModal modalVisible={addressDetailsModalVisible} setModalVisible={setAddressDetailsModalVisible} refresh={getDataFromUser}/>
                            <MaterialCommunityIcons 
                                name="chevron-right" 
                                style={{
                                    fontSize: 30,
                                    color: COLOURS.black
                                }}
                                onPress={() => setAddressDetailsModalVisible(true)}
                            />
                        </View>
                    </View>
                    <View style={OrderStyles.paymentHeaderContainer}>
                        <Text style={OrderStyles.paymentHeaderText}>
                            Método de pago
                        </Text>
                        <View style={OrderStyles.paymentBodyContainer}>
                            <View style={OrderStyles.paymentBodyDataContainer}>
                                <View style={OrderStyles.paymentBodyDataIconContainer}>
                                    <MaterialCommunityIcons 
                                        name="credit-card-outline" 
                                        style={OrderStyles.directionBodyDataIcon}
                                    />
                                </View>
                                <View>
                                    <Text style={OrderStyles.paymentBodyDataBank}>
                                        {user ? user.creditCard : "Número de cuenta"}
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: COLOURS.black,
                                        fontWeight: '400',
                                        lineHeight: 20,
                                        opacity: 0.5
                                    }}>
                                        {user ? user.expirationDate : "Fecha de expiración"}
                                    </Text>
                                </View>
                            </View>
                            <PaymentDetailsModal modalVisible={paymentDetailsModalVisible} setModalVisible={setPaymentDetailsModalVisible} refresh={getDataFromUser} />
                            <MaterialCommunityIcons 
                                name="chevron-right" 
                                style={OrderStyles.paymentBodyIcon}
                                onPress={() => setPaymentDetailsModalVisible(true)}
                            />
                        </View>
                    </View>
                    <View style={OrderStyles.resumeHeaderContainer}>
                        <Text style={OrderStyles.resumeHeaderText}>
                            Resumen del pedido
                        </Text>
                        <View style={OrderStyles.resumeSubtotalContainer}>
                            <Text style={OrderStyles.resumeSubtotalText}>
                                Subtotal
                            </Text>
                            <Text style={OrderStyles.resumeSubtotalPrice}>
                                {total}
                            </Text>
                        </View>
                        <View style={OrderStyles.resumeShippingContainer}>
                            <Text style={OrderStyles.resumeShippingText}>
                                Gastos de envío
                            </Text>
                            <Text style={OrderStyles.resumeShippingPrice}>
                                {total ? total / 20 : 1}
                            </Text>
                        </View>
                        <View style={OrderStyles.resumeTotalContainer}>
                            <Text style={OrderStyles.resumeTotalText}>
                                Total
                            </Text>
                            <Text style={OrderStyles.resumeTotalPrice}>
                                {total ? (total + total/20) : 0}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={OrderStyles.buttonContainer}>
                <Pressable 
                    onPress={() => (total != 0 ? checkout() : null)}
                    style={OrderStyles.buttonTouchable}>
                        <Text style={OrderStyles.buttonName}>
                            Confirmar pedido
                        </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Order;