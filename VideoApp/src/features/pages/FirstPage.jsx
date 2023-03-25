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

const options = {
  method: 'GET',
  url: 'https://steppschuh-json-porn-v1.p.rapidapi.com/porn/',
  params: {
    offset: '0',
    pornId: '5073292679446528',
    producerId: '4554967436230656',
    pornType: '4',
    count: '5',
    actorId: '5681034041491456',
    genreId: '5245132710346752'
  },
  headers: {
    'X-RapidAPI-Key': 'cf02e3f312mshdb9b0c29618f494p10e56bjsn321aab05d42e',
    'X-RapidAPI-Host': 'steppschuh-json-porn-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log("data : ",response.data);
}).catch(function (error) {
	console.error(error);
});

  },[])



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
