import { useState, useContext } from "react"
import CartContext from "./Context/CartContext";
import "../public/styles.css"
import { CartSection } from "./CartSection";

function CartNotification({cart, cartItems}){
    const cartContext = useContext(CartContext);

    const [cartSectionState, setCartSectionState] = useState(false);
    
    const productsItemNotification = cartItems.map((item) => {
        let numbersItems = 0;
        numbersItems = numbersItems + item.quantity;
        return numbersItems
    })

    const totalItems = productsItemNotification.reduce((a, b) => a+b, 0);


    const idsCartNotification = [
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        },
        {
            id:4,
        },
        {
            id:5,
        },
    ]

    return[
        <span key={idsCartNotification[0].id} onClick={() => {
            setCartSectionState(!cartSectionState)
        }} 
            className="cart-notification__container">
            <svg key={idsCartNotification[2].id} className="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
            <p key={idsCartNotification[3].id}>{totalItems}</p>
        </span>,
        <div key={idsCartNotification[4].id}>
            <div className={`cart-section__container ${cartSectionState && `cart-section__active`}`}>
                {cartSectionState && 
                    <CartSection 
                        key={idsCartNotification[1].id}
                        setCartSectionState={setCartSectionState}
                    />
                }
            </div>
        </div>

    ]
}

export {CartNotification}