import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAddressDetails, TPaymentDetails, TUser, TUserDetails } from "../constants/types";

const useUserStorage = () => {

    const getEmptyUser = () => {
        const user: TUser = {
            name: "",
            surnames: "",
            email: "",
            phone: "",
            address: "",
            postalCode: "",
            city: "",
            creditCard: "",
            expirationDate: "",
            cvv: ""
        };
        return user;
    }

    const getUser = async () => {
        const userFromStorage = await AsyncStorage.getItem("user");
        let user: TUser = getEmptyUser();
        if (userFromStorage) {
            user = await JSON.parse(userFromStorage);
        }
        return user;
    }

    const saveUserDetails = async (userDetails: TUserDetails) => {
        const userFromStorage = await AsyncStorage.getItem("user");
        let user: TUser;
        if (!userFromStorage) {
            user = getEmptyUser();
        } else {
            user = await JSON.parse(userFromStorage);
            user.name = userDetails.name;
            user.surnames = userDetails.surnames;
            user.email = userDetails.email;
            user.phone = userDetails.phone;
        }
        const userJSON = JSON.stringify(user);
        await AsyncStorage.setItem("user", userJSON);
    }

    const saveAddressDetails = async (addressDetails: TAddressDetails) => {
        const userFromStorage = await AsyncStorage.getItem("user");
        let user: TUser;
        if (!userFromStorage) {
            user = getEmptyUser();
        } else {
            user = await JSON.parse(userFromStorage);
            user.address = addressDetails.address;
            user.postalCode = addressDetails.postalCode;
            user.city = addressDetails.city;
        }
        const userJSON = JSON.stringify(user);
        await AsyncStorage.setItem("user", userJSON);
    }

    const savePaymentDetails = async (paymentDetails: TPaymentDetails) => {
        const userFromStorage = await AsyncStorage.getItem("user");
        let user: TUser;
        if (!userFromStorage) {
            user = getEmptyUser();
        } else {
            user = await JSON.parse(userFromStorage);
            user.creditCard = paymentDetails.creditCard;
            user.expirationDate = paymentDetails.expirationDate;
            user.cvv = paymentDetails.cvv;
        }
        const userJSON = JSON.stringify(user);
        await AsyncStorage.setItem("user", userJSON);
    }

    return {getUser, saveUserDetails, saveAddressDetails, savePaymentDetails};
}

export default useUserStorage;