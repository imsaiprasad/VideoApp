import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Trail() {

    useEffect(() => {
        AOS.init({duration:3000});
      }, [])


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        

        <div data-aos="fade-right" style={{marginTop:"200px",display:"flex",justifyContent:"center",width:"600px",border:"2px solid"}}>
            
            <div data-aos="flip-left" >
                <img src='https://i.pinimg.com/236x/c1/c2/a5/c1c2a50307cbe589aeeb14b77867eb56.jpg'/>
            </div>

        </div>   

        <div data-aos="fade-right" style={{marginTop:"200px",display:"flex",justifyContent:"center",width:"600px"}}>
            
            <div data-aos="flip-right" >
                <img src='https://i.pinimg.com/236x/c1/c2/a5/c1c2a50307cbe589aeeb14b77867eb56.jpg'/>
            </div>

        </div> 
           
    

        </div>
  )
}

export default Trail