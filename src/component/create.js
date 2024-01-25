import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const history = useNavigate();

  const header = {"Access-Control-Allow-origin" : "*"};

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("click_hua");
    axios.post("https://65634493ee04015769a6fc46.mockapi.io/crud", {Name: Name, Email:Email, header,})
    .then(()=>{
      history("/read");
    });
  };

    

  return(
  <>
  
  <div  className="d-flex justify-content-between m-2">
  <h2 >Creation step</h2>
    <Link to="/read">
      <button className="btn btn-secondary"> show data</button>
    </Link>
  </div>
  
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>setName(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
  </div>

  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  </>
  )
};

export default Create;