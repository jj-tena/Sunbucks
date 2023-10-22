export type TProduct = {
    id: number,
    category: string,
    name: string,
    price: number,
    description: string,
    image: string   
}

export const Products = [
    {
        id: 1,
        category: 'coffee',
        name: 'Cafe con leche',
        price: 5,
        description: 'Exquisito cafe con leche',
        image: require('../assets/products/coffees/coffee1.jpeg')
    },
    {
        id: 2,
        category: 'coffee',
        name: 'Cafe solo',
        price: 6,
        description: 'Exquisito cafe solo',
        image: require('../assets/products/coffees/coffee2.jpg')
    },
    {
        id: 3,
        category: 'coffee',
        name: 'Cafe bombón',
        price: 8,
        description: 'Exquisito cafe bombón',
        image: require('../assets/products/coffees/coffee3.jpg')
    },
    {
        id: 4,
        category: 'cake',
        name: 'Tarta de chocolate',
        price: 5,
        description: 'Exquisita tarta de chocolate',
        image: require('../assets/products/cakes/cake1.jpg')
    },
    {
        id: 5,
        category: 'cake',
        name: 'Tarta red velvet',
        price: 5,
        description: 'Exquisita tarta red velvet',
        image: require('../assets/products/cakes/cake2.jpg')
    },
    {
        id: 6,
        category: 'cake',
        name: 'Tarta de queso',
        price: 6,
        description: 'Exquisita tarta de queso',
        image: require('../assets/products/cakes/cake3.jpg')
    },
    {
        id: 7,
        category: 'milkshake',
        name: 'Batido de fresa',
        price: 7,
        description: 'Exquisito batido de fresa',
        image: require('../assets/products/milkshakes/milkshake1.jpg')
    },
    {
        id: 8,
        category: 'milkshake',
        name: 'Batido de chocolate',
        price: 7,
        description: 'Exquisito batido de chocolate',
        image: require('../assets/products/milkshakes/milkshake2.jpeg')
    },
    {
        id: 9,
        category: 'milkshake',
        name: 'Batido de vainilla',
        price: 7,
        description: 'Exquisito batido de vainilla',
        image: require('../assets/products/milkshakes/milkshake3.jpg')
    }
]