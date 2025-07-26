import React from 'react'
import './hdcf.css'

import physics from '../../assets/images/physics.jpg';
import maths from '../../assets/images/maths.jpg';

import Learn from '../../assets/images/Learn.jpeg';
import learn2 from '../../assets/images/learn2.jpeg';
import biology from '../../assets/images/biology.jpg';
import chemistry from '../../assets/images/chemistry.avif';
import mongodb from '../../assets/images/mongodb.png';
import sql from '../../assets/images/sql.png';
import learn1 from '../../assets/images/learn1.jpg';
import learn33 from '../../assets/images/learn33.jpg';


import { Link } from 'react-router-dom';
function Homemiddle() {
  return (

    <div className='middle-home'>
        <div className='middle4-box'>
          <div>  <img src={physics} className='imagee'/> </div>
          <p className='font'>Learn Physics Easier and Faster</p>
          <Link to={"/physics"}><button className='see_button' >Learn Now</button></Link>

        </div>

        <div className='middle4-box'>
          <div> <img src={chemistry} className='imagee'/> </div>
          <p className='font'>Learn Chemistry </p>
          <Link to={"/chemistry"}><button className='see_button'>Learn Now</button></Link>
        </div>

        <div className='middle4-box'>
          <div> <img src={biology} className='imagee'/> </div>
          <p className='font'>Learn Biology </p>
          <Link to={"/biology"}><button className='see_button'>Learn Now</button></Link>
        </div>

        <div className='middle4-box'>
          <div> <img src={maths} className='imagee'/> </div>
          <p className='font'>Learn Maths faster </p>
          <Link to={"/maths"}> <button className='see_button'>Learn Now</button></Link>
        </div>




        <div className='middle3-box'>
          <div>
             <img src={learn1} className='imag'/> 
            <div className='para'> 
              <h3>Discover the Future of Learning</h3>
              <p className='font_size'>Unlock your potential with our flexible, expert-led online courses designed to fit your schedule and goals. Whether you're looking to upskill, switch careers, or explore a new passion, our platform offers thousands of high-quality courses across tech, business, design, and more. Learn at your own pace, from anywhere in the world, and earn industry-recognized certifications that help you stand out. Join a global community of learners and start building the future you want—one course at a time.</p>

            </div>
          </div>
          <div className='learn_para'>
            <h3 >Learn Without Limits</h3>
            <p >Step into a world of opportunity with our curated collection of online courses, crafted by leading experts and tailored to meet real-world demands. Whether you're advancing your career or exploring something new, our platform empowers you with the skills and confidence to grow. With flexible learning, hands-on projects, and recognized certifications, you’ll gain more than knowledge—you’ll gain momentum. Start your learning journey today and turn your ambition into achievement.</p>
            <div> <img src={learn33} className='imag'/>  </div>
          </div>
        </div>




        <div>
           
           <div className='wide_box'>
            <img src={mongodb} className="mongo_img"/>
            <Link to={"/physics"}><button className='see_buttons' >Learn Now</button></Link>
           </div>
           <div className='wide_box'>
           <img src={sql} className="mongo_img"/>
           <Link to={"/physics"}><button className='see_buttons' >Learn Now</button></Link>

           </div>
        </div>

    </div>
  )
}

export default Homemiddle
