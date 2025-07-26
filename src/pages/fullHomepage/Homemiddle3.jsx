import React from 'react'
import { Link } from 'react-router-dom'
import java from '../../assets/images/java.webp';
import c_program from '../../assets/images/c_program.jpeg';
import c_hash from '../../assets/images/c_hash.jpeg';
import python from '../../assets/images/python.png';




function Homemiddle3() {
  return (
    <div>
        <div className='middle4-box'>
          <div>  <img src={java} className='imagee'/> </div>
          <p className='font'>Java Language</p>
          <Link to={"/java"}><button className='see_button' >Learn Here</button></Link>

        </div>



        <div className='middle4-box'>
          <div> <img src={c_program} className='imagee'/> </div>
          <p className='font'>C - Language</p>
          <Link to={"/c"}><button className='see_button'>Learn Here</button></Link>
        </div>



        <div className='middle4-box'>
          <div> <img src={c_hash} className='imagee'/> </div>
          <p className='font'> c# language </p>
          <Link to={"/chash"}><button className='see_button'>Learn Here</button></Link>
        </div>

        

        <div className='middle4-box'>
          <div> <img src={python} className='imagee'/> </div>
          <p className='font'>Python language </p>
          <Link to={"/python"}><button className='see_button'>Learn Here</button></Link>
        </div>
    </div>
  )
}

export default Homemiddle3
