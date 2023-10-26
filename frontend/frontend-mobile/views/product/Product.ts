import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TProduct } from "../../constants/types";
import useStorage from "../../hooks/storage";

const useProduct = (product: TProduct) => {

    const {addProduct} = useStorage();

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const goHome = () => {
        navigation.navigate('Home');
    }

    const addToCart = async () => {
        addProduct(product);
        goHome();
    }

    return {addToCart, goHome};
}

export default useProduct;