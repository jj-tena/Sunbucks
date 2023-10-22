import { useNavigation } from "@react-navigation/native";

const useProductCartCard = () => {

    const navigation = useNavigation();

    const deleteProduct = (id: number) => {
        console.log("Product deleted " + id);
    }

    return {navigation, deleteProduct};
}

export default useProductCartCard;