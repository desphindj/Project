import React from 'react'

import { Link } from 'react-router-dom';
import HomeLastPage from '../pages/fullHomepage/HomeLastPage';

import sixth from '../assets/images/sixth.jpeg';
import seventh from '../assets/images/seventh.jpeg';
import eight from '../assets/images/eight.jpeg';
import nine from '../assets/images/nine.jpeg';
import ten from '../assets/images/ten.jpeg';
import elevnth from '../assets/images/elevnth.jpeg';
import twelve from '../assets/images/twelve.jpg';

function Mongodb() {
  return (
<div className='blue_background'>

      <div className='toop'>
        <h1> FUTURE</h1>
       <Link to={"/"}> <p>Home</p></Link>
      </div>

      <div>
        <div className='standards'>
          <img src={sixth} className='standard_pic'/>
          <button className='see_button'>Learn</button>
        </div>

        <div className='standards'>
        <img src={seventh} className='standard_pic'/>
        <button className='see_button'>Learn</button>
        </div>


        <div className='standards'>
        <img src={eight} className='standard_pic'/>
        <button className='see_button'>Learn</button>
        </div>


        <div className='standards'>
        <img src={nine} className='standard_pic'/>
        <button className='see_button'>Learn</button>
        </div>
        
        <div className='standards'>
        <img src={ten}/>
        <button className='see_button'>Learn</button>
          </div>


          <div className='standards'>
          <img src={elevnth} className='standard_pic'/>
          <button className='see_button'>Learn</button>
          </div>

          <div className='standards'>
          <img src={twelve} className='standard_pic'/>
          <button className='see_button'>Learn</button>
          </div>
      </div>
      <HomeLastPage/>
   </div>
  )
}

export default Mongodb
    