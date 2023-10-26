export type TProduct = {
    id: number,
    category: string,
    name: string,
    price: number,
    description: string,
    image: string   
}

export type TInventory = {
    product: TProduct,
    units: number  
}