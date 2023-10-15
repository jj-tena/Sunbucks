import { Image, Text, TouchableOpacity, View } from "react-native"
import ProductCardStyles from "./ProductCard.styles";
import useProductCard from "./ProductCard";

const ProductCard = ({product}) => {

    const {navigation} = useProductCard();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Product", {product})}
            style={ProductCardStyles.main}
        >
            <View
                style={ProductCardStyles.imageContainer}
            >
                <Image 
                    source={product.image}
                    style={ProductCardStyles.image}
                />
            </View>
            <Text
                style={ProductCardStyles.name}
            >
                {product.name}
            </Text>
            <Text>{product.price} $</Text>
        </TouchableOpacity>
    )
}

export default ProductCard;