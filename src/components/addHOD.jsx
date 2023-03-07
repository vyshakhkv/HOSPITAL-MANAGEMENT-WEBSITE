import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/addHOD.css'

import { useNavigate } from "react-router-dom";
const AddHOD = () => {
    let[Name,setName]=useState("")
    let[EmployeeNumber,setEmp]=useState("")
    let[Age,setAge]=useState("")
    let[profileImage,setProfile]=useState("")
    let[department,setDepartment]=useState("")
    let[ProfileDescription,setDes]=useState("")
    

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={Name,EmployeeNumber,Age,profileImage,ProfileDescription,department}

        fetch('https://console.firebase.google.com/u/0/project/hospitalmanagement-d877c/database/hospitalmanagement-d877c-default-rtdb/data/~2F/HOD',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${Name} is added successfully`)
    navigate('/admin/HOD-list')

    }




    return (
        <div className="addHOD">
            <div className="addHOD_form text-primary">
                <h1>Add Doctor</h1>
                </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formimg">
        <Form.Label>EMP NO</Form.Label>
        <Form.Control type="text"   placeholder="enter employee number" value={EmployeeNumber} required onChange={(e)=>setEmp(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text"  placeholder="age" value={Age} required onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text"  placeholder="Department" value={department} required onChange={(e)=>setDepartment(e.target.value)} />
      </Form.Group>
          
      <Form.Group className="mb-3" controlId="YearFounded">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="text" placeholder="Enter profile image url" value={profileImage} required onChange={(e)=>setProfile(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="hod">
        <Form.Label>Description</Form.Label>
        <Form.Control  placeholder="Enter profile description " value={ProfileDescription} required onChange={(e)=>setDes(e.target.value)} />
      </Form.Group>


      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>






            </div>

            


          

      

     );
}
 
export default AddHOD;