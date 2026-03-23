import { useEffect, useState } from 'react';
import { useParams ,useNavigate } from "react-router";


function   RecipeDetail(props) {

  return (
    <div className="max-w-[800px] flex flex-col justify-start items-start text-left gap-5 m-auto">
     
      <div>
         <h1>{props.recipe.name}</h1>
         <span className="bg-gray-500 rounded-lg text-white px-2 py-1">{props.recipe.cuisine}</span> 
      </div>
      
      <img src={props.recipe.image} className="w-[600px] rounded-lg"></img>
      <div>
        <h2>Details : </h2> 
        <ul>
            <li>Difficulty : {props.recipe.difficulty}</li>
            <li>Cooking Time : {props.recipe.cookTimeMinutes}</li>
            <li>Preparation Time : {props.recipe.prepTimeMinutes}</li>
            <li>Servings : {props.recipe.servings}</li>
        </ul>
      </div>
       <div>
        <h2>Instructions : </h2> 
        <ul>
        {
           props.recipe.instructions.map(
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
           props.recipe.ingredients.map(
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