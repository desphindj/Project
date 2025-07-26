import React from 'react'

import { Link } from 'react-router-dom';
import HomeLastPage from '../pages/fullHomepage/HomeLastPage';



function Python() {
  return (
<div className='blue_background'>

      <div className='toop'>
        <h1> FUTURE</h1>
       <Link to={"/"}> <p>Home</p></Link>
      </div>

      <div>
        <div className='standard'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UrsmFxEIp5k?si=LGDFpFXez0Ej-rEd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'> </iframe></div>

        <div className='standard'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m67-bOpOoPU?si=zuotE7BaP88n9ZzV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='iframe' ></iframe></div>


        <div className='standard'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HAxm8n9QY50?si=L45KsYv4bD1m-cvF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   className='iframe'></iframe></div>

        <div className='standard'> 

        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K5KVEU3aaeQ?si=5guQn_MGZdca9Gr-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe>
        <div className='standard'> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eWRfhZUzrAc?si=Ck1Kk_apZpA4whf-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe> 
        </div>


        <div className='standard'> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LHBE6Q9XlzI?si=HgvzSLVWmMtQhzDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  className='iframe'></iframe></div>
      </div>
      <HomeLastPage/>
   </div>
  )
}

export default Python
    