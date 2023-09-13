import React from 'react'
import { useNavigate} from "react-router-dom";



// can implement search funtion directly from navbar
const Navbar = () => {
  const navigate = useNavigate();

  const routeChange = () =>{
    let path = `/`;
    navigate(path);
  }

  return (
    <div className='Navbar'>
        <span className='logo'>YoutubeGTP</span>
        <button className='button' onClick={routeChange}>
            Return to search page
        </button>
    </div>
  )
}

export default Navbar
