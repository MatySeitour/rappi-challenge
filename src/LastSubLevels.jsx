function LastSubLevels({subLevel, setLastSubLevel, lastSubLevel}){
    
    return(
        <ul onClick={() => setLastSubLevel(!lastSubLevel)}>
            {subLevel.map((subItem) => (
                <li>{subItem.name}</li>
            ))}
        </ul>
    )
}

export {LastSubLevels}