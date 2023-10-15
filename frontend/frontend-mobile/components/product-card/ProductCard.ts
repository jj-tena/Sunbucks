import { useNavigation } from "@react-navigation/native";

const useProductCard = () => {

    const navigation = useNavigation();

    return {navigation};
}

export default useProductCard;