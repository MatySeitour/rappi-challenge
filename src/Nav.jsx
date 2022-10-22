import { useState } from "react";
import "../public/styles.css"
import { Logo } from "./Logo";
import { NavSearch } from "./NavSearch";
import { NavCategories } from "./NavCategories";
import { useMedia } from "./CustomHooks/useMedia";


function Nav(){
    const [navState, setNavState] = useState(false);
    const mobileResponsive = useMedia('(max-width: 760px)');
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
                    {mobileResponsive ? 
                        <>
                            <svg 
                            onClick={
                                () => setNavState(prevNavState => !prevNavState)
                            } 
                            className="nav-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                                <Logo 
                                    mobileResponsive={mobileResponsive}
                                />

                            <NavSearch />
                        </>
                        :
                        <>
                            <div className="nav-desktop__container">
                                <div className="nav-logo__container">
                                    <Logo />
                                    <NavSearch />
                                </div>

                                <ul className="nav-items__container">
                                    <li key={navInfo[1].id} className="nav-item">HOME</li>
                                    <NavCategories 
                                        idKey={navInfo[3].id}
                                        mobileResponsive={mobileResponsive}
                                    />
                                    <li key={navInfo[2].id} className="nav-item">LOG IN</li>
                                </ul>
                               
                            </div>
                        </>
                }
                    
                </ul>
                {navState && 
                <>
                <div className="nav-mobile">
                    <ul className="nav-mobile__container">
                        <div className="closed-nav__container">
                            <span 
                                onClick={
                                    () => setNavState(prevNavState => !prevNavState)
                                } 
                                className="closed-nav">
                                    X
                            </span>
                        </div>
                        
                        <li key={navInfo[1].id} className="nav-mobile__items">HOME</li>
                        <NavCategories idKey={navInfo[3].id}/>
                        <li key={navInfo[2].id} className="nav-mobile__items">LALA</li>
                    </ul>
                </div>
                </>
                }
            </div>,
        ]

    
}

export {Nav};