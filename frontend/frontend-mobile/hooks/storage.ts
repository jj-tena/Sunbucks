import AsyncStorage from "@react-native-async-storage/async-storage";
import { TInventory, TProduct } from "../constants/types";

const useStorage = () => {

    const getCart = async () => {
        const item = await AsyncStorage.getItem("cart");
        let cart: TInventory[] = [];
        if (item) {
            cart = await JSON.parse(item);
        }
        return cart;
    }

    const addProduct = async (product: TProduct) => {
        const item = await AsyncStorage.getItem("cart");
        let cart: TInventory[] = [];
        if (!item) {
            cart.push({product, units:1});
        } else {
            cart = await JSON.parse(item);
            const index = cart.findIndex(item => item.product.id === product.id);
            if (index===-1) {
                cart.push({product, units:1});
            } else {
                cart.map(item => {
                    if (item.product.id === product.id) 
                        item.units++;
                })
            }
        }
        const cartJSON = JSON.stringify(cart);
        await AsyncStorage.setItem("cart", cartJSON);
    }

    const removeProduct = async (id: number) => {
        const item = await AsyncStorage.getItem("cart");
        if (item) {
            const cart: TInventory[] = await JSON.parse(item);
            const index = cart.findIndex(item => item.product.id === id);
            if (index!==-1) {
                cart.splice(index, 1);
                const cartJSON = JSON.stringify(cart);
                await AsyncStorage.setItem("cart", cartJSON);
            }
        }
    }

    const increaseUnits = async (id: number) => {
        const item = await AsyncStorage.getItem("cart");
        if (item) {
            const cart: TInventory[] = await JSON.parse(item);
            const index = cart.findIndex(item => item.product.id === id);
            if (index!==-1) {
                cart[index].units++;
                const cartJSON = JSON.stringify(cart);
                await AsyncStorage.setItem("cart", cartJSON);
            }
        }
    }

    const decreaseUnits = async (id: number) => {
        const item = await AsyncStorage.getItem("cart");
        if (item) {
            const cart: TInventory[] = await JSON.parse(item);
            const index = cart.findIndex(item => item.product.id === id);
            if (index!==-1) {
                cart[index].units--;
                const cartJSON = JSON.stringify(cart);
                await AsyncStorage.setItem("cart", cartJSON);
            }
        }
    }

    return {addProduct, getCart, removeProduct, increaseUnits, decreaseUnits};
}

export default useStorage;