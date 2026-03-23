import { useEffect, useState ,lazy, Suspense } from 'react';
import { useParams , useNavigate } from "react-router";


const RecipeDetailComponent = lazy(() => import('../RecipeDetail/RecipeDetail'));
const UserDetailComponent = lazy(() => import('../UserDetail/UserDetail'));



function   RecipeDetail() {
const [item, setItem] = useState({ name: '', image: '', difficulty: '', cookTimeMinutes: '', prepTimeMinutes: '', servings: '', ingredients: [] , instructions: [] });
const { id } = useParams();
const {type} = useParams();

const navigate = useNavigate();

useEffect(() => {
fetch(`https://dummyjson.com/${type}/${id}`)
.then(res => {
    if(res.status != 200) {
        navigate('/Error/Error404')
    }
    return res.json()
})
.then(data => setItem(data));
}, [id, type]);

  return (
    <div>
      {
        type == "recipes" ? (
          <Suspense fallback={<div>Loading...</div>}>
            <RecipeDetailComponent recipe={item} />
          </Suspense>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetailComponent user={item} />
          </Suspense>
        )
      }
    </div>
  )
}

export default RecipeDetail