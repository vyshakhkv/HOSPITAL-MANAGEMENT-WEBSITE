import '../styles/adminDashboard.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdminDashboard = () => {
    return ( 
        <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="What is admin-portal ?">
      Administrative Portal. Handles portal setup, configuration, and content. The Administrative Portal enables administrative functions, such as creating and managing portlets and other Web services.
      <img src="https://desainkaosmurah.com/files/image/img_user/user_1/20200103102938_medical_checkup_illustration_7.jpg" width="800px" height="500px" alt="" />
     
      </Tab>
      <Tab eventKey="profile" title="Features">
      It this portal you can manage various aspects of a hospital such as
Departments ,Doctors and Employees data.
<img src="https://cdni.iconscout.com/illustration/premium/thumb/health-checkup-5629721-4695022.png" width="800px" height="500px" alt="" />
      </Tab>
      
      
    </Tabs>
     );
}
 
export default AdminDashboard;