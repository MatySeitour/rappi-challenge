import { useParams } from "react-router-dom"
import callCategories from "../src/api/categories.json"

function Categories(){
    const {id} = useParams()
    return[
        <p key={2}>{id}</p>
    ]
}

export {Categories}