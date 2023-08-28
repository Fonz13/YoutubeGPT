import React from 'react'
import Navbar from './Navbar'
import YoutubeEmbed from './YoutubeEmbed'
/*sidebar* */

const Videviewer = (props) => {
  console.log(props);
  return (
    <div className='Videviewer'>
        <Navbar/>
        <YoutubeEmbed embedId= {props.videoID}/>
    </div>
  )
}

export default Videviewer