import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import UserDetailsModalStyles from "./UserDetailsModal.styles";
import useUserDetailsModal from "./UserDetailsModal";

interface OrderProps {
    modalVisible: boolean;
    setModalVisible: (modalVisible: boolean) => void;
    refresh: () => Promise<void>
}

const UserDetailsModal = ({modalVisible, setModalVisible, refresh}: OrderProps) => {

    const {name, setName, surnames, setSurnames, email, setEmail, phone, setPhone, saveDetails} = useUserDetailsModal(refresh);

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
        }}>
            <View style={UserDetailsModalStyles.centeredView}>
                <View style={UserDetailsModalStyles.modalView}>
                    <Text style={UserDetailsModalStyles.title}>Datos de usuario</Text>
                    <SafeAreaView>
                        <Text style={UserDetailsModalStyles.textInput}>Nombre</Text>
                        <TextInput
                            style={UserDetailsModalStyles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="Introduce tu nombre"
                            inputMode="text"
                        />
                        <Text style={UserDetailsModalStyles.textInput}>Apellidos</Text>
                        <TextInput
                            style={UserDetailsModalStyles.input}
                            onChangeText={setSurnames}
                            value={surnames}
                            placeholder="Introduce tus apellidos"
                            inputMode="text"
                        />
                        <Text style={UserDetailsModalStyles.textInput}>Correo electrónico</Text>
                        <TextInput
                            style={UserDetailsModalStyles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Introduce tu correo"
                            inputMode="email"
                        />
                        <Text style={UserDetailsModalStyles.textInput}>Número de telefono</Text>
                        <TextInput
                            style={UserDetailsModalStyles.input}
                            onChangeText={setPhone}
                            value={phone}
                            placeholder="Introduce tu número"
                            inputMode="numeric"
                        />
                    </SafeAreaView>
                    <View style={UserDetailsModalStyles.buttonContainer}
                    >
                        <Pressable
                            style={UserDetailsModalStyles.saveButton}
                            onPress={() => {saveDetails(); setModalVisible(!modalVisible);}}
                        >
                            <Text style={UserDetailsModalStyles.buttonText}>Guardar</Text>
                        </Pressable>
                        <Pressable
                            style={UserDetailsModalStyles.discardButton}
                            onPress={() => {setModalVisible(!modalVisible);}}
                        >
                            <Text style={UserDetailsModalStyles.buttonText}>Cancelar</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
}

export default UserDetailsModal;