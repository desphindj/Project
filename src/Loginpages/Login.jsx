import {useState} from "react";
import axios from "axios";
function Login() {
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
    <>

    <div className="">
    

      <form onSubmit={handleSubmit} className="tab">

        <input 
        type="text "
        className=""
        onChange={(e)=>setroll(e.target.value)}required
        value={Rollno}
        placeholder="Enter your Roll no"
        
        />
        <br/>

        <input 
        type="text"
        className=""
        onChange={(e)=>setName(e.target.value)}required
        value={Name}
        placeholder="Enter your Name"
        /><br/>

        <input 
        type="text"
        className=""
        onChange={(e)=>setEmail(e.target.value)}required
        value={Email}
        placeholder="Enter your Email "
        />
        <br/>

        <input 
        type="text"
        className=""
        onChange={(e)=>setDetail(e.target.value)}required
        value={Detail}
        placeholder="Enter your details"
        />
        
        <button className="button">click here</button>
      </form>
    </div>
    </>
  );
}

export default Login;
