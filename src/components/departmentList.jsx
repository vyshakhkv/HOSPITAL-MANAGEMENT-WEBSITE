import { useNavigate,useLocation } from "react-router-dom";
import '../styles/departmentList.css'
import { useState,useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const DepartmentList = () => {
    let[dept,setDept]=useState([])
    let location=useLocation()
   
    useEffect(()=>{
       let fetchData=async()=>{
         let response=await  fetch('http://localhost:1500/departments')
         let data=await response.json()
   
         setDept(data)
      }
       fetchData()
   
    },[dept])
   
    let handleDelete=(id,DepartmentName)=>{
         fetch(`http://localhost:1500/departments/${id}`,{
         method:'DELETE'
      } )
      alert(`${DepartmentName} will be deleted permenantly`)
    }
   
    
    let navigate=useNavigate();
   
    let handleEdit=(id)=>{
      
      if(location.pathname == '/admin/dept-list'){
           navigate(`/admin/dept-list/${id}`)
    }
    else{
      navigate(`/user/dept-list/${id}`)
    
    }
   }

    return ( 
        <div className="departmentlist">
                 <center> <h1 style={{color:"rgba(103, 126, 121)"}}>DEPARTMENT LIST</h1></center>
        
        <div className="dept_section ">
        <Row xs={1} md={3} className="g-4">
        {dept.map(data=>(
          <Col>
            
                <Card style={{ width: '18rem', height:'40rem' }}>
                <Card.Img variant="top" src={data.DepartmentProfileImage} />
                <Card.Body>
                  <Card.Title>{data.DepartmentName}</Card.Title>
                  <Card.Title>Year Founded:{data.YearFounded}</Card.Title>
                  
                  <Card.Title>HOD:{data.HOD}</Card.Title>
                  
                  <Card.Text>{data.Description} </Card.Text>
                  
                 
                 <div className="butt">

                 <div className="edit"> { location.pathname == '/admin/dept-list' &&  <Button variant="primary" onClick={()=>handleEdit(data.id)}>Edit</Button>}</div>
                 <div className="dlt">  { location.pathname == '/admin/dept-list' &&  <Button variant="primary" onClick={()=>handleDelete(data.id,data.DepartmentName)}>Delete</Button>} </div>

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
 
export default DepartmentList;