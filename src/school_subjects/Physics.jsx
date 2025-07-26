import React from 'react'

import { Link } from 'react-router-dom';
import HomeLastPage from '../pages/fullHomepage/HomeLastPage';

import sixth from '../assets/images/sixth.jpeg';
import seventh from '../assets/images/seventh.jpeg';
import eight from '../assets/images/eight.jpeg';
import nine from '../assets/images/nine.jpeg';
import ten from '../assets/images/ten.jpeg';
import elevnth from '../assets/images/elevnth.jpeg';
import twelve from '../assets/images/twelve.png';

function Physics() {
  return (
<div className='blue_background'>

      <div className='toop'>
        <h1> FUTURE</h1>
       <Link to={"/"}> <p>Home</p></Link>
      </div>

      <div>
        <div className='standards'>
          <img src={sixth} className='standard_pic'/>
          <a href='https://www.extramarks.com/studymaterials/icse/icse-syllabus-class-6-physics/'><button className='see_button'>Learn</button></a>
        </div>

        <div className='standards'>
        <img src={seventh} className='standard_pic'/>
         <a href='https://www.extramarks.com/studymaterials/icse/icse-syllabus-class-7-physics/'><button className='see_button'>Learn</button></a>
        </div>


        <div className='standards'>
        <img src={eight} className='standard_pic'/>
        <a href='https://www.doubtnut.com/class-8/physics'> <button className='see_button'>Learn</button></a>a
        </div>


        <div className='standards'>
        <img src={nine} className='standard_pic'/>
        <a href='https://www.khanacademy.org/science/in-in-class9th-physics-india'><button className='see_button'>Learn</button></a>
        </div>
        
        <div className='standards'>
        <img src={ten}/>
        <a href='https://www.khanacademy.org/science/in-in-class10th-physics'><button className='see_button'>Learn</button></a>
          </div>


          <div className='standards'>
          <img src={elevnth} className='standard_pic'/>
          <a href='https://samacheerkalvi.guru/samacheer-kalvi-11th-physics-book-solutions/'><button className='see_button'>Learn</button></a>
          </div>

          <div className='standards'>
          <img src={twelve} className='standard_pic'/>
          <a href='https://nammakalvi.com/12th-standard/12th-physics-study-materials/'><button className='see_button'>Learn</button></a>
          </div>
      </div>
      <HomeLastPage/>
   </div>
  )
}

export default Physics
    