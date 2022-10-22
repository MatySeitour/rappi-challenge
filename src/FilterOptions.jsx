import "../public/styles.css"
import { useState } from "react"
import { useMedia } from "./CustomHooks/useMedia";

function FilterOptions({setStateProductsOrder ,availableStorage, available, setMinorPrice, setStateMinorPrice, setGreaterPrice, setStateGreaterPrice, setQuantityListState, setStateQuantity, setButtonConfirmed, buttonConfirmed, quantityListState, minorPrice, greaterPrice, setProductsOrder}){
    const mobileResponsive = useMedia('(max-width: 500px)');
    
    const orderListItems = [
        {
            id: 2,
            title: "ascending price",
        },
        {
            id: 1,
            title: "descending price",
        },
        {
            id: 3,
            title: "ascending quantity",
        },
        {
            id: 4,
            title: "descending quantity",
        },
        {
            id: 5,
            title: "none",
        },
        
    ]

    const idsFilterOption = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
    ]

    
    const [orderListState, setOrderListState] = useState(false)
    const [nameOrder, setNameOrder] = useState("")
    
    return[
        <div className={`${mobileResponsive !== false ? `` : `filter-options__desktop`}`} key={idsFilterOption[8].id}>
            {mobileResponsive ? 
                <>
                    <span onClick={() => setStateProductsOrder(false)} className="filter-exit">X</span>
            <div className="organize-products__container">
                <button 
                    onClick={() => {
                        setOrderListState(!orderListState)
                    }} 
                    className={`button-orderFor ${orderListState && `button-orderFor__active`}`}
                    >
                        Order for: {nameOrder}
                </button>

                {orderListState && 
                <ul className={`order-list__container ${orderListState} && order-list__container__active`}>
                    {orderListItems.map((item) =>(
                        <li 
                            onClick={() => {
                                setProductsOrder(item.id)
                                setOrderListState(!orderListState)
                                setNameOrder(item.title)
                            }}
                            className="order-items"
                            key={item.id}
                            >
                                {item.title}
                        </li>
                    ))}
                    </ul>
                    }
            </div>

            <div key={idsFilterOption[1].id} className="buttons-filter__container">
                <div key={idsFilterOption[7].id} className="button-available__container">

                    <button 
                        onClick={() => {
                                    availableStorage(false)
                        }}
                        className={`button-available ${!available && `button-available__active`}`}
                        >not available
                    </button>
                    <button 
                        onClick={() => {
                                    availableStorage(true)
                        }}
                        className={`button-available ${available && `button-available__active`}`}
                        >available
                    </button>
                </div>
            
                <div key={idsFilterOption[2].id} className="filter-price__container">
                    <div key={idsFilterOption[3].id} className="input-filter__container">
                        <label htmlFor="filterMinor">From</label>
                        <input 
                            value={minorPrice ?? ""}
                            onChange={(e) => {
                                setMinorPrice(e.target.value.toLowerCase())
                                setStateMinorPrice(e.target.value.toLowerCase())
                            }}
                            id="filterMinor" type="number" />
                    </div>
                    <span className="span-bar"></span>
                    <div key={idsFilterOption[4].id} className="input-filter__container">
                        <label htmlFor="filterGreater">To</label>
                        <input 
                            value={greaterPrice ?? ""}
                            onChange={(e) => {
                                setGreaterPrice(e.target.value.toLowerCase())
                                setStateGreaterPrice(e.target.value.toLowerCase())
                            }}
                            id="filterMinor" type="number" 
                        />
                    </div>
                </div>


                <div key={idsFilterOption[5].id} className="quantity-container">
                    <label htmlFor="quantityInput">Quantity stock</label>
                    <input
                        id="quantityInput"
                        value={quantityListState ?? ""}
                        onChange={(e) => {
                            setQuantityListState(e.target.value.toLowerCase())
                            setStateQuantity(e.target.value.toLowerCase())
                        }}
                        type="number" 
                    />

                    <button 
                        className="button-confirmed" 
                        onClick={() =>{
                            setButtonConfirmed(!buttonConfirmed)
                            setStateProductsOrder(false)
                        }}
                        >Confirmed
                    </button>
                </div>
            </div>
            <div key={idsFilterOption[6].id} className="background-opacity"></div>
            </>
            :
            <>
                 <span onClick={() => setStateProductsOrder(false)} className="filter-exit">X</span>
            <div className="organize-products__container">
                <button 
                    onClick={() => {
                        setOrderListState(!orderListState)
                    }} 
                    className={`button-orderFor ${orderListState && `button-orderFor__active`}`}
                    >
                        Order for: {nameOrder}
                </button>

                {orderListState && 
                <ul className={`order-list__container ${orderListState} && order-list__container__active`}>
                    {orderListItems.map((item) =>(
                        <li 
                            onClick={() => {
                                setProductsOrder(item.id)
                                setOrderListState(!orderListState)
                                setNameOrder(item.title)
                            }}
                            className="order-items"
                            key={item.id}
                            >
                                {item.title}
                        </li>
                    ))}
                    </ul>
                    }
            </div>

            <div key={idsFilterOption[1].id} className="buttons-filter__container">
                <div key={idsFilterOption[7].id} className="button-available__container">

                    <button 
                        onClick={() => {
                                    availableStorage(false)
                        }}
                        className={`button-available ${!available && `button-available__active`}`}
                        >not available
                    </button>
                    <button 
                        onClick={() => {
                                    availableStorage(true)
                        }}
                        className={`button-available ${available && `button-available__active`}`}
                        >available
                    </button>
                </div>
            
                <div key={idsFilterOption[2].id} className="filter-price__container">
                    <div key={idsFilterOption[3].id} className="input-filter__container">
                        <label htmlFor="filterMinor">From</label>
                        <input 
                            value={minorPrice ?? ""}
                            onChange={(e) => {
                                setMinorPrice(e.target.value.toLowerCase())
                                setStateMinorPrice(e.target.value.toLowerCase())
                            }}
                            id="filterMinor" type="number" />
                    </div>
                    <span className="span-bar"></span>
                    <div key={idsFilterOption[4].id} className="input-filter__container">
                        <label htmlFor="filterGreater">To</label>
                        <input 
                            value={greaterPrice ?? ""}
                            onChange={(e) => {
                                setGreaterPrice(e.target.value.toLowerCase())
                                setStateGreaterPrice(e.target.value.toLowerCase())
                            }}
                            id="filterMinor" type="number" 
                        />
                    </div>
                </div>


                <div key={idsFilterOption[5].id} className="quantity-container">
                    <label htmlFor="quantityInput">Quantity stock</label>
                    <input
                        id="quantityInput"
                        value={quantityListState ?? ""}
                        onChange={(e) => {
                            setQuantityListState(e.target.value.toLowerCase())
                            setStateQuantity(e.target.value.toLowerCase())
                        }}
                        type="number" 
                    />

                    <button 
                        className="button-confirmed" 
                        onClick={() =>{
                            setButtonConfirmed(!buttonConfirmed)
                            setStateProductsOrder(false)
                        }}
                        >Confirmed
                    </button>
                </div>
            </div>
            </>
            }
        </div>
    ]
}

export {FilterOptions}