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

export type TUserDetails = {
    name: string,
    surnames: string,
    email: string,
    phone: string
}

export type TAddressDetails = {
    address: string,
    postalCode: string,
    city: string,
}

export type TPaymentDetails = {
    creditCard: string,
    expirationDate: string,
    cvv: string
}

export type TUser = {
    name: string,
    surnames: string,
    email: string,
    phone: string,
    address: string,
    postalCode: string,
    city: string,
    creditCard: string,
    expirationDate: string,
    cvv: string
}