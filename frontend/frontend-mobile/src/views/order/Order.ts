import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TInventory, TUser } from "../../constants/types";
import useStorage from "../../storage/cart-storage";
import useCartStorage from "../../storage/cart-storage";
import useUserStorage from "../../storage/user-storage";

const useOrder = () => {

    const {getCart} = useCartStorage();

    const {getUser} = useUserStorage();

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [user, setUser] = useState<TUser>();
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getDataFromCart();
        getDataFromUser();
    }, [])

    const getDataFromUser = async () => {
        const storedUser = await getUser();
        setUser(storedUser);
    }

    const getDataFromCart = async () => {
        const storedCart = await getCart();
        setTotal(getTotal(storedCart));
    }

    const getTotal = (cart: TInventory[]) => {
        let totalPrice = 0;
        if (cart.length>0)
            cart.forEach(inventory => totalPrice += inventory.product.price * inventory.units);
        return totalPrice;
    } 

    const goCart = () => {
        navigation.navigate('Cart');
    }

    const checkout = () => {
        console.log("Order confirmed")
        navigation.navigate('Home');
    }

    return {user, total, goCart, navigation, checkout, getDataFromUser};
}

export default useOrder;