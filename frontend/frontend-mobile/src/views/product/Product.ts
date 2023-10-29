import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TProduct } from "../../constants/types";
import useCartStorage from "../../storage/cart-storage";

const useProduct = (product: TProduct) => {

    const {addProduct} = useCartStorage();

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