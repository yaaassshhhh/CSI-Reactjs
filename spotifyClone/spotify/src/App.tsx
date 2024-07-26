
import { Sidebar } from 'lucide-react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { useStateContext } from './context/ContextProvider';
import Discover from './pages/Discover';
import LikedSongs from './pages/LikedSongs';
import LoginButton from './components/Loginbtn';
import Callback from './components/Callback';
import SpotifyData from './components/SpotifyData';



function App() {

  // const {activeMenu} = useStateContext();
  
  return <div  className='flex relative'>
    {/* {activeMenu ? (<div className='w-72 fixed sidebar'>
        <Link to = "/" >
        <IoMdHome/>
        </Link>
        </div>) : (
          <div className='w-16 fixed sidebar'>
          <Link to = "/" >
          <IoMdHome/>
          </Link>
          </div>
        )}
        
        {activeMenu ? (<div className='w-72 fixed sidebar'>
          <Sidebar />
        </div>) : 
        (
          <div className='w-16 fixed sidebar'> <Sidebar /> </div>
        )} */}
        <div>
          <Routes>
            <Route path="/" element={<LoginButton/>} />
            <Route path="/callback" element={<Callback/>} />
            <Route path="/profile" element={< SpotifyData />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
          </Routes>
        </div>
      </div>
}

export default App
