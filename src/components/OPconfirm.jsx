import UserDashboard from "./userDashboard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OP = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return ( 
        <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <UserDashboard
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
     );
}
 
export default OP;