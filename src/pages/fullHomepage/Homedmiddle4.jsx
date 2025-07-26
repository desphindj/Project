import React from 'react'
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import javascript from '../../assets/images/javascript.jpeg';



function Homedmiddle4() {
  return (
    <div>
        <div className='home_middle4' >
            <img src={html} className='full_stack'/>
            <span style={{fontSize:"30px",marginRight:"300px"}}> HTML</span>
            <span style={{marginLeft:"0px"}}> This HTML file defines a basic web page that displays a list of technical skills. It uses standard HTML5 structure </span>
            <button className='see_button'>Learn Here</button>
        </div>


        <div className='home_middle4' >
        <img src={css} className='full_stack'/>
        <br/>        <br/>        <br/>        <br/>
        <span style={{fontSize:"30px",marginRight:"300px"}}> CSS   </span><br/>
        <span style={{marginLeft:"0px"}}> This css file defines a basic web page that displays a list of technical skills. It uses standard HTML5 structure </span>
        <button className='see_button'>Learn Here</button>
       </div>


       <div className='home_middle4' >
       <img src={javascript} className='full_stack'/>
       <span style={{fontSize:"30px",marginRight:"300px"}}> JAVASCRIPT</span>
       <span style={{marginLeft:"0px"}}> This JAVASCRIPT file defines a basic web page that displays a list of technical skills. It uses standard HTML5 structure </span>
       <button className='see_button'>Learn Here</button>
      </div>
    </div>
  )
}

export default Homedmiddle4
