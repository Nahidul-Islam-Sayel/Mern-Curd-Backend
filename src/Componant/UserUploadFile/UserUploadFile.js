import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserUploadFile.css';
const UserUploadFile = () => {
  let navigate = useNavigate();
  const[successfullPayment,setSucessfullPayment]= useState(false);
  const[user,setnewUser]=useState({
    name:"",
    email:"",
    phone:"",
    city:"",
    group:""
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    console.log(name,value)
    setnewUser({
      ...user,[name]:value
    })
  }
  const userSubmitDoc=(e)=>{
    console.log('i am hitted')
    e.preventDefault();
    const{name,email,phone,city}=user;
   
    if(name&&email&&phone&&city){
     axios.post('http://localhost:5000/Upload/DonateBlood',user )
    .then(res=>alert(res.data.message),setSucessfullPayment(true))
    }

   
  }
  useEffect(()=>{
    successfullPayment===true && navigate("/profile", { replace: true });
 
  },[successfullPayment])
    return (
      <div className="container">
           
      <div className="card">
        <div className="card-image">	
          <h2 className="card-heading">
           Make A Blood Donor <br/>
            <small> Donate Blood Save Life</small>
          </h2>
        </div>
        <form className="card-form">
          <div className="input">
            <input type="text" placeholder="Name"     name="name"  value={user.name}  onChange={handleChange} className="input-field"  required/>
            
          </div>
              
                <div className="input">
            <input type="email" placeholder="Email"    name="email"  value={user.email}  onChange={handleChange} required/>
           
          </div>
          <div className="input">
            <input type="phone" placeholder="Phone"    name="phone"  value={user.phone}  onChange={handleChange} required/>
           
          </div>
          <br />
          <label for="cars">Choose a City Name:</label>     
          <div className="input">
        

<select  id="cars" type="text"  value={user.city}   name="city" onChange={handleChange}>
<option value=""></option>
  <option value="Sylhet">Sylhet</option>
  <option value="Dhaka">Dhaka</option>
  <option value="Chittagong">Chittagong.</option>
  <option value="Mymensingh.">Mymensingh</option>
  <option value="Rajshahi.">Rajshahi</option>
  <option value="Khulna">Khulna</option>
  <option value="Barisal">Barisal</option>
</select>
  
          </div>
          <br />
          <label for="cars">Blood Group:</label>     
          <div className="input">
        

<select  id="cars" type="text"  value={user.group}   name="group" onChange={handleChange}>
<option value=""></option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O+</option>
</select>
  
          </div>
          <div className="action">
            <button className="action-button" onClick={userSubmitDoc}>Register</button>
          </div>
        </form>
        <div className="card-info">
          <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>  
    );
};

export default UserUploadFile;