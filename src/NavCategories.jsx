import { useState } from "react";
import "../public/styles.css"
import callCategories from "./api/api";
import { NavSubCategories } from "./NavSubCategories";


function NavCategories({idKey}){
    const [categoriesList, setCategoriesList] = useState(false);
    const [arrowState, setArrowState] = useState(false);
    const categories = callCategories.getCategories()
    console.log(categories)
        return[
            <li key={idKey} onClick={() => {
            }}
            className="nav-categories_item">
                <div onClick={() => {setCategoriesList(prevState => !prevState)
                setArrowState(prevState => !prevState)
            }} className="category-title__container"><p>Categories</p><svg className={`arrow-category ${arrowState && `arrow-category__active`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></div> 
            {categoriesList &&
            <>
            <ul className="list-categories">
                {categories.map((category) =>(
                    <NavSubCategories
                        key={category.id}
                        categoryName={category.name}
                        subLevels={category.sublevels}
                    />
                ))}
            </ul>
            </> }
            </li>

        ]
    // else{
    //     return[
    //         <li onClick={() => {
    //             setCategoriesList(prevState => !prevState)
    //             setArrowState(prevState => !prevState)
    //         }} 
    //         className="nav-mobile__items">Categories <svg className={`arrow-category__active ${arrowState && `arrow-category`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></li>,
            
    //     ]
    // }
}

export {NavCategories};