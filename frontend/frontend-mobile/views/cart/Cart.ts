import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Products } from "../../constants/products";
import { TInventory, TProduct } from "../../constants/types";
import useStorage from "../../hooks/storage";

const useCart = () => {

    const {getCart} = useStorage();

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [cart, setCart] = useState<TInventory[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getDataFromCart();
    }, [])

    const getDataFromCart = async () => {
        const storedCart = await getCart();
        setCart(storedCart);
        setTotal(getTotal(storedCart));
    }

    const getTotal = (cart: TInventory[]) => {
        let totalPrice = 0;
        if (cart.length>0)
            cart.forEach(inventory => totalPrice += inventory.product.price * inventory.units);
        return totalPrice;
    } 

    const goHome = () => {
        navigation.navigate('Home');
    }

    function checkout(): void {
        console.log("Order confirmed");
        goHome();
    }

    return {cart, total, goHome, navigation, checkout, getDataFromCart};
}

export default useCart;