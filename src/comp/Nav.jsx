import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './nav.css'
function Nav() {
  return (
    <div>
      <div className='top'>
        <div className='webname'>𝔉𝔘𝔗𝔘ℜ𝔈</div>
        <div className='dropdownboxes'>
          <p > 
            <NavLink to={"/"} className={"link"}> Home</NavLink>
            </p>
          {/* <p>
          <NavLink to={"/Buy"} className={"link"}>Jobs</NavLink>
            </p> */}
          <p>
          <NavLink to={"/Cart"} className={"link"}>Contact Us</NavLink>
            </p>
            <p>
          <NavLink to={"/aboutus"} className={"link"}>About us</NavLink>
            </p>
        </div>
        <div className='total-searchbar'>
          <input type='text' className='searchbox'/> 
          <button>Search</button>
          <Link to={"/Login"}><button>SIGN IN</button></Link>
          <Link to={"/login2"}><button>LOGIN</button></Link>
          </div>
      </div>
        {/* <div className='box'>
            <ul>

               <li className='country'>
                Countries
                <div className='dropbownbox-country'> 
                  <Link to={"/america"} className='country-link'>America</Link> <br/>
                  <Link to={"russia"} className='country-link'>Russia</Link><br/>
                  <Link to={"/usa"} className='country-link'>USA</Link><br/>
                  <Link to={"uk"} className='country-link'>UK</Link><br/>
                  <Link to={"/canada"} className='country-link'>Canada</Link><br/>
                  <Link to={"/australia"} className='country-link'>Australia</Link>
                  </div>
                </li>

                <li>State</li>
                <li>District</li>
               
            </ul>
        </div> */}
    </div>
  )
}

export default Nav

