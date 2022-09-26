import { useState } from "react";
import "../public/styles.css"
import getProducts from "./api/products.json"

function Products(){
    const availableStorage = item => {
        window.localStorage.setItem("available", item);
    } 


    const [available, setAvailable] = useState(false);
    const products = getProducts.products;
    const productsFilter = products.filter((product) => product.available);
    console.log(productsFilter)



    console.log("products", products)
    return[
        <section className="products">
            <button 
                onClick={() => {
                    setAvailable(prevState => !prevState)
                    availableStorage(available)
                                }
                    }>Available</button>,
            <ul className="products-container">
                {available !== true ?
                products.map((product) => (
                    console.log("no es filtrado"),
                    <li className="product-item" key={product.id}><p>{product.name}</p></li>
                ))
                :
                productsFilter.map((product) => (
                    console.log("es filtrado"),
                    <li className="product-item" key={product.id}><p>{product.name}</p></li>
                ))
                }   
            </ul>
        </section>,

      
    ]
}

export {Products}