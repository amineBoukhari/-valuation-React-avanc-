import { Search } from 'lucide-react'
import { useState  , useEffect ,useRef} from 'react'
import { Link } from 'react-router'


function SearchBar(props) {


  const [allRecipes , setAllRecipes] = useState([]) 
  const [open , setOpen] = useState(false) 
  const [FiltredRecipes , setFiltredRecipes] = useState([])
  const searchBarRef = useRef(null);
 const filterRecipes = (value) => {
    setOpen(true)
    if(value=="") {
        setFiltredRecipes([])
        return
    }
 console.log(allRecipes);
  const temp = allRecipes.filter(r =>
    r.name.toLowerCase().includes(value.toLowerCase())
  );
  setFiltredRecipes(temp.slice(0, 10));
};

useEffect(() => {


fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(data => {
    setAllRecipes(data.recipes);
    console.log(data.recipes);
});
}, []);


useEffect(() => {
  document.addEventListener("click", (e) => {
    if(!searchBarRef.current.contains(e.target)){
        setOpen(false)
    }
   
  });

  
}, []);


  
  return (
    <div className='w-[fit-content]'>
        <div className='flex items-center' ref={searchBarRef}>
            <Search className="absolute left-12" />
            <input id="searchBar" type="text" placeholder="Search..." className="pl-10 border border-gray-300 rounded-md px-4 py-2 w-100" onChange={(e)=>{
                filterRecipes(e.target.value)
            }} />
        </div>

        {
            open == true  &&FiltredRecipes.length != 0 && (
                 <ul className='shadow-xl w-[450px] absolute px-5 py-2 z-14000 flex flex-col gap-3'>
                    
            {
                FiltredRecipes.map((r=> {
                    return(
                    <li className='hover:cursor-pointer' onClick={() => props.setToRedirect(`/recipes/${r.id}`)} key={r.id}>
                        <div className='flex gap-2 hover:bg-gray-300 p-2 rounded-xs'>
                            <img className='w-10 rounded-xs' src={r.image}/>
                            <div>
                                <p> {r.name} </p>
                                <ul className='flex gap-2'>
                                    {
                                        r.tags.slice(0,3).map(tag => {
                                            return (<li className='bg-gray-100 px-4 rounded-xs'>{tag}</li>)
                                        })
                                    }
                                </ul>
                            </div>
                           
                            
                            </div>
                    </li>
                    )
                }))
            }
        </ul>
            )
        }
       
    </div>
  )
}

export default SearchBar
