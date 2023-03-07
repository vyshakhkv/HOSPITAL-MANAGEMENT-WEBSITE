import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/addEmployee.css'
const AddEmployee = () => {
    let[Name,setName]=useState("")
    let[EmployeeNumber,setEmpno]=useState("")
    let[Age,setAge]=useState("")
    let[profileImage,setImage]=useState("")
    let[ProfileDescription,setDesc]=useState("")
    let[department,setDept]=useState("")
    
    let[reportTo,setReport]=useState("")


    
    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={Name,EmployeeNumber,Age,profileImage,ProfileDescription,department,reportTo}

        fetch('https://console.firebase.google.com/u/0/project/hospitalmanagement-d877c/database/hospitalmanagement-d877c-default-rtdb/data/~2F/employee',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${Name} is added successfully`)
    navigate('/admin/user-list')

    }
    return ( 
        <div className="addEmployee">
            <div className="addEmp_form text-primary">
                <h1>Add Employees</h1>
            
            </div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formimg">
        <Form.Label>Employee Number</Form.Label>
        <Form.Control type="text"   placeholder="enter employee number" value={EmployeeNumber} required onChange={(e)=>setEmpno(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text"  placeholder="age" value={Age} required onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text"  placeholder="Department" value={department} required onChange={(e)=>setDept(e.target.value)} />
      </Form.Group>
          
      <Form.Group className="mb-3" controlId="YearFounded">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="text" placeholder="Enter profile image url" value={profileImage} required onChange={(e)=>setImage(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="hod">
        <Form.Label>Description</Form.Label>
        <Form.Control  placeholder="Enter profile description " value={ProfileDescription} required onChange={(e)=>setDesc(e.target.value)} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="hod">
        <Form.Label>Report to</Form.Label>
        <Form.Control  placeholder="Report to" value={reportTo}  required onChange={(e)=>setReport(e.target.value)} />
      </Form.Group>


      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>

                







     );
}
 
export default AddEmployee;