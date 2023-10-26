import { View, Text, StatusBar, ScrollView, Pressable } from "react-native"
import { COLOURS } from "../../constants/colours";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProductCategory from "../../components/product-category";
import HomeStyles from "./Home.styles";
import useHome from "./Home";
import Header from "../../components/header";

const Home = () => {

    const {coffees, cakes, milkshakes, goCart} = useHome();

    return (
        <View style={HomeStyles.main}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                

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