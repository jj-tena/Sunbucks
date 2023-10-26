import { Image, Text, Pressable, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOURS } from "../../constants/colours";
import useProductCartCard from "./ProductCartCard";
import ProductCartCardStyles from "./ProductCartCard.styles";

const ProductCartCard = ({inventory, refresh}) => {
    
    const {navigation, removeRefresh, increaseRefresh, decreaseRefresh} = useProductCartCard(refresh);

    return (
        <View
            style={ProductCartCardStyles.main}
        >
            <Pressable style={ProductCartCardStyles.imageContainer}
                onPress={() => navigation.navigate('Product', {product: inventory.product})}>
                <Image 
                    source={inventory.product.image}
                    style={ProductCartCardStyles.image}
                />
            </Pressable>
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
                        <View style={ProductCartCardStyles.actionsUnitsLessContainer}>
                            <MaterialCommunityIcons 
                                name="minus" 
                                style={ProductCartCardStyles.actionsUnitsLessIcon}
                                onPress={() => decreaseRefresh(inventory.product.id)}
                            />
                        </View>
                        <Text>{inventory.units}</Text>
                        <View style={ProductCartCardStyles.actionsUnitsMoreContainer}>
                            <MaterialCommunityIcons 
                                name="plus" 
                                style={ProductCartCardStyles.actionsUnitsMoreIcon}
                                onPress={() => increaseRefresh(inventory.product.id)}
                            />
                        </View>
                    </View>
                    <Pressable onPress={() => removeRefresh(inventory.product.id)}>
                        <MaterialCommunityIcons name="delete-outline" style={ProductCartCardStyles.actionsDeleteIcon}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default ProductCartCard;