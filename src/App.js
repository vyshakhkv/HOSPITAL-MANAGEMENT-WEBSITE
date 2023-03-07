import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

import AdminHome from './components/adminHome';

import UserPortal from './components/userPortal';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
    <div className="App">
     

<BrowserRouter>
<Routes>
  
<Route path='/' element={<UserPortal/>}/>
<Route path='/admin/*' element={<AdminHome/>}/>
<Route path='/user/*' element={<UserPortal/>}/>
</Routes>
</BrowserRouter>
     

          

           
   
    </div>
  );
}

export default App;
