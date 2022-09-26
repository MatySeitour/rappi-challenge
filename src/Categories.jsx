import { useParams } from "react-router-dom"
import callCategories from "../src/api/categories.json"

function Categories(){
    console.log(callCategories.categories)
    const {id} = useParams()
    return[
        <p>{id}</p>
    ]
}

export {Categories}