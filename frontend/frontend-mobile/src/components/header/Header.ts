import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const useHeader = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const goHome = () => {
        navigation.navigate("Home");
    }

    const goCart = () => {
        navigation.navigate("Cart");
    }

    return {goHome, goCart};
}

export default useHeader;