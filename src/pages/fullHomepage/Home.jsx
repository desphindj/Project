import React, { use } from 'react'
import { useState } from 'react';
import './hdcf.css'
import one from '../../assets/images/one.jpg';
import two from '../../assets/images/2.jpg';
import three from '../../assets/images/3.jpg';
import four from '../../assets/images/4.jpg';
import five from '../../assets/images/five.jpg';
import ds from '../../assets/images/ds.jpg';
import Homemiddle from './Homemiddle';
import Homemiddle2 from './Homemiddle2';
import Homemiddle3 from './Homemiddle3';
import Homedmiddle4 from './Homedmiddle4';
import Homemiddle5 from './Homemiddle5';
import HomeLastPage from './HomeLastPage';

const img=[one,two,three,four,five];

function Home() {
  const [index,setIndex]=useState(0);

  const handle=()=>{
    setIndex((e)=>(e+1) % img.length);
  };

  return (
    <>
    <div className="slider-container">
      
      <div className="slider">
        <img src={img[index]} alt={`Slide ${index}`} />
      </div>
      <button onClick={handle} className="next-button">{'>'}</button>
    </div>
    <div className='middle'>
              <Homemiddle/>
              {/* <Homemiddle2/> */}
              <Homemiddle3/>
              <Homedmiddle4/>
              <Homemiddle5/>
              <HomeLastPage/>
          </div>
    </>
  )
}

export default Home
