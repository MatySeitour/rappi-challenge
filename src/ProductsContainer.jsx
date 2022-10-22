import "../public/styles.css"
import { ProductCard } from "./ProductCard";


function ProductsContainer({setCartItems, productsMinorPrice, cart, setCart, cartItems}){ 
    
    return(
        <ul className="products-container">
        {productsMinorPrice.map((product) =>(
           <ProductCard 
            key={product.id}
            productName={product.name}
            productId={product.id}
            productAvailable={product.available}
            productPrice={product.price}
            productQuantity={product.quantity}
            cart={cart}
            setCart={setCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
        />
        ))}
        </ul>
    )
}

export {ProductsContainer}