import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TProduct } from "../../constants/products";
import { useState } from "react";

const useProduct = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const goHome = () => {
        navigation.navigate('Home');
    }

    const addToCart = async (id: number) => {
        console.log("Add product " + id + " to the cart");
        goHome();
    }

    return {addToCart, goHome};
}

export default useProduct;