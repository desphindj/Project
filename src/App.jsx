import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


import Buy from './pages/Buy'
import Home from './pages/fullHomepage/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Root from './layout/Root'
import Login from './Loginpages/Login'
import Loginbar from './Loginpages/Loginbar'
import Physics from './school_subjects/Physics'
import Maths from './school_subjects/Maths'
import Chemistry from './school_subjects/Chemistry'
import Biology from './school_subjects/Biology'
import Sql from './school_subjects/Sql'
import Mongodb from './school_subjects/Mongodb'
import Java from './school_subjects/Java'
import Python from './school_subjects/Python'
import C from './school_subjects/C'
import Chash from './school_subjects/Chash'
import Aboutus from './pages/Aboutus'
import Login2 from './pages/Login2'
function App() {

    const router=createBrowserRouter(
        createRoutesFromElements(
            <>
            <Route path="/" element={<Root/>}>
                 <Route index element={<Home/>}/>
                <Route path='Buy' element={<Buy/>}/>
                <Route path='details' element={<Details/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/country' element={<Loginbar/>}/>
            <Route path='/physics' element={<Physics/>}/>
            <Route path='/maths' element={<Maths/>}/>
            <Route path='/chemistry' element={<Chemistry/>}/>
            <Route path='/biology' element={<Biology/>}/>
            <Route path='/sql' element={<Sql/>}/>
            <Route path='/mongoose' element={<Mongodb/>}/>
            <Route path='/java' element={<Java/>}/>
            <Route path='/python' element={<Python/>}/>
            <Route path='/c' element={<C/>}/>
            <Route path='/chash' element={<Chash/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/login2' element={<Login2/>}/>
            
            
            </>
        ));
     
  return <RouterProvider router={router}></RouterProvider>;
  
};

export default App;
