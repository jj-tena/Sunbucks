import { useEffect, useState } from "react";
import useUserStorage from "../../storage/user-storage";

const usePaymentDetailsModal = (refresh: () => Promise<void>) => {

    const {getUser, savePaymentDetails} = useUserStorage();

    const [creditCard, setCreditCard] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState(''); 

    useEffect(() => {
        getAddressDetails();
    }, [])

    const getAddressDetails = async () => {
        const user = await getUser();
        setCreditCard(user.creditCard);
        setExpirationDate(user.expirationDate);
        setCvv(user.cvv);
    }

    const saveDetails = async () => {
        await savePaymentDetails({creditCard, expirationDate, cvv})
        refresh();
    }

    return {creditCard, setCreditCard, expirationDate, setExpirationDate, cvv, setCvv, saveDetails};
}

export default usePaymentDetailsModal;