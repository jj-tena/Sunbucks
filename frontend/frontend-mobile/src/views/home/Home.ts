import { useEffect, useState } from "react";
import { Products } from "../../constants/products";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TProduct } from "../../constants/types";

const useHome = () => {

    const [coffees, setCoffees] = useState<TProduct[]>([]);
    const [cakes, setCakes] = useState<TProduct[]>([]);
    const [milkshakes, setMilkshakes] = useState<TProduct[]>([]);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => {
        const coffeeList = [];
        const cakeList = [];
        const milkshakeList = [];
        for (let index = 0; index < Products.length; index++) {
            switch(Products[index].category) {
                case 'coffee': 
                    coffeeList.push(Products[index]);
                    break;
                case 'cake': 
                    cakeList.push(Products[index]);
                    break;
                case 'milkshake': 
                    milkshakeList.push(Products[index]);
                    break;
                default:
                    break;
            }
        }
        setCoffees(coffeeList);
        setCakes(cakeList);
        setMilkshakes(milkshakeList);
    }, []);

    const goCart = () => {
        navigation.navigate("Cart");
    }

    return {coffees, cakes, milkshakes, goCart};
}

export default useHome;