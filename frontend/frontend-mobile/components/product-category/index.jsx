import { Text, View } from "react-native"
import ProductCategoryStyles from "./ProductCategory.styles";
import ProductHomeCard from "../product-home-card";

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
                        return <ProductHomeCard key={item.id} product={item}/>
                    })
                }

            </View>
        </View>
    )
}

export default ProductCategory;