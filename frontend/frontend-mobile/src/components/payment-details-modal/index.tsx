import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import PaymentDetailsModalStyles from "./PaymentDetailsModal.styles";
import useAddressDetailsModal from "./PaymentDetailsModal";
import usePaymentDetailsModal from "./PaymentDetailsModal";

interface OrderProps {
    modalVisible: boolean;
    setModalVisible: (modalVisible: boolean) => void;
    refresh: () => Promise<void>
}

const PaymentDetailsModal = ({modalVisible, setModalVisible, refresh}: OrderProps) => {

    const {creditCard, setCreditCard, expirationDate, setExpirationDate, cvv, setCvv, saveDetails} = usePaymentDetailsModal(refresh);

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
        }}>
            <View style={PaymentDetailsModalStyles.centeredView}>
                <View style={PaymentDetailsModalStyles.modalView}>
                    <Text style={PaymentDetailsModalStyles.title}>Datos de usuario</Text>
                    <SafeAreaView>
                        <Text style={PaymentDetailsModalStyles.textInput}>Número de cuenta</Text>
                        <TextInput
                            style={PaymentDetailsModalStyles.input}
                            onChangeText={setCreditCard}
                            value={creditCard}
                            placeholder="Introduce tu número de cuenta"
                            inputMode="numeric"
                        />
                        <Text style={PaymentDetailsModalStyles.textInput}>Fecha de expiración</Text>
                        <TextInput
                            style={PaymentDetailsModalStyles.input}
                            onChangeText={setExpirationDate}
                            value={expirationDate}
                            placeholder="Introduce la fecha de expiración"
                            inputMode="none"
                        />
                        <Text style={PaymentDetailsModalStyles.textInput}>CVV</Text>
                        <TextInput
                            style={PaymentDetailsModalStyles.input}
                            onChangeText={setCvv}
                            value={cvv}
                            placeholder="Introduce tu código CVV"
                            inputMode="numeric"
                        />
                    </SafeAreaView>
                    <View style={PaymentDetailsModalStyles.buttonContainer}
                    >
                        <Pressable
                            style={PaymentDetailsModalStyles.saveButton}
                            onPress={() => {saveDetails(); setModalVisible(!modalVisible);}}
                        >
                            <Text style={PaymentDetailsModalStyles.buttonText}>Guardar</Text>
                        </Pressable>
                        <Pressable
                            style={PaymentDetailsModalStyles.discardButton}
                            onPress={() => {setModalVisible(!modalVisible);}}
                        >
                            <Text style={PaymentDetailsModalStyles.buttonText}>Descartar</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
}

export default PaymentDetailsModal;