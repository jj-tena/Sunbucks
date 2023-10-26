import { Image, Text, Pressable, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "../../constants/colours";
import useProductCartCard from "./ProductCartCard";
import ProductCartCardStyles from "./ProductCartCard.styles";

const ProductCartCard = ({inventory, refresh}) => {
    
    const {navigation, removeRefresh, increaseRefresh, decreaseRefresh} = useProductCartCard(refresh);

    return (
        <Pressable
            onPress={() => navigation.navigate('Product', {product: inventory.product})}
            style={ProductCartCardStyles.main}
        >
            <View style={ProductCartCardStyles.imageContainer}>
                <Image 
                    source={inventory.product.image}
                    style={ProductCartCardStyles.image}
                />
            </View>
            <View style={ProductCartCardStyles.detailsContainer}>
                <View>
                    <Text style={ProductCartCardStyles.detailsName}>
                        {inventory.product.name}
                    </Text>
                    <View style={ProductCartCardStyles.detailsPriceContainer}>
                        <Text  style={ProductCartCardStyles.detailsPrice}>
                            {inventory.product.price} euros
                        </Text>
                    </View>
                </View>
                <View style={ProductCartCardStyles.actionsContainer}>
                    <View style={ProductCartCardStyles.actionsUnitsContainer}>
                        <View style={ProductCartCardStyles.actionsUnitsMoreContainer}>
                            <MaterialCommunityIcons 
                                name="minus" 
                                style={ProductCartCardStyles.actionsUnitsMoreIcon}
                                onPress={() => decreaseRefresh(inventory.product.id)}
                            />
                        </View>
                        <Text>{inventory.units}</Text>
                        <View style={{
                            borderRadius: 100,
                            marginLeft: 20,
                            padding: 4,
                            borderWidth: 1,
                            borderColor: COLOURS.backgroundMedium,
                            opacity: 0.5
                        }}>
                            <MaterialCommunityIcons 
                                name="plus" 
                                style={ProductCartCardStyles.actionsUnitsLessIcon}
                                onPress={() => increaseRefresh(inventory.product.id)}
                            />
                        </View>
                    </View>
                    <Pressable onPress={() => removeRefresh(inventory.product.id)}>
                        <MaterialCommunityIcons name="delete-outline" style={{
                            fontSize: 16,
                            color: COLOURS.backgroundDark,
                            backgroundColor: COLOURS.backgroundLight,
                            padding: 8,
                            borderRadius: 100,
                        }}/>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
}

export default ProductCartCard;