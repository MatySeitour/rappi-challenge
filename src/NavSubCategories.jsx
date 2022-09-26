import { useState } from "react";
import "./App.css"

function NavSubCategories({categoryName, subLevels}){
    const [subCategoriesState, setSubCategoriesState] = useState(false);
    const [subCategoriesArrow, setSubCategoriesArrow] = useState(false);

        return(
            <li 
            onClick={
                () => setSubCategoriesState(prevState => !prevState)
            } 
            className="category-item">
                <div 
                    onClick={
                        () => setSubCategoriesArrow(prevState => !prevState)
                    }  
                className="subCategories-info__container">
                {categoryName}
                <svg className={`arrow-subCategory ${subCategoriesArrow && `arrow-subCategory__active`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
                {subCategoriesState && 
                <>
                <ul className="sub-levels__container">
                    {subLevels.map((subLevel) => (
                        <li 
                            key={subLevel.id}>
                            {subLevel.name}
                        </li>
                    ))}
                </ul>
                </>}
            </li>
        )


}

export {NavSubCategories};