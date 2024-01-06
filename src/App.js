
import './App.css';
import Appbar from './ui-components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './ui-components/Banner';
import Login from './ui-components/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './ui-components/Main';

import StudentDashboard from './ui-components/StudentDashboard';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
       <Routes>
      
        <Route path='/' element={<Main child={<Banner/>}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/student' element={<StudentDashboard/>} />
        <Route path='/admin' element={<Dashboard/>} />
      </Routes>
       

       

       
      
      
    </div>
  );
}

export default App;
