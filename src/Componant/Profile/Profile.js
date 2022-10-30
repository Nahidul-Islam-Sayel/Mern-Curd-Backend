import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { userContext } from '../../App';
import './Profile.css';
let k=1;
const Profile = () => {
    const[data,setData]=useState({});
    const[report,setReport]=useState([]);
    const[donor,setDonor]=useState([]);
    const[search,setSearch]=useState("");
    const[searrch,setSearrch]=useState("");
  const[searchCity,setSearchCity]=useState("");
    const[login,setLogin]= useContext(userContext);
      if(data.length>0){
        sessionStorage.setItem('login', true)
        setLogin(1)
    }
    

    
    useEffect(()=>{
     
        fetch('http://localhost:5000/Singup/Profile?username='+sessionStorage.getItem('username'),{
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
   
      fetch('http://localhost:5000/Upload/AllDonner',{
        method: 'GET'
      })
      .then(res=>res.json())
      .then(res=>
          setDonor(res) 
      )
    },[])


    return (
        <div class="container">
       { data[0] && <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                <div class="mt-3">
                  <h4>{data[0].username && data[0].username}</h4>
                  <p class="text-secondary mb-1">A family mamber of bongocare</p>
                  <p class="text-muted font-size-sm">{data[0].address&& data[0].address}</p>
              
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0">Name</h6>
                <span class="text-secondary"> {data[0].name && data[0].name}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0">Email</h6>
                <span class="text-secondary">  {data[0].email && data[0].email}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0">Phone</h6>
                <span class="text-secondary">   {data[0].phone && data[0].phone}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0">Address</h6>
                <span class="text-secondary"> {data[0].address && data[0].address}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <div class="row">
                <div class="col-sm-12">
              <NavLink to="/EdiProfile"><a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink>   
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
         
        <div className='bloodbody'>
            
            <div className='container textColor'>
                <br />
            <h5>Blood Donor && Volunteer List</h5>
               <input className='searchbar' type="text" placeholder='Blood Groph' 
          onChange={(event)=>{setSearrch(event.target.value);}}
          /><br/>
                <input className='searchbar' type="text" placeholder='City' 
          onChange={(event)=>{setSearchCity(event.target.value);}}
          />
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Group</th>
      <th scope="col">City</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  {donor&&donor.filter((data)=>{
      if(searrch===""&&searchCity===""){
        return data;
      }
      else if(data.group?.toLowerCase().includes(searrch?.toLowerCase())&&data.city?.toLowerCase().includes(searchCity?.toLowerCase())){
          return data;
      }

   }).map((data,key)=><tbody key={key}>
    <tr>
    
      <td>{data.name}</td>
      <td>{data.group}</td>
      <td>{data.city}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>

       <td><Link to={`/delete/${data._id}`}>Delete</Link></td>
      <td><Link to={`/Edit/${data._id}`}> Edit</Link></td>

    </tr>
    
  </tbody>)}
</table>  
        </div>
        </div>
          </div>
          </div>}
          </div>
    );
};

export default Profile;