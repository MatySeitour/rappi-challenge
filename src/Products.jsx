import { useEffect, useState, useContext } from "react";
import "../public/styles.css"
import getProducts from "./api/products.json"
import CartContext from "./Context/CartContext";
import { ProductsContainer } from "./ProductsContainer";
import { CartNotification } from "./CartNotification";
import { FilterOptions } from "./FilterOptions";
import { useMedia } from "./CustomHooks/useMedia";



function Products(){
    const idsKey = [
        {
            id: 1,
        },
    ]

    const cartContext = useContext(CartContext)
    const mobileResponsive = useMedia('(max-width: 760px)');
    const {cartItems} = cartContext;

    const [available, setAvailable] = useState(() =>{
        try{
            const availableShow = window.localStorage.getItem("available");
            return JSON.parse(availableShow);
        }
        catch(e){
            console.error(e)
        }
    });
    const [minorPrice, setMinorPrice] = useState("");
    const [greaterPrice, setGreaterPrice] = useState("");
    const [stateMinorPrice, setStateMinorPrice] = useState("");
    const [stateGreaterPrice, setStateGreaterPrice] = useState("");
    const [stateQuantity, setStateQuantity] = useState("");
    const products = getProducts.products;
    const productsFilter = products.filter((product) => product.available);
    const [productsMinorPrice, setProductsMinorPrice] = useState(products);
    const [quantityListState, setQuantityListState] = useState("")
    const [productsOrder, setProductsOrder] = useState("");
    const [buttonConfirmed, setButtonConfirmed] = useState(true);
    const [stateProductsOrder, setStateProductsOrder] = useState(false);


    

    function productsMinorPriceFilter(from, to, quantity){
        if(!available && from !== "" && to !== "" && quantityListState !== ""){
            const prevProducts = products.filter(product => product.price > from && product.price < to && product.quantity <= quantity)

            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }

        }
        else if(!available && from === "" && to === "" && quantityListState !== ""){
            const prevProducts = products.filter(product => product.quantity < quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from === "" && to === "" && quantityListState !== ""){
            const prevProducts = productsFilter.filter(product => product.quantity < quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from === "" && to === "" && quantityListState === ""){
            const prevProducts = productsFilter
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(!available && from === "" && to === "" && quantityListState === ""){
            const prevProducts = products
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(!available && from !== "" && to !== "" && quantityListState === ""){
            const prevProducts = products.filter(product => product.price > from && product.price < to)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from !== "" && to !== "" && quantityListState === ""){
            const prevProducts = productsFilter.filter(product => product.price > from && product.price < to)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from !== "" && to !=="" && quantityListState !== ""){
            const prevProducts = productsFilter.filter(product => product.price > from && product.price < to && product.quantity <= quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(!available && from === "" && to !== "" && quantityListState !== ""){
            const prevProducts = products.filter(product => product.price < to && product.quantity <= quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(!available && from === "" && to !== "" && quantityListState === ""){
            const prevProducts = products.filter(product => product.price < to)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(!available && from !== "" && to === "" && quantityListState !== ""){
            const prevProducts = products.filter(product => product.price > from && product.quantity <= quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(!available && from !== "" && to === ""){
            const prevProducts = products.filter(product => product.price > from)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from === "" && to !== "" && quantityListState !== ""){
            const prevProducts = productsFilter.filter(product => product.price < to && product.quantity <= quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from === "" && to !== "" && quantityListState === ""){
            const prevProducts = productsFilter.filter(product => product.price < to)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from !== "" && to === "" && quantityListState !== ""){
            const prevProducts = productsFilter.filter(product => product.price > from && product.quantity <= quantity)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
        else if(available && from !== "" && to === ""){
            const prevProducts = productsFilter.filter(product => product.price > from)
            if(productsOrder === 1){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.price-b.price
                }))
            }
            else if(productsOrder === 2){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.price-a.price
                }))
            }
            else if(productsOrder === 3){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return b.quantity-a.quantity
                }))
            }
            else if(productsOrder === 4){
                setProductsMinorPrice(prevProducts.sort((a,b) =>{
                    return a.quantity-b.quantity
                }))
            }
            else{
                setProductsMinorPrice(prevProducts);
            }
        }
    }

    useEffect(() => {
            productsMinorPriceFilter(minorPrice, greaterPrice, quantityListState)
    }, [buttonConfirmed, productsOrder])

    const availableStorage = item => {
        try{
            window.localStorage.setItem("available", item);
            setAvailable(item);
        }
        catch(e){
            console.log(e);
        }
    } 

    const numberLocalStorage = JSON.parse(localStorage.getItem("cart"));
    const [cart, setCart] = useState(() =>{
        if(numberLocalStorage == null){
            return 0
        }
        else{
            return numberLocalStorage
        }
    })


    useEffect(() =>{
        localStorage.setItem("cart", cart)
    },[cart])


    return[
        <section key={idsKey[0].id} className="products">
            {cartItems.length > 0 && 
                <CartNotification 
                    cartItems={cartItems}
                />
            }
            <h2 className="products-subtitle">Add products to your cart!</h2>
            <button 
                onClick={() => 
                    setStateProductsOrder(!stateProductsOrder)
                } 
                className="button-filter__state">
                    filter options
            </button>
            {mobileResponsive !== false ? 
                <>
                    <div className={`filter-options__container ${stateProductsOrder && `filter-options__active`}`}>
                        {stateProductsOrder &&
                            <FilterOptions
                                availableStorage={availableStorage}
                                available={available}
                                setMinorPrice={setMinorPrice}
                                setStateMinorPrice={setStateMinorPrice}
                                setGreaterPrice={setGreaterPrice}
                                setStateGreaterPrice={setStateGreaterPrice}
                                setQuantityListState={setQuantityListState}
                                setStateQuantity={setStateQuantity}
                                setButtonConfirmed={setButtonConfirmed}
                                buttonConfirmed={buttonConfirmed}
                                quantityListState={quantityListState}
                                minorPrice={minorPrice}
                                greaterPrice={greaterPrice}
                                setProductsOrder={setProductsOrder}
                                setStateProductsOrder={setStateProductsOrder}
                            />
                        }
                    </div>
                </>
                :
                <>
                <div className={`filter-options__desktop__container`}>
                        {stateProductsOrder &&
                            <FilterOptions
                                availableStorage={availableStorage}
                                available={available}
                                setMinorPrice={setMinorPrice}
                                setStateMinorPrice={setStateMinorPrice}
                                setGreaterPrice={setGreaterPrice}
                                setStateGreaterPrice={setStateGreaterPrice}
                                setQuantityListState={setQuantityListState}
                                setStateQuantity={setStateQuantity}
                                setButtonConfirmed={setButtonConfirmed}
                                buttonConfirmed={buttonConfirmed}
                                quantityListState={quantityListState}
                                minorPrice={minorPrice}
                                greaterPrice={greaterPrice}
                                setProductsOrder={setProductsOrder}
                                setStateProductsOrder={setStateProductsOrder}
                            />
                        }
                    </div>
                </>
            }

            

            <ProductsContainer
                available={available}
                minorPrice={minorPrice}
                stateMinorPrice={stateMinorPrice}
                stateGreaterPrice={stateGreaterPrice}
                products={products}
                productsFilter={productsFilter}
                productsMinorPrice={productsMinorPrice}
                stateQuantity={stateQuantity}
                cart={cart}
                setCart={setCart}
            />
        </section>,

      
    ]
}

export {Products}