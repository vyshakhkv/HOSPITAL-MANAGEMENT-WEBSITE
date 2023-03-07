import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/userDashboard.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Card from 'react-bootstrap/Card';
import { Tab } from "bootstrap";
import { Tabs } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import { Accordion } from "react-bootstrap";



const UserDashboard = () => {
   
 
  

    let[Name,setName]=useState("")
    let[Age,setAge]=useState("")
    let[Gender,setGender]=useState("")
    let[Phone,setPhone]=useState("")
   
    let[Time,setTime]=useState("")
    let[dept,setDept]=useState([])
    let[DepartmentName,setDepartmentName]=useState("")

    

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={Name,Age,Phone,Gender,Time,DepartmentName}

        fetch('http://localhost:1500/patients',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    },[])
    alert(`Your OP ticket for the name ${Name} is added successfully`)
   

    }


    useEffect(()=>{
        let fetchData=async()=>{
          let response=await  fetch('http://localhost:1500/departments')
          let data=await response.json()
    
          setDept(data)
       }
        fetchData()
    
     },[dept])

   

  
  
   



    return (
        <div className="main">

            <div className="userhome">
                <div className="car">
                <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://industry.hospitals-management.com/slider/1668074080making-healthcare-truly-improving-diversity.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>HOSPITAL MANAGEMENT SYSTEM</h3>
          <p>Treatment in your finger tips</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cloudblogs.microsoft.com/industry-blog/wp-content/uploads/2019/10/Doctor-case-study_carousel-HLTH.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>HOSPITAL MANAGEMENT SYSTEM</h3>
          <p>Treatment in your finger tips</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://industry.hospitals-management.com/slider/1668074043approach-healthcare-delivery-services.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>HOSPITAL MANAGEMENT SYSTEM</h3>
          <p>
          Treatment in your finger tips
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </div>

             
            </div>
            <div className="op">

            <Accordion defaultActiveKey="0">
  
      <Accordion.Item eventKey="1">
        <Accordion.Header>Book my OP ticket</Accordion.Header>
        <Accordion.Body className="it d-flex justify-content-sm-center">
        <form action="" onSubmit={handleSubmit}>
                   <div className="name">
                    <input type="text" placeholder="Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="age">
                    <input type="text" placeholder="Age" value={Age} required onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="gender">  
                    <div className="det">
                    <label for="one">MALE</label>
                    <br />
                    <label for="two">FEMALE</label>
                    <br />
                    <label  for="three">OTHER</label>
                    </div>            
                        <div className="rad">
                        <input type="radio" id="one"  name="gender" value="MALE" required onChange={(e)=>setGender(e.target.value)}/>
                    
                    
                    
                    <input type="radio" label="FEMALE" id="two" name="gender" value="FEMALE" required onChange={(e)=>setGender(e.target.value)}/>
                                        <input type="radio" label="OTHER"  name="gender" id="three" value="OTHER" required onChange={(e)=>setGender(e.target.value)}/>
                        </div>
                    
                    
                    </div>
                    <div className="phone">
                    <input type="text" placeholder="Enter Phone number" value={Phone} required onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="date">
                        <label htmlFor="Time" style={{color:"rgb(27, 119, 173)"}}>Schedule your OP</label>
                      
                        <input type="datetime-local" value={Time} placeholder="date and time" required onChange={(e)=>setTime(e.target.value)} />
                    </div>
                    <div className="DROP">
                    <DropdownButton id="dropdown-basic-button" title="Department">
                    {dept.map(data=>(
                    <Dropdown.Item >{data.DepartmentName}</Dropdown.Item>
                    ))}
                    </DropdownButton>
                    </div>
                    <div className="butt">
                   <button className="but_dept" type="submit">SUBMIT</button>
                   </div>

                </form>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


            </div>
            <div className="feedback">

            </div>
            <div className="mid">
            <center> <h1 className="heading text-primary">Explore Our Specialities</h1></center> 
                <div className="second">
                    <div className="top1">
                        <div className="1">
                            <Card className="a1" style={{ width: '18rem',height:'30rem' }}>
                                <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/cardiology.svg " />
                                <Card.Body>
                                    <Card.Title>Cardiology</Card.Title>
                                    <Card.Text>
                                    Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="2">
                            <Card className="a1" style={{ width: '18rem',height:'30rem' }}>
                                <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/first-aid-kit.svg" />
                                <Card.Body>
                                    <Card.Title>Emergency Medicine</Card.Title>
                                    <Card.Text>
                                    Emergency medicine is the medical speciality concerned with the care of illnesses or injuries requiring immediate medical attention. Emergency physicians continuously learn to care for unscheduled and undifferentiated patients of all ages.
                                    </Card.Text>

                                </Card.Body>
                            </Card>


                        </div>
                        <div className="3">
                            <Card className="a1" style={{ width: '18rem',height:'30rem' }}>
                                <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/speech-therapy-1.svg" />
                                <Card.Body>
                                    <Card.Title>Audiology</Card.Title>
                                    <Card.Text>
                                    Audiology is a branch of science that studies hearing, balance, and related disorders. Audiologists treat those with hearing loss and proactively prevent related damage. By employing various testing strategies, audiologists aim to determine whether someone has normal sensitivity to sounds.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                    <div className="bot1">
                        <div className="4">
                            <Card className="a1"  style={{ width: '18rem',height:'30rem' }}>
                                <Card.Img variant="top" src=" https://babymhospital.org/wp-content/uploads/2020/09/dental.svg" />
                                <Card.Body>
                                    <Card.Title>Dental</Card.Title>
                                    <Card.Text>
                                    Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                        <div className="5">
                            <Card className="a1" style={{ width: '18rem',height:'30rem' }}>
                                <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/anaesthesiology-2.svg" />
                                <Card.Body>
                                    <Card.Title>Anesthesiology</Card.Title>
                                    <Card.Text>
                                        Anesthesiology, anaesthesiology, or anaesthesia is the medical specialty concerned with the total perioperative care of patients before, during and after surgery. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                        <div className="6">
                            <Card className="a1" style={{ width: '18rem',height:'30rem' }}>
                                <Card.Img variant="top" src="https://babymhospital.org/wp-content/uploads/2020/09/sports-injuries-1.svg" />
                                <Card.Body>
                                    <Card.Title>Arthroscopy</Card.Title>
                                    <Card.Text>
                                    Arthroscopy is a minimally invasive surgical procedure on a joint in which an examination and sometimes treatment of damage is performed using an arthroscope, an endoscope that is inserted into the joint through a small incision. Arthroscopic procedures can be performed during ACL reconstruction.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bottom">
            <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="About Us">
      From starting out as a vision of one man's dream to the reality of revolutionizing the health care industry, <br /> we are proud to be the flag bearers of this paradigm shift with our clinical excellence, patient centricity and ethical practices integral to healthcare.
      <center><img src="https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg"width="800px" height="500px" alt="" /></center>
     
      </Tab>
      <Tab eventKey="profile" title="Our Mission">
To provide Hope, Care and Cure. To provide compassionate, accessible, high quality, cost effective healthcare to one all. To serve with a patient's first motto and to work towards a patient- centered care.
<center><img src="https://img.freepik.com/free-vector/scientists-working-modern-laboratory_1262-19876.jpg?w=2000" width="800px" height="500px" alt="" /></center>
      </Tab>
      
      
    </Tabs>
            </div>
        
            <div className="userfoot">
                <div className="footlink">
                <ul>
                    <li><a href="">Help</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""> Donate</a></li>
                    <li><a href=""> Newsletter</a></li>
                    <li><a href="">Sitemap</a></li>
                    <li><a href="">Hours & Locations</a></li>

                </ul>
                </div>
                <div className="footlogo">
                    <ul>
                   <li><img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/facebook.svg" alt="" /></li> 
                   <li> <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/twitter.svg" alt="" /></li> 
                   <li> <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/google.svg" alt="" /></li> 
                   <li> <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/instagram.svg" alt="" /></li> 
                    </ul>
                </div>
            </div>

        </div>


    );
}

export default UserDashboard;