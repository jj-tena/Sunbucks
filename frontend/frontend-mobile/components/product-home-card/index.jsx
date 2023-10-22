import { Image, Text, Pressable, View } from "react-native"
import useProductHomeCard from "./ProductHomeCard";
import ProductHomeCardStyles from "./ProductHomeCard.styles";

const ProductHomeCard = ({product}) => {

    const {navigation} = useProductHomeCard();

    return (
        <Pressable
            onPress={() => navigation.navigate("Product", {product})}
            style={ProductHomeCardStyles.main}
        >
            <View
                style={ProductHomeCardStyles.imageContainer}
            >
                <Image 
                    source={product.image}
                    style={ProductHomeCardStyles.image}
                    resizeMode={"cover"}
                />
            </View>
            <Text
                style={ProductHomeCardStyles.name}
            >
                {product.name}
            </Text>
            <Text>{product.price} $</Text>
        </Pressable>
    )
}

export default ProductHomeCard;