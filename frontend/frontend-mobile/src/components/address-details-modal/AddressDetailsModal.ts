import { useEffect, useState } from "react";
import useUserStorage from "../../storage/user-storage";

const useAddressDetailsModal = (refresh: () => Promise<void>) => {

    const {getUser, saveAddressDetails} = useUserStorage();

    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState(''); 

    useEffect(() => {
        getAddressDetails();
    }, [])

    const getAddressDetails = async () => {
        const user = await getUser();
        setAddress(user.address);
        setPostalCode(user.postalCode);
        setCity(user.city);
    }

    const saveDetails = async () => {
        await saveAddressDetails({address, postalCode, city})
        refresh();
    }

    return {address, setAddress, postalCode, setPostalCode, city, setCity, saveDetails};
}

export default useAddressDetailsModal;