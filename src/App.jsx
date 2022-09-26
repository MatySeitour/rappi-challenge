import { Nav } from './Nav'
import { Categories } from './Categories'
import { SubCategory } from './SubCategory'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Products } from './Products'

function App() {

  return (
    <BrowserRouter>

      <Nav />

      <Routes>
        <Route exact path='/' element={<Products />}/>
        <Route exact path='/categories/:id' element={<Categories />}/>
        <Route exact path='/categories/:idCategory/:idSubCategory' element={<SubCategory />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
