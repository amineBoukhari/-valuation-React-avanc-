import { Outlet } from 'react-router';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router';
function Layout() {

  const [allUsers , setAllUsers] = useState([]) 
  const [allRecipes , setAllRecipes] = useState([]) 
  const [toRedirect , setToRedirect] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    if(toRedirect != null){
      navigate(`/detail/${toRedirect.type}/${toRedirect.id}`)
    }
  }, [toRedirect])

  useEffect(() => {

  fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(data => {
      data.recipes.forEach(element => {
        element.type = "recipes"
      })
      return data;
  })
  .then(data => {
      setAllRecipes(data.recipes);
  });
  }, []);



  useEffect(() => {

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => {
      data.users.forEach(element => {
        element.type = "users"
      })
      return data;
  })
.then(data => {
    setAllUsers(data.users);
});
}, []);

  return (
    <>

      <SearchBar setToRedirect={setToRedirect} items={[...allRecipes, ...allUsers]} />
      <Outlet />
    </>
  )
}

export default Layout
