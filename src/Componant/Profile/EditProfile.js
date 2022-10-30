import React, { useEffect, useState } from 'react';
const EditProfile = () => {
    const [user,setUser]=useState([]);
    const [usergo,setUsergo]=useState(0);
    useEffect(()=>{
        fetch('/Singup/Alluserprofile?username='+sessionStorage.getItem('username'),)
        .then(res=>res.json())
        .then(res=>setUser(res))
    },[])

    const[userinfo,setnewUserInfo]=useState({
      name:"",
      email:"",
      phone:"",
      address:""

    })
    const userSubmit=(e)=>{
      e.preventDefault();
 
     
      console.log(user[0]);
       fetch(`http://localhost:5000/Singup/UpdateUserProfile/${user[0]._id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(userinfo)
       } )
      .then(res=>res.json())
      .then(res=>(alert("Update Successful")))
    
      

     
    }
    const handleChange=(e)=>{
      const{name,value}=e.target;
      setnewUserInfo({
        ...user,[name]:value
      })
    }
   


    return (
        <div class="account">
        <div class="login">
       
            <form action="" method="post">
              <h2>Edit Your Profile</h2>
              <input
                type="text"
                name="name"
                value={userinfo.name}
                
                onChange={handleChange}
                placeholder="Name"
                required
              />
              
              <input
                type="email"
                name="email"
                value={userinfo.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
                <input
                type="text"
                name="phone"
                value={userinfo.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
             
             <input
                type="text"
                name="address"
                value={userinfo.address}
                onChange={handleChange}
                placeholder=" Address"
                required
              />
             
              <button type="submit" name="reg" value="submit"  onClick={userSubmit} >
                <b>Edit Profile</b>
              </button>
  
              
            </form>
        
        </div>
      </div>
    );
};

export default EditProfile;