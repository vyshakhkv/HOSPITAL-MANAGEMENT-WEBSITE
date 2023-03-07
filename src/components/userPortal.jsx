import { Routes,Route } from "react-router-dom";
import DepartmentList from "./departmentList";
import EmployeeList from "./EmployeeList";
import HODlist from "./HODlist";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
import AdminLogin from "./adminLogin";

const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
             <Route path='/' element={<UserDashboard/>} />  
             <Route path='/HOD-list' element={<HODlist/>}/>
             <Route path='/dept-list' element={<DepartmentList/>}/>
             <Route path='/emp-list' element={<EmployeeList/>}/>
             <Route path="/login" element={<AdminLogin/>}/>
            </Routes>
            
        </div>
     );
}
 
export default UserPortal;