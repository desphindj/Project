import { Outlet } from "react-router-dom"
import Nav from "../comp/Nav"


function Root() {
  return (
    <>
        <Nav />
        <div style={{paddingTop:"60px"}}>
        <Outlet/>
    </div>
    </>
  )
}

export default Root
