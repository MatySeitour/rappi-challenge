import "../public/styles.css"
import CartContext from "./Context/CartContext"
import { useContext, useEffect } from "react"
import { useState } from "react"

function CartSection({setCartSectionState}){
    const cartContext = useContext(CartContext)
    const {cartItems} = cartContext
    const {handleRemoverCart} = cartContext;
    const {handleAddCart} = cartContext;

    const [totalCart, setTotalCart] = useState(() => {
        const priceCart = cartItems.map((item) => {
            if(item.quantity === 1){
                return item.price
            }
            else{
                console.log("entra")
                return item.price * item.quantity
            }
        })
        return priceCart
    });

    useEffect(() => {
        setTotalCart(() => {
            const priceCart = cartItems.map((item) => {
                if(item.quantity === 1){
                    return item.price
                }
                else{
                    console.log("entra")
                    return item.price * item.quantity
                }
            })
            return priceCart.reduce((a, b) => a + b, 0);
        })

    }, [cartItems])


    const idsCartSection = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ]

    return[
        <div className="cart-section" key={idsCartSection[0].id}>
            <div className="cart-section__details">
                <span onClick={() => setCartSectionState(prevState => !prevState)} className="cart-section__exit">X</span>
                <h2>My Cart</h2>
            </div>
            <div>
                <ul className="cart-items__container">
                    {cartItems.map((item) => (
                        <li className="cart-item" key={item.id}>
                            <figure className="cart-img__container">
                                <img alt="CocaCola" className="cart-img" src="../productImg.jpg" />
                            </figure>
                            <div className="cart-item__detail">
                                <h4>{item.name}</h4>
                                <p className="cart-price">${item.price}</p>
                                <div className="cart-quantity__container">
                                    <button 
                                    onClick={() => {
                                        const newCartItem = {
                                            name: item.name,
                                            price: item.price,
                                            quantity: item.quantity,
                                            available: item.available,
                                            id: item.id,
                                        }
                                        handleRemoverCart(newCartItem)
                                    }}
                                    className="buttons-quantity">-</button>
                                    <p>{item.quantity}</p>
                                    <button 
                                    onClick={() => {
                                        const newCartItem = {
                                            name: item.name,
                                            price: item.price,
                                            quantity: item.quantity,
                                            available: item.available,
                                            id: item.id,
                                        }
                                        handleAddCart(newCartItem)
                                        }} 
                                    className="buttons-quantity">+</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="total-container">
                <h4 className="total-title">Total: {totalCart}$</h4>
            </div>
        </div>
    ]
}

export {CartSection}