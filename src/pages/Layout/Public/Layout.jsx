import { Outlet } from 'react-router';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router';
function Layout() {

  const [toRedirect , setToRedirect] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    if(toRedirect != null){
      navigate(toRedirect)
    }
  }, [toRedirect])
  return (
    <>

      <SearchBar setToRedirect={setToRedirect} />
      <Outlet />
    </>
  )
}

export default Layout
