import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useRef,useEffect} from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({src,index}) {
 
  const navigate=useNavigate();

  function OpenVideo()
  {
    navigate("/OpenVideoPage",{state:{src:src}})
  }
  
  return (
    <div onClick={OpenVideo} >

       <HoverVideoPlayer videoSrc={src} playbackRangeStart={0} playbackRangeEnd={6} style={{width:"100%"}}/>
       <div>Lorem ipsum dolor sit amet.
       </div>

       </div>
  )
}