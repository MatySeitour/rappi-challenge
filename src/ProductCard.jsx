import "../public/styles.css"
import { Cart } from "./Cart";

function ProductCard({setCartItems, productName, productQuantity, productId, productAvailable, productPrice, cart, setCart, cartItems}){
    const AvailableState = productAvailable ? "disponible" : "no disponible"
    return(
        <li className="product-item">
            <Cart 
                 productName={productName}
                 productId={productId}
                 productAvailable={productAvailable}
                 productPrice={productPrice}
                 productQuantity={productQuantity}
                cart={cart}
                setCart={setCart}
            />
            <figure className="product-image__container">
                <img src="../productImg.jpg" className="product-image"/>
            </figure>
            <div className="product-detail__container">
                <div>
                    <h4 className="product-name">{productName}</h4>
                </div>
                <div className="available-container">
                    <p className="product-price">$ {productPrice}</p>
                    <p>{AvailableState}</p>
                    <p>{productQuantity}</p>
                </div>
            </div>
        </li>
    )
}

export {ProductCard};
