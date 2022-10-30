import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingIn.css";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const User = () => {
  const [doctor, setDoctor] = useState(false);
  const [loginpage, setLoginpage] = useState(false);
  const [user, setUser] = useState(true);
  const [DiagnosticCenter, setDiagnosticCenter] = useState(false);
  const[Info,setInfo]=useState({});

 const[newUser, setNewUser]=useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    address:"",
    password_1:"",
    password_2:""
 })
 const[newDoctor, setNewDoctor]=useState({
  name:"",
  username:"",
  email:"",
  phone:"",
  Registation:"",
  address:"",
  password_1:"",
  password_2:""
})
 const handleDoctor=(e)=>{
  const{name,value}=e.target;
  setNewDoctor({
      ...newDoctor,
      [name]: value,
  })
  console.log(name,value)
 }
 const handleChange=(e)=>{
  const{name,value}=e.target;
  setNewUser({
      ...newUser,
      [name]: value,
  })
  console.log(name,value)
 }
 const userSubmit=(e)=>{
  e.preventDefault();
  const{name,username,email,phone,address,password_1,password_2}=newUser;
 
  if(name&&username&&email&&phone&&address&&password_1&&regex.test(email)&&password_2&&password_1===password_2&&password_1>=6){
    
   axios.post('http://localhost:5000/Singup/user',newUser )
  .then(res=>setLoginpage(true))
  }
  else if(!regex.test(email)) alert('email is invalid')
  else if(password_1!==password_2)alert('password 1 & password 2 does not match')
  else if(password_1<=6)alert('password lenght must be greater then 6')
  else  alert('Invalid input')
}
const doctorSubmit=(e)=>{
  e.preventDefault();
  const{name,username,email,phone,Registation,address,password_1,password_2}=newDoctor;
 
  if(name&&username&&email&&phone&&address&&Registation&&password_1&&regex.test(email)&&password_2&&password_1===password_2&&password_1>=6){
    
   axios.post('/Singup/doctor',newDoctor )
  .then(res=>alert(JSON.stringify(res.data)))
  }
  else if(!regex.test(email)) alert('email is invalid')
  else if(password_1!==password_2)alert('password 1 & password 2 does not match')
  else if(password_1<=6)alert('password lenght must be greater then 6')
  else  alert('Invalid input')

}
let navigate = useNavigate();
useEffect(()=>{
  loginpage&& alert("Sing up Successful")
  loginpage && navigate("/login", { replace: true });
  
},[loginpage])

  return (
    
    <div class="account">

      <div class="login">
        {user && !doctor && !DiagnosticCenter&&
          <form  method="POST">
            <h2>Create Account</h2>
            <h2>As a Normal User</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name "
              value={newUser.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="username "
              value={newUser.username}
              onChange={handleChange}
              required
            />
            <input type="email" name="email" placeholder="Email "   value={newUser.email}    onChange={handleChange} rquired/>

            <input
              type="number"
              name="phone"
              placeholder=" Phone number "
              value={newUser.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address "
              value={newUser.address}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password_1"
              placeholder="New Password"
              value={newUser.password_1}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password_2"
              placeholder="Confirm Password"
              value={newUser.password_2}
              onChange={handleChange}
              required
            />
            <button type="submit" name="reg" value="submit" onClick={userSubmit}>
              <b>Register </b>
            </button>
          </form>
        }
        {  doctor && !DiagnosticCenter&&
          <form action="" method="post">
            <h2>Create New Accout</h2>
            <h2>As a Doctor</h2>
            <input
              type="text" 
              name="name"
              placeholder="Your Name"
              value={newDoctor.name}
              onChange={handleDoctor}
              required
            />
               <input
              type="text" 
              name="username"
              placeholder="User Name"
              onChange={handleDoctor}
              value={newDoctor.username}
              required
            />
            <input type="email" name="email" placeholder="Your Email" onChange={handleDoctor}
              value={newDoctor.email} required/>
            <input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              onChange={handleDoctor}
              value={newDoctor.phone}
              required
            />
             <input
              type="number"
              name="Registation"
              placeholder="Doctor Registation Number"
              onChange={handleDoctor}
              value={newDoctor.Registation}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address "
              onChange={handleDoctor}
              value={newDoctor.address}
              required
            />
            <input
              type="password"
              name="password_1"
              placeholder="New Password"
              onChange={handleDoctor}
              value={newDoctor.password_1}
              required
            />
            <input
              type="password"
              name="password_2"
              placeholder=" Confirm Password  "
              onChange={handleDoctor}
              value={newDoctor.password_2}
              required
            />
            <button type="submit" name="reg" value="submit" onClick={doctorSubmit}>
              <b>Register </b>
            </button>

           
            <p  onClick={()=>   setDiagnosticCenter(true) &&setDoctor(false) }>Create Account As a Diagnostic Center</p>
          </form>
        }
        {DiagnosticCenter &&
          <form action="" method="post">
            <h2>Create Account</h2>
            <h2> As a Diagnostic Center</h2>
            <input
              type="text"
              name="username"
              placeholder="Diagnostic Center Name "
              required
            />
            <input type="email" name="email" placeholder="Email " />
            <input
              type="number"
              name="phone"
              placeholder=" Mobile Number "
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address "
              required
            />
            <input
              type="password"
              name="password_1"
              placeholder=" Password "
              required
            />
            <input
              type="password"
              name="password_2"
              placeholder=" Confirm Password  "
              required
            />
            <button type="submit" name="reg" value="submit">
              <b>Register </b>
            </button>

           
            
          </form>
        }
      </div>
    </div>
  );
};

export default User;
