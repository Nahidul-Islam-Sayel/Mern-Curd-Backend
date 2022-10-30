import React, { useEffect, useState } from 'react';
import Zoom from 'react-img-zoom';
import { useParams } from 'react-router-dom';
import './Profile.css';
const Load = () => {
    const[data,setData]=useState({});
    const{id}= useParams();
    useEffect(()=>{
     
        fetch('http://localhost:5000/Upload/ReportImg?id='+id,{
          method: 'GET'
        })
        .then(res=>res.json())
        .then(res=>
      ( setData(res),console.log(res))
        )
    },[])
    function arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }
    return (
        <div>
 { data[0] &&
 <div> <div class="name">
      

    </div>
    <div class="single-product clearfix">
    
    <div class="productpage-1 clearfix">
    <div className="img-container">
     { data[0].img.data &&  <Zoom
  img={`data:image/png;base64,${arrayBufferToBase64(data[0].img.data)}`}
  zoomScale={3}
  width={400}
  height={400} download />}
    </div>
    </div>
    
    <div>
        <div class="productpage-2 clearfix">
            <h1>About This Report</h1>
          <h3>{data[0].testName&&data[0].testName}</h3>
    
            <div class="card-footer">
                <form action="" class="form" data-pure-form>
                
      
                 
   
                    <div class="button">
                
                {  data[0].img.data  &&  <a href={`data:image/png;base64,${arrayBufferToBase64(data[0].img.data)}`} download>          <input id="submit" class="btn btn-primary" value="Download This Report" onClick=""/> </a>}
                    
                    </div>
                </form>
    
                {/* <h4>পণ্যের বিবরণ </h4> */}
        <p></p>
                <p class="p-dis"></p>
                <div class="review">
                    <h4></h4>
                  
             </div>
            </div>
        </div>
    </div>
</div></div>
}

</div>
    );
};

export default Load;