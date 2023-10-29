import { useNavigation } from "@react-navigation/native";

const useProductHomeCard = () => {

    const navigation = useNavigation();

    return {navigation};
}

export default useProductHomeCard;