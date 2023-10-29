import { useNavigation } from "@react-navigation/native";
import useStorage from "../../storage/cart-storage";
import { useEffect } from "react";

const useProductCartCard = (refresh: () => {}) => {

    const {removeProduct, increaseUnits, decreaseUnits} = useStorage();

    const removeRefresh = async (productId: number) => {
        await removeProduct(productId);
        refresh();
    }

    const increaseRefresh = async (productId: number) => {
        await increaseUnits(productId);
        refresh();
    }

    const decreaseRefresh = async (productId: number) => {
        await decreaseUnits(productId);
        refresh();
    }

    const navigation = useNavigation();

    return {navigation, removeRefresh, increaseRefresh, decreaseRefresh};
}

export default useProductCartCard;