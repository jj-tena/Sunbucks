import { View, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native"
import { COLOURS } from "../../constants/colours";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProductCategory from "../../components/product-category";
import HomeStyles from "./Home.styles";
import useHome from "./Home";

const Home = () => {

    const {coffees, cakes, milkshakes, goCart} = useHome();

    return (
        <View style={HomeStyles.main}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={HomeStyles.header1}>
                    <TouchableOpacity>
                        <Entypo 
                            name="shopping-bag"
                            style={HomeStyles.shoppingBag}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goCart}>
                        <MaterialCommunityIcons 
                            name="cart"
                            style={HomeStyles.cart}
                        />
                    </TouchableOpacity>
                </View>

                <View style={HomeStyles.header2}>
                    <Text style={HomeStyles.title}>
                        Sunbuckets
                    </Text>
                    <Text style={HomeStyles.subtitle}>
                        Tu radiante cafetería de confianza
                    </Text>
                </View>

                <ProductCategory products={coffees} category='Coffee'/>
                <ProductCategory products={cakes} category='Cakes'/>
                <ProductCategory products={milkshakes} category='Milkshakes'/>
            </ScrollView>
        </View>
    )
}

export default Home;