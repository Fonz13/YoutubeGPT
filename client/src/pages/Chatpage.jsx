import React from 'react'
import  Chat  from '../components/Chat'
import  Videoviewer  from '../components/Videviewer'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';

const Chatpage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.state === null){
            navigate("/");
        }
    }, [location, navigate])


  return (
    <div className = "Chatpage-container">
        {location.state !== null &&
        <div className="container">
            <Videoviewer {...location.state}/>
            <Chat {...location.state}/>
        </div>
        }
    </div>
  )
}

export default Chatpage
