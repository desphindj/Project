import React from 'react'

import { Link } from 'react-router-dom';
import HomeLastPage from '../pages/fullHomepage/HomeLastPage';



function C() {
  return (
<div className='blue_background'>

      <div className='toop'>
        <h1> FUTURE</h1>
       <Link to={"/"}> <p>Home</p></Link>
      </div>

      <div>
        <div className='standard'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kGxSyqKbzsc?si=u2jq989wlcszI2Xn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='iframe'></iframe>
        </div>

        <div className='standard'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eIrMbAQSU34?si=OYv4BuaDXuCGWKDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe>
        </div>


        <div className='standard'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xTtL8E4LzTQ?si=EiyWUqlK44jx4iDG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe>
        </div>

        <div className='standard'> 

        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A74TOX803D0?si=nSOm0DDGcjNzOGlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe>

        <div className='standard'> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GoXwIVyNvX0?si=ysbvZX_MJI-_caQj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='iframe' > </iframe>
        </div>


        <div className='standard'> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Gex-j7GlCHc?si=M-qTrHdILDt6qXB-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe>
        </div>
      </div>
      <HomeLastPage/>
   </div>
  )
}

export default C
    