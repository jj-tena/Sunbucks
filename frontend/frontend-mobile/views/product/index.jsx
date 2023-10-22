import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from "react-native"
import ProductStyles from "./Product.styles";
import { COLOURS } from "../../constants/colours";
import Entypo from 'react-native-vector-icons/Entypo';
import useProduct from "./Product";

const Product = ({route}) => {

    const {product} = route.params;
    
    const {addToCart, goHome} = useProduct();   

    return (
        <View style={ProductStyles.main}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={ProductStyles.header1}>
                    <View style={ProductStyles.homeContainer}>
                        <TouchableOpacity onPress={goHome}>
                            <Entypo
                                name="chevron-left"
                                style={ProductStyles.home}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={ProductStyles.imageContainer}>
                        <Image resizeMode={"cover"} source={product.image} style={ProductStyles.image}/>
                    </View>
                </View>
                <View style={ProductStyles.bodyContainer}>
                    <View style={ProductStyles.cartContainer}>
                        <Entypo
                            name="shopping-cart"
                            style={ProductStyles.cartIcon}
                        />
                        <Text style={ProductStyles.cartText}>
                            Comprar
                        </Text>
                    </View>
                    <View style={ProductStyles.detailsContainer}>
                        <Text style={ProductStyles.detailsName}>
                            {product.name}
                        </Text>
                        <Text style={ProductStyles.detailsDescription}>
                            {product.description}
                        </Text>
                        <Text style={ProductStyles.detailsPrice}>
                            {product.price} $
                        </Text>
                    </View>
                    
                    <View style={ProductStyles.buttonContainer}>
                        <TouchableOpacity 
                        onPress={() => addToCart(product.id)}
                        style={ProductStyles.buttonTouchable}>
                            <Text style={ProductStyles.buttonName}>
                                Añadir al carrito
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Product;