import { useState } from "react";
import "../public/styles.css"

function Categories(){
    const [categoriesList, setCategoriesList] = useState(false);
    console.log(categoriesList)
    if(!categoriesList){
        return[
            <li onClick={() => setCategoriesList(prevState => !prevState)} className="nav-mobile__items">Categories</li>
        ]
    }
    else{
        return[
            <li onClick={() => setCategoriesList(prevState => !prevState)} className="nav-mobile__items">Categories</li>,
            <div className="list-categories">
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
            </div>
        ]
    }
}

export {Categories};