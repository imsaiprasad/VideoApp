import React from 'react'
import { useLocation } from 'react-router-dom'
import { Player, BigPlayButton  } from 'video-react';
import Header from '../components/Header'


function VideoPage() {
const location=useLocation()
// {location.state.src}
  return (
    <div>
   <Header />
    <div style={{display:"flex",justifyContent:"flex-start",margin:"20px"}}>
    <div style={{width:"70%"}}>
     
     <Player>
      <source src={location.state.src} />
      <BigPlayButton position="center" />
    </Player>

    </div>
    </div>
    
    </div>
  )
}

export default VideoPage