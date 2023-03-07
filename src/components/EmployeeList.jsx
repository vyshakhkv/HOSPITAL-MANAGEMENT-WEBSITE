import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/EmployeeList.css'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import { useState,useEffect } from "react";

const EmployeeList = () => {
     let[employee,setEmp]=useState([])

    let location=useLocation()
   
    useEffect(()=>{
       let fetchData=async()=>{
         let response=await  fetch('http://localhost:1500/Employee')
         let data=await response.json()
   
         setEmp(data)
      }
       fetchData()
   
    },[employee])
   
    let handleDelete=(id,department)=>{
         fetch(`http://localhost:1500/Employee/${id}`,{
         method:'DELETE'
      } )
      alert(`${department} will be deleted permenantly`)
    }

    let navigate=useNavigate();
    let handleEdit=(id)=>{
      
      if(location.pathname == '/admin/emp-list'){
           navigate(`/admin/emp-list/${id}`)
    }
    else{
      navigate(`/user/emp-list/${id}`)
    
    }
   }

     
   
    
    
   
    return ( 
        <div className="Employeelist">
                <center> <h1 >EMPLOYEES</h1></center> 
        
        <div className="emp_section">
        <Row xs={1} md={3} className="g-4">
     
     {employee.map(data=>(
          <Col>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={data.profileImage} />
         <Card.Body>
           <Card.Title>{data.Name}</Card.Title>
           <Card.Title>EMP NO:{data.EmployeeNumber}</Card.Title>
           <Card.Title>DEPARTMENT:{data.department}</Card.Title>
           
           <Card.Text>AGE: {data.Age} </Card.Text>
           <Card.Text>REPORT TO: {data.reportTo} </Card.Text>
           
           <Card.Text>{data.ProfileDescription}      </Card.Text>
          
              <div className="butt">      
           <div className="edit">{ location.pathname == '/admin/emp-list' &&  <Button variant="primary" onClick={()=>handleEdit(data.id)}>Edit</Button>}</div>
          <div className="dlt"> { location.pathname == '/admin/emp-list' &&  <Button variant="primary" onClick={()=>handleDelete(data.id,data.DepartmentName)}>Delete</Button>} </div>
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
 
export default EmployeeList;