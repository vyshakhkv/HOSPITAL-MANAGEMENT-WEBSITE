import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const PatientList = () => {
    let[patient,setPatient]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:1500/Patients')
            let data=await response.json()
            setPatient(data)
        }
        fetchData()
    },[patient])

  let  handleDelete=(id,Name)=>{
        fetch(`http://localhost:1500/Patients/${id}`,{
            method:'DELETE'
        })
        alert(`${Name} has been deleted`)
    }
    return ( 
        <div className="patList">
          <center> <h1>PATIENT LIST</h1></center> 
            <div className="patSec">
              
                     <Table striped bordered hover variant="dark">
                     <thead>
                       <tr>
                         <th>Name</th>
                         <th>Age</th>
                         <th>Gender</th>
                         <th>Phone</th>
                         <th>Booking time</th>
                         <th>Booking ID</th>
                         <th>Delete</th>
                       </tr>
                     </thead>
                    
                     <tbody>
                     {patient.map(data=>(
                       <tr>
                         <td>{data.Name}</td>
                         <td>{data.Age}</td>
                         <td>{data.Gender}</td>
                         <td>{data.Phone}</td>
                         <td>{data.Time}</td>
                         <td>{data.id}</td>
                         <td> <Button variant="secondary" onClick={()=>handleDelete(data.id,data.Name)}>Delete</Button>{' '}</td>
                        
                         
                       </tr>
                       ))}
                     </tbody>
                   </Table>


             
            </div>

        </div>
     );
}
 
export default PatientList;