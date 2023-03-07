import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/adminLogin.css'

const AdminLogin = () => {

    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()
    let handleLogin = (e) => {
        e.preventDefault()
        

        if (mail == "admin@gmail.com" && password == "1234") {
            navigate('/admin/')
        }
        else {
            alert('Invalid Email or Password')
        }



    }
    return ( 
       <div className="adminlogin">

         <div className="head text-primary"> <h1>Login as Admin</h1></div> 

        <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(p) => setPassword(p.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </div>






     );
}
 
export default AdminLogin;