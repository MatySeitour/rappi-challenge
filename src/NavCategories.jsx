import { useState } from "react";
import "../public/styles.css"
import callCategories from "./api/api";
import { NavSubCategories } from "./NavSubCategories";


function NavCategories({idKey, mobileResponsive}){
    const [categoriesList, setCategoriesList] = useState(false);
    const [arrowState, setArrowState] = useState(false);
    console.log(mobileResponsive)
    const categories = callCategories.getCategories()
        return[
            <div className={`${mobileResponsive === undefined ? `navMobile__active` : `navMobile__desactive`}`} key={idKey}>
                {mobileResponsive ? 
                    <div
                        className={`nav-categories_item`}>
                        <div 
                            onClick={() => {
                                setCategoriesList(prevState => !prevState)
                                setArrowState(prevState => !prevState)
                            }} 
                            className="category-title__container"><p>CATEGORIES</p><svg className={`arrow-category ${arrowState && `arrow-category__active`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div> 
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
                            </>
                        }
                    </div>
                    :
                    <div
                        className="nav-categories__mobile">
                        <p 
                            onClick={() => {
                                setCategoriesList(prevState => !prevState)
                            }} 
                            className="asd">CATEGORIES</p>
                            {categoriesList &&
                                <>
                                    <ul className={`${mobileResponsive === undefined ? `list-categories` : `nav-categories__item__desktop`}`}>
                                        {categories.map((category) =>(
                                            <NavSubCategories
                                                key={category.id}
                                                categoryName={category.name}
                                                subLevels={category.sublevels}
                                            />
                                        ))}
                                    </ul>
                                </>
                            }
                    </div>
                }
            </div>
        ]

}

export {NavCategories};