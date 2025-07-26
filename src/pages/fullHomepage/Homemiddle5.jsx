import React from 'react'
import { Link } from 'react-router-dom'
import geography from '../../assets/images/geography.jpg';
import history from '../../assets/images/history.jpg';
import science from '../../assets/images/science.avif';
import englsih from '../../assets/images/englsih.jpeg';


function Homemiddle5() {
  return (
    <div>
      <div>
        <div className='middle4-box'>
          <div>  <img src={geography} className='imagee'/> </div>
          <p className='font'>Learn Geography </p>
          <Link to={"/physics"}><button className='see_button' >Click Here</button></Link>

        </div>

        <div className='middle4-box'>
          <div> <img src={history} className='imagee'/> </div>
          <p className='font'>Learn History  </p>
          <button className='see_button'>Click Here</button>
        </div>

        <div className='middle4-box'>
          <div> <img src={science} className='imagee'/> </div>
          <p className='font'>Learn Science </p>
          <button className='see_button'>Click Here</button>
        </div>

        <div className='middle4-box'>
          <div> <img src={englsih} className='imagee'/> </div>
          <p className='font'>Learn English </p>
          <button className='see_button'>Click Here</button>
        </div>
    </div>
    </div>
  )
}

export default Homemiddle5
