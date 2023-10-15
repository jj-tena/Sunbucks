import { Image, Text, TouchableOpacity, View } from "react-native"
import { COLOURS } from "../../constants/colours";
import ProductCard from "../product-card";
import ProductCategoryStyles from "./ProductCategory.styles";

const ProductCategory = ({products, category}) => {
    return (
        <View style={ProductCategoryStyles.main}>
            <View style={ProductCategoryStyles.header}>
                <Text style={ProductCategoryStyles.category}>
                    {category}
                </Text>
                <Text style={ProductCategoryStyles.size}>
                    {products.length}
                </Text>
            </View>
            <View style={ProductCategoryStyles.products}>
                {
                    products.map(item => {
                        return <ProductCard key={item.id} product={item}/>
                    })
                }

            </View>
        </View>
    )
}

export default ProductCategory;