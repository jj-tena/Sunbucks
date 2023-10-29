import { StyleSheet } from "react-native";
import { COLOURS } from "../../constants/colours";

const AddressDetailsModalStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
      width: '90%',
      margin: 0,
      backgroundColor: COLOURS.yellow,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      elevation: 5,
    },
    buttonContainer: {
      flexDirection:'row',
      marginTop: 30
    },
    saveButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: COLOURS.blue,
      width: 100,
      marginHorizontal: 10
    },
    discardButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: COLOURS.red,
      width: 100,
      marginHorizontal: 10
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    title: {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 25
    },
    textInput: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 18

    },
    input: {
        height: 40,
        marginBottom: 15,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
        opacity: 0.6,
        backgroundColor: COLOURS.white
    }, closeIcon: {
      fontSize: 50,
      color: COLOURS.red,
      marginBottom: 20
    }
});

export default AddressDetailsModalStyles