import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
import Recipes from './pages/Recipes/Recipes'
import Detail from './pages/Detail/Detail'
import Error404 from './pages/Error/Error404'
import Layout from './pages/Layout/Public/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#FDFAF5] p-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="recipes" element={<Recipes />} />
            <Route path="detail/:type/:id" element={<Detail />} />
           
            <Route path="Error/Error404" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  //<Route path="recipes/:id" element={<RecipeDetail />} />
}

export default App
