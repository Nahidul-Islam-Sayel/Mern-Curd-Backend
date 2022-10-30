import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
const DoctorProfile = () => {
  const[data,setData]=useState({});
  const[allUser,setAllUser]=useState([]);
  const[login,setLogin,docLogin, setDocLogin]= useContext(userContext);
  if(data.length>0){
    sessionStorage.setItem('Doclogin', true)
    setDocLogin(1)
}
  useEffect(()=>{  
    fetch('http://localhost:5000/Singupdoc/DocProfile?username='+sessionStorage.getItem('username'),{
      method: 'GET',
      headers:{
        'Content-Type' : 'application/json',
        "authorization" : `Bearer ${sessionStorage.getItem("Token")}`
      }
    })
    .then(res=>res.json())
    .then(res=>setData(res))
},[])
useEffect(()=>{
     
  fetch('http://localhost:5000/Upload/UploadReportPost',{
    method: 'GET'
  })
  .then(res=>res.json())
  .then(res=>
 setAllUser(res) 
  )
},[])

  return (
    <div class="container">
 {data[0]&& <div class="row gutters-sm">
     <div class="col-md-4 mb-3">
       <div class="card">
         <div class="card-body">
           <div class="d-flex flex-column align-items-center text-center">
             <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
             <div class="mt-3">
               <h4>{data[0].name&&data[0].name}</h4>
               <p class="text-secondary mb-1">A Doctors of bongocare</p>
               <p class="text-muted font-size-sm">{data[0]&&data[0].chamber}</p>
               <button class="btn btn-primary">Follow</button>
               <button class="btn btn-outline-primary">Message</button>
             </div>
           </div>
         </div>
       </div>
       <div class="card mt-3">
         <ul class="list-group list-group-flush">
           <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
             <h6 class="mb-0">Name</h6>
             <span class="text-secondary">{data[0].name&&data[0].name}</span>
           </li>
           <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
             <h6 class="mb-0">Email</h6>
             <span class="text-secondary">{data[0].email&&data[0].email}</span>
           </li>
           <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
             <h6 class="mb-0">Chamber</h6>
             <span class="text-secondary">  {data[0].chamber&&data[0].chamber}</span>
           </li>
           <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
             <h6 class="mb-0">Phone</h6>
             <span class="text-secondary"> {data[0].phone&&data[0].phone}</span>
           </li>
           <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
           <div class="row">
             <div class="col-sm-12">
           {/* <NavLink to="/EdiProfile"><a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink>    */}
             </div>
           </div>
           </li>
           <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
           <div class="row">
             <div class="col-sm-12">
           <form action="" encType="multipart/form-data">
             <input type="file" name="avater" id="" placeholder='Please Upload Your File' />
             <input type="submit" value="submit" name="submit" placeholder='submit' />
             </form> 
             </div>
           </div>
           </li>
           </ul>
       </div>
     </div>
     <div class="col-md-8">
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Report Name</th>
      <th scope="col">Date</th>
      <th scope="col">View Report</th>
    </tr>
  </thead>
  <tbody>
   {allUser&&allUser.map((data)=>(<tr>
      <th scope="row">{data.name}</th>
      <td>{data.testName}</td>
      <td>{data.date}</td>
      <Link to={`/viewReport/${data._id}`}>  <td> 
       View Report
          </td>  
          </Link> 
    </tr>
   ))}
  </tbody>
</table>
       </div>
       </div>}
       </div>
       
  );
};

export default DoctorProfile;