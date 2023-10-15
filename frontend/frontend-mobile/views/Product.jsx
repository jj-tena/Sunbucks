import { View, Text } from "react-native"

const Product = ({route}) => {

    const {product} = route.params;

    return (
        <View>
            <Text>{product.name}</Text>
        </View>
    )
}

export default Product;