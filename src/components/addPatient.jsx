import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/addHOD.css'
const AddPatient = () => {
    
    let[Name,setName]=useState("")
    let[Age,setAge]=useState("")
    let[Gender,setGender]=useState("")
    let[Phone,setPhone]=useState("")
      let[Time,setTime]=useState("")

    
    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={Name,Age,Phone,Gender,Time}

        fetch('http://localhost:1500/patients',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${Name} is added successfully`)

    }
    return ( 
        <div className="addEmployee">
            <div className="addEmp_form text-primary">
                <h1>Add Patient</h1>
            
            </div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formimg">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text"   placeholder="enter employee number" value={Age} required onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel"  placeholder="Phone" value={Phone} required onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="YearFounded">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Gender" value={Gender} required onChange={(e)=>setGender(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Time</Form.Label>
        <Form.Control type="datetime-local"  placeholder="Date & Time" value={Time} required onChange={(e)=>setTime(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>

                

     );
}
 
export default AddPatient;