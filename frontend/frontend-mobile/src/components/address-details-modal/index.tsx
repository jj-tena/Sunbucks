import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import AddressDetailsModalStyles from "./AddressDetailsModal.styles";
import useAddressDetailsModal from "./AddressDetailsModal";

interface OrderProps {
    modalVisible: boolean;
    setModalVisible: (modalVisible: boolean) => void;
    refresh: () => Promise<void>
}

const AddressDetailsModal = ({modalVisible, setModalVisible, refresh}: OrderProps) => {

    const {address, setAddress, postalCode, setPostalCode, city, setCity, saveDetails} = useAddressDetailsModal(refresh);

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
        }}>
            <View style={AddressDetailsModalStyles.centeredView}>
                <View style={AddressDetailsModalStyles.modalView}>
                    <Text style={AddressDetailsModalStyles.title}>Datos de usuario</Text>
                    <SafeAreaView>
                        <Text style={AddressDetailsModalStyles.textInput}>Dirección</Text>
                        <TextInput
                            style={AddressDetailsModalStyles.input}
                            onChangeText={setAddress}
                            value={address}
                            placeholder="Introduce tu dirección"
                            inputMode="none"
                        />
                        <Text style={AddressDetailsModalStyles.textInput}>Código Postal</Text>
                        <TextInput
                            style={AddressDetailsModalStyles.input}
                            onChangeText={setPostalCode}
                            value={postalCode}
                            placeholder="Introduce tu código postal"
                            inputMode="numeric"
                        />
                        <Text style={AddressDetailsModalStyles.textInput}>Localidad</Text>
                        <TextInput
                            style={AddressDetailsModalStyles.input}
                            onChangeText={setCity}
                            value={city}
                            placeholder="Introduce tu localidad"
                            inputMode="none"
                        />
                    </SafeAreaView>
                    <View style={AddressDetailsModalStyles.buttonContainer}
                    >
                        <Pressable
                            style={AddressDetailsModalStyles.saveButton}
                            onPress={() => {saveDetails(); setModalVisible(!modalVisible);}}
                        >
                            <Text style={AddressDetailsModalStyles.buttonText}>Guardar</Text>
                        </Pressable>
                        <Pressable
                            style={AddressDetailsModalStyles.discardButton}
                            onPress={() => {setModalVisible(!modalVisible);}}
                        >
                            <Text style={AddressDetailsModalStyles.buttonText}>Descartar</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
}

export default AddressDetailsModal;