import React, { useEffect, useState } from 'react';
const Doctor = () => {
  const[donor,setDonor]=useState([]);
  const[search,setSearch]=useState("");
  const[searchCity,setSearchCity]=useState("");
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
      <div className='bloodbody'>
            
      <div className='container textColor'>
          <br />
      <h5>Blood Donor && Volunteer List</h5>
         <input className='searchbar' type="text" placeholder='Blood Groph' 
    onChange={(event)=>{setSearch(event.target.value);}}
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
</tr>
</thead>
{donor&&donor.filter((data)=>{
if(search===""&&searchCity===""){
  return data;
}
else if(data.group?.toLowerCase().includes(search?.toLowerCase())&&data.city?.toLowerCase().includes(searchCity?.toLowerCase())){
    return data;
}

}).map((data,key)=><tbody key={key}>
<tr>

<td>{data.name}</td>
<td>{data.group}</td>
<td>{data.city}</td>
<td>{data.phone}</td>
<td>{data.email}</td>

</tr>

</tbody>)}
</table>  
  </div>
  </div>
    );
};

export default Doctor;