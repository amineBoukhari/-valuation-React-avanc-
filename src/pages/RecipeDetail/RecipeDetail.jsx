import { useEffect, useState } from 'react';
import { useParams ,useNavigate } from "react-router";


function   RecipeDetail() {
const [recipe, setRecipe] = useState({ name: '', image: '', difficulty: '', cookTimeMinutes: '', prepTimeMinutes: '', servings: '', ingredients: [] , instructions: [] });
const { id } = useParams();

const navigate = useNavigate();

useEffect(() => {
fetch(`https://dummyjson.com/recipes/${id}`)
.then(res => {
    if(res.status != 200) {
        navigate('/Error/Error404')
    }
    return res.json()
})
.then(data => setRecipe(data));
}, [id]);

  return (
    <div className="max-w-[800px] flex flex-col justify-start items-start text-left gap-5 m-auto">
     
      <div>
         <h1>{recipe.name}</h1>
         <span className="bg-gray-500 rounded-lg text-white px-2 py-1">{recipe.cuisine}</span> 
      </div>
      
      <img src={recipe.image} className="w-[600px] rounded-lg"></img>
      <div>
        <h2>Details : </h2> 
        <ul>
            <li>Difficulty : {recipe.difficulty}</li>
            <li>Cooking Time : {recipe.cookTimeMinutes}</li>
            <li>Preparation Time : {recipe.prepTimeMinutes}</li>
            <li>Servings : {recipe.servings}</li>
        </ul>
      </div>
       <div>
        <h2>Instructions : </h2> 
        <ul>
        {
           recipe.instructions.map(
            instruction => {
                return (
                    <li>{instruction}</li>
                )
            }
           ) 
        }
        </ul>
      </div>

         <div>
        <h2>Directions : </h2> 
        <ul>
        {
           recipe.ingredients.map(
            ingredient => {
                return (
                    <li>{ingredient}</li>
                )
            }
           ) 
        }
        </ul>
      </div>
    </div>
  )
}

export default RecipeDetail