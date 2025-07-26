import {useState} from "react";
import axios from "axios";
import './login.css'

function Cart() {
  const [Rollno,setroll]=useState("");
  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Detail,setDetail]=useState("");

  const handleSubmit=  async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5002/form",{Rollno,Name,Email,Detail});
    alert("Data stored");
    setroll("");
    setName("");
    setEmail("");
    setDetail("");
  }
  return (
    <div className="login_background">
      <br/>  <br/> <br/> <br/>
    <div className="login_box">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="tab">

        <input 
        type="text "
        className="input"
        onChange={(e)=>setroll(e.target.value)}required
        value={Rollno}
        placeholder="Enter your Name"
        
        />
        <br/>

        <input 
        type="text"
        className="input"
        onChange={(e)=>setName(e.target.value)}required
        value={Name}
        placeholder="Enter your Phone Number"
        /><br/>

        <input 
        type="text"
        className="input"
        onChange={(e)=>setEmail(e.target.value)}required
        value={Email}
        placeholder="Enter your Email "
        />
        <br/>

        <input 
        type="text"
        className="input2"
        onChange={(e)=>setDetail(e.target.value)}required
        value={Detail}
        placeholder="Enter your Feedback"
        />
        
        <button className="button">click here</button>
      </form>
    </div>
    </div>
  );
}

export default Cart;
