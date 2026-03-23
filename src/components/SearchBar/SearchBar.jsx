import { Search } from 'lucide-react'
import { useState  , useEffect ,useRef} from 'react'
import { Link } from 'react-router'


function SearchBar(props) {


  const [open , setOpen] = useState(false) 
  const [FiltredItem , setFiltredItem] = useState([])

  const searchBarRef = useRef(null);

  const returnKey = (item) => {
    let keys = Object.keys(item);
    return keys
  }

  const filterRecipes = (value) => {
    setOpen(true)
    if(value=="") {
        setFiltredItem([])
        return
    }

    const temp = props.items.filter(item => {
    for (const key of returnKey(item)) {
        if (typeof item[key] === "string" && item[key].toLowerCase().includes(value.toLowerCase())) {
        return true;
        }
    }
    return false;
    });
  setFiltredItem(temp.slice(0, 10));
  console.log(temp);
};



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
            open == true  &&FiltredItem.length != 0 && (
                 <ul className='shadow-xl w-[450px] absolute px-5 py-2 z-14000 flex flex-col gap-3 bg-[#FDFAF5]'>
                    
            {
                FiltredItem.map((r=> {
                    return(
                    <li className='hover:cursor-pointer' onClick={() => props.setToRedirect({
                        id : r.id,
                        type :r.type
                    })} key={r.id}>
                        <div className='flex gap-2 hover:bg-gray-300 p-2 rounded-xs'>
                            <img className='w-10 rounded-xs' src={r.image}/>
                            <div>
                                <p> {r[returnKey(r)[1]]} </p>
                                <p>{r[returnKey(r)[7]]}</p>
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
