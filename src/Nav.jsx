import { useState } from "react";
import "../public/styles.css"
import { Logo } from "./Logo";
import { NavSearch } from "./NavSearch";
import { NavCategories } from "./NavCategories";


function Nav(){
    const [navState, setNavState] = useState(false); 
    const navInfo = [
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
    ]
        return[
            <div key={navInfo[0].id} className="nav">
                <ul className="nav-container">
                    <svg 
                    onClick={
                        () => setNavState(prevNavState => !prevNavState)
                    } 
                    className="nav-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        <Logo />

                    <NavSearch />
                </ul>
                {navState && 
                <>
                <div className="nav-mobile">
                    <ul className="nav-mobile__container">
                        <span 
                             onClick={
                                () => setNavState(prevNavState => !prevNavState)
                            } 
                        className="closed-nav">X</span>
                        <li key={navInfo[1].id} className="nav-mobile__items">Home</li>
                        <NavCategories idKey={navInfo[3].id}/>
                        <li key={navInfo[2].id} className="nav-mobile__items">lala</li>
                    </ul>
                </div>
                </>
                }
            </div>,
        ]

    
}

export {Nav};