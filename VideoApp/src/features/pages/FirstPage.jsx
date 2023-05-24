import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import axios from 'axios'

function FirstPage() {
  const [videos, setVideos] = useState([])


  useEffect(()=>{

    // const axios = require("axios");





  const VideoArr = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  ]

  // const VideoArr=["https://www.w3schools.com/html/mov_bbb.mp4"]

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <div
        style={{
          margin:"20px",
        }}
      >
        <div class="cols-lg-12">
          <div class="row" style={{ height: 'auto' }}>
            {VideoArr.map((i,index) => {
              return (
                <div
                  class="col-lg-3"
                  style={{ margin: '10px' }}
                >
                  <Card src={i} index={index}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
