import { useParams } from "react-router-dom"
import callCategories from "../src/api/categories.json"


function SubCategory(){
    const {idCategory} = useParams()
    const {idSubCategory} = useParams()

    return[
        <p>{idCategory}</p>,
        <p>{idSubCategory}</p>
    ]
}

export {SubCategory};