import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TProduct, Products } from "../../constants/products";

const useCart = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [cart, setCart] = useState<TProduct[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getDataFromCart();
    }, [])

    const getDataFromCart = () => {
        const coffeeList: TProduct[] = [];
        for (let index = 0; index < Products.length; index++) {
            switch(Products[index].category) {
                case 'coffee': 
                    coffeeList.push(Products[index]);
                    break;
                default:
                    break;
            }
        }
        setCart(coffeeList);
        setTotal(getTotal(coffeeList));
    }

    const getTotal = (cart: TProduct[]) => {
        let totalPrice = 0;
        if (cart.length>0)
            cart.forEach(product => totalPrice += product.price);
        return totalPrice;
    } 

    const goHome = () => {
        navigation.navigate('Home');
    }

    function checkout(): void {
        console.log("Order confirmed");
        goHome();
    }

    return {cart, total, goHome, navigation, checkout};
}

export default useCart;