import { useState } from "react";
import "./App.css"
import { SubLevelTwo } from "./SubLevelTwo";

function NavSubCategories({categoryName, subLevels}){
    const [subCategoriesState, setSubCategoriesState] = useState(false);
    const [subLevelTwoState, setSubLevelTwoState] = useState(false);
    const [subCategoriesArrow, setSubCategoriesArrow] = useState(false);
    const [subLevelArrowState, setSubLevelArrowState] = useState(false);
    function searchSublevels(){
        subLevels.find((item) => {
            if(item.sublevels !== undefined){
                console.log(item)
                setSubLevelState(true);
            }
        })
    }

    // console.log(subLevels)
        return(
            <li  
            className="category-item">
                <div 
                    onClick={
                        () => {
                            setSubCategoriesArrow(prevState => !prevState)
                            setSubCategoriesState(prevState => !prevState)
                        }
                    }  
                    className="subCategories-info__container">
                    {categoryName}
                    <svg className={`arrow-subCategory ${subCategoriesArrow && `arrow-subCategory__active`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
                {subCategoriesState && 
                <>
                <ul
                    className={`sub-levels__container ${subCategoriesState && `sub-levels__container__active`}`}>
                    {subLevels.map((subLevel) => (
                        <li 
                            className="subLevel-item"
                            key={subLevel.id}>
                            <div 
                                onClick={() => {
                                    setSubLevelTwoState(!subLevelTwoState)
                                    setSubLevelArrowState(!subLevelArrowState)
                                }} 
                                className="subLevel-info__container">
                                <p>{subLevel.name}</p>
                                {subLevel.sublevels !== undefined && 
                                    <svg className={`arrow-subLevel ${!subLevelArrowState && `arrow-subLevel__active`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                }
                            </div>
                            {
                                subLevelTwoState && subLevel.sublevels !== undefined &&
                                    <SubLevelTwo 
                                        subLevelsTwo={subLevel.sublevels}
                                    />
                            }
                            {
                                subLevel.sublevels === undefined &&
                                    <input className="sublevel-search" placeholder="there are no more sublevels in this category, write the name of the product you are looking for"></input>
                            }
                        </li>
                    ))}
                </ul>
                </>}
            </li>
        )


}

export {NavSubCategories};