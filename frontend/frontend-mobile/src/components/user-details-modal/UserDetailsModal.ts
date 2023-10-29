import { useEffect, useState } from "react";
import useUserStorage from "../../storage/user-storage";

const useUserDetailsModal = (refresh: () => Promise<void>) => {

    const {getUser, saveUserDetails} = useUserStorage();

    const [name, setName] = useState('');
    const [surnames, setSurnames] = useState('');
    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState(''); 

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const user = await getUser();
        setName(user.name);
        setSurnames(user.surnames);
        setPhone(user.phone);
    }

    const saveDetails = async () => {
        await saveUserDetails({name, surnames, email, phone})
        refresh();
    }

    return {name, setName, surnames, setSurnames, email, setEmail, phone, setPhone, saveDetails};
}

export default useUserDetailsModal;