import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './DeleteReport.css';
const DeleteReport = () => {
    const{id}= useParams();
    const deleteitem=()=>{
        console.log(id)
        fetch(`http://localhost:5000/Upload/delete/${id}`,{
          method: 'Delete'
        })
        .then(res=>res.json())
        .then(res=>{
        
        }
         )
      }
    return (
        <div className="model">
        <Modal.Dialog>
 <Modal.Header>
   <Modal.Title>Are Your Sure You Wan't To Delete Users?</Modal.Title>
 </Modal.Header>

 

 <div className='deleteFooter'>
     <Link to="/profile">
     <Button variant="secondary" onClick={()=>deleteitem()}>Delete</Button>
   <Button variant="primary">Cencle</Button>
     </Link>
 
 </div>
</Modal.Dialog>
       </div>
    );
};

export default DeleteReport;