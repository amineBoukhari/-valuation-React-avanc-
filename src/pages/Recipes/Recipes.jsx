import { useEffect, useState  } from 'react';
import { Link } from 'react-router';

export default function Recipes() {
const [recipes, setRecipes] = useState([]);


useEffect(() => {
fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(data => {
    setRecipes(data.recipes);
    console.log(data.recipes);
});
}, []);

  return (
     <div className='flex flex-wrap w-full gap-4 p-4 justify-center'>
      {recipes.map(recipe => {
        return (
    <Link to={`/recipes/${recipe.id}`} key={recipe.id} className={`w-[200px] h-[200px] bg-gray-200 p-4 rounded-lg flex flex-col justify-end items-center gap-2 bg-contain relative hover:cursor-pointer hover:scale-105`}>
             <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${recipe.image})`,
      }}
    />

    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div  className='z-[10]'>
      <h2 className='z-[10] !text-white'>{recipe.name}</h2>
      <p className='z-[10] !text-white'>{recipe.cookTimeMinutes}</p>
      <p className='z-[10] !text-white'>{recipe.difficulty}</p>
    </div>
            
            
          </Link>
        );
      })}
    </div>
  )
}