import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/HODlist.css'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HODlist = () => {

    let[HOD,setHOD]=useState([])
    let location=useLocation()
   
    useEffect(()=>{
       let fetchData=async()=>{
         let response=await  fetch('http://localhost:1500/HOD')
         let data=await response.json()
   
         setHOD(data)
      }
       fetchData()
   
    },[HOD])
   
    let handleDelete=(id)=>{
         fetch(`http://localhost:1500/HOD/${id}`,{
         method:'DELETE'
      } )
      alert(`${id} will be deleted permenantly`)
    }
   
    
    let navigate=useNavigate();
    let handleEdit=(id)=>{
      
      if(location.pathname == '/admin/HOD-list'){
           navigate(`/admin/HOD-list/${id}`)
    }
    else{
      navigate(`/user/HOD-list/${id}`)
    
    }
   }
    return ( 
        <div className="HODlist">
                <center> <h1 style={{color:"rgba(103, 126, 121)"}}>DOCTORS</h1></center> 
                
        <div className="HOD_section">
        <Row xs={1} md={3} className="g-4">
     
            {HOD.map(data=>(
                 <Col>
                <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                  <Card.Title>{data.brand}</Card.Title>
                  <Card.Title>EMP NO:{data.brand}</Card.Title>
                  <Card.Title>DEPARTMENT:{data.department}</Card.Title>
                  
                  <Card.Text>AGE: {data.Age} </Card.Text>
                  
                  <Card.Text>{data.ProfileDescription}      </Card.Text>
                 
                     <div className="butt">
                      <div className="edit">     
                  { location.pathname == '/admin/HOD-list' &&  <Button variant="primary" onClick={()=>handleEdit(data.id)}>Edit</Button>}</div> 
                  <div className="dlt">
                  { location.pathname == '/admin/HOD-list' &&  <Button variant="primary" onClick={()=>handleDelete(data.id,data.DepartmentName)}>Delete</Button>} 
                  </div>
                  </div> 
 
                </Card.Body> 
              </Card>
               </Col>
                 ))}
                  </Row>

        </div>

        </div>
     );
}
 
export default HODlist;