import React, { useState } from "react";
import { useEffect } from "react";

const CartContext = React.createContext({});

export function CartContextProvider({ children }) {

    const [cartItems, setCartItems] = useState(() =>{
        try{
    const productsCartInLocalStorage = localStorage.getItem("productsCart");
            return productsCartInLocalStorage ? JSON.parse(productsCartInLocalStorage) : [];
        }
        catch(e){
            return [];
        }
    });

    useEffect(() =>{
        localStorage.setItem("productsCart", JSON.stringify(cartItems))
    },[cartItems])

    const handleAddCart = (product) =>{
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
        if(inCart){
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id){
                        return {...inCart, quantity: inCart.quantity + 1}
                    }
                    else {
                        return productInCart;
                    }
                })
            )
        }
        else{
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }

    const handleRemoverCart = (product) =>{
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id );
        if(inCart.quantity === 1){

            setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
            );
        } 
        else { 
            setCartItems(
                cartItems.map((productInCart) => {
                if(productInCart.id === product.id){
                    return {...inCart, quantity: inCart.quantity - 1};
                }
                else{
                    console.log("entra en 5")
                    return productInCart
                }
            }))
        }
    }


    return (
        <CartContext.Provider value={{ cartItems, handleRemoverCart, handleAddCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;