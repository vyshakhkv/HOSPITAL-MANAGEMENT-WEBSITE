import { useState } from "react";
import '../styles/addDepartments.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from "react-router-dom";
const AddDept = () => {
    let[DepartmentName,setDname]=useState("")
    let[DepartmentProfileImage,setImage]=useState("")
    let[YearFounded,setYear]=useState("")
    let[Description,setDescription]=useState("")
    let[HOD,setHOD]=useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={DepartmentName,DepartmentProfileImage,YearFounded,Description,HOD}

        fetch('http://localhost:1500/departments',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${DepartmentName} is added successfully`)
    navigate('/admin/user-list')

    }




    return (
        <div className="addDep">
            <div className="head text-primary"> <h1>Add Department</h1></div> 
                <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={DepartmentName} required onChange={(e)=>setDname(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formimg">
        <Form.Label>Department Profile Image URL</Form.Label>
        <Form.Control type="text" placeholder="Paste url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="YearFounded">
        <Form.Label>YearFounded</Form.Label>
        <Form.Control type="text" placeholder="Year Founded" value={YearFounded} required onChange={(e)=>setYear(e.target.value)} />
      </Form.Group>
          
      <Form.Group className="mb-3" controlId="YearFounded">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" value={Description} required onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="hod">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter name of the HOD" value={HOD} required onChange={(e)=>setHOD(e.target.value)} />
      </Form.Group>


      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

        

     );
}
 
export default AddDept;