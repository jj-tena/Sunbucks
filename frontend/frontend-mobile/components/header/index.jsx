import { Image, Pressable, View } from "react-native";
import HeaderStyles from "./Header.styles";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useHeader from "./Header";

const Header = () => {

    const {goHome, goCart} = useHeader();
    
    return (
        <View style={HeaderStyles.header}>
            <Pressable onPress={goHome}>
                <Entypo 
                    name="home"
                    style={HeaderStyles.shoppingBag}
                />
            </Pressable>
            <Image source={require('../../assets/logo/logo.png')} style={HeaderStyles.logo}/>
            <Pressable onPress={goCart}>
                <MaterialCommunityIcons 
                    name="cart"
                    style={HeaderStyles.cart}
                />
            </Pressable>
        </View>
    );
}

export default Header;