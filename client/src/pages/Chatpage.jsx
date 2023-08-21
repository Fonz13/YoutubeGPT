import React from 'react'
import  Chat  from '../components/Chat'
import  Videoveiwer  from '../components/Videviewer'

const Chatpage = () => {
  return (
    <div className = "Chatpage-container">
        <div className="container">
            <Videoveiwer />
            <Chat/>

        </div>
    </div>
  )
}

export default Chatpage
