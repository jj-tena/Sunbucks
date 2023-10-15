import { useEffect, useState } from "react";
import { Products } from "../../constants/products";

const useHome = () => {

    const [coffees, setCoffees] = useState([]);
    const [cakes, setCakes] = useState([]);
    const [milkshakes, setMilkshakes] = useState([]);

    useEffect(() => {
        const coffeeList = [];
        const cakeList = [];
        const milkshakeList = [];
        for (let index = 0; index < Products.length; index++) {
            switch(Products[index].category) {
                case 'coffee': 
                    coffeeList.push(Products[index]);
                    break;
                case 'cake': 
                    cakeList.push(Products[index]);
                    break;
                case 'milkshake': 
                    milkshakeList.push(Products[index]);
                    break;
                default:
                    break;
            }
        }
        setCoffees(coffeeList);
        setCakes(cakeList);
        setMilkshakes(milkshakeList);
    }, []);

    return {coffees, cakes, milkshakes};
}

export default useHome;