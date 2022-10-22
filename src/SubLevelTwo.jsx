import { useState } from "react"

function SubLevelTwo({subLevelsTwo}){
    console.log(subLevelsTwo)
    const [lastSubLevel, setLastSubLevel] = useState(false);
    const key= 1
    return(
        <ul className="last-sublevel__container">
            {subLevelsTwo.map((subLevel) => (
                <li key={subLevel.id} className="last-sublevel__item" onClick={() => setLastSubLevel(!lastSubLevel)}>
                    <p>{subLevel.name}</p>
                    {
                                subLevelsTwo.sublevels === undefined &&
                                    <input className="sublevel-search" placeholder="there are no more sublevels in this category, write the name of the product you are looking for"></input>
                    }
                </li>
            ))}
            {/* <input key={key} className="sublevel-search" placeholder="there are no more sublevels in this category, write the name of the product you are looking for"></input> */}
        </ul>
    )
}

export {SubLevelTwo}