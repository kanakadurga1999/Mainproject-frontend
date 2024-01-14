
import './App.css';
import Appbar from './ui-components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './ui-components/Banner';
import Login from './ui-components/Login';
import { Route, Routes, Router } from 'react-router-dom';
import Main from './ui-components/Main';
import RequireAuth from "./ui-components/RequireAuth";
import Layout from "./ui-components/Layout";


import Welcome from './features/auth/Welcome';

import StudentDashboard from './ui-components/StudentDashboard';
import Dashboard from './pages/Dashboard';
import BatchList from './ui-components/BatchList';
import ResultUploadForm from './ui-components/ResultUploadForm';
import EmailForm from './ui-components/EmailForm';
import Unauthorized from "./ui-components/Unauthorized";
import AdminAuth from "./ui-components/AdminAuth";
import DashHeader from './ui-components/DashHeader';
import DashLayout from './ui-components/DashLayout';

 function App() {
   return (
// //      <div>
// //        {/* <Routes>
      
// //         <Route path='/' element={<Main child={<Banner/>}/>} />
// //         <Route path='/login' element={<Login/>} />
// //         <Route path='/student' element={<StudentDashboard/>} />
// //         <Route path='/admin' element={<Dashboard/>} />
// //       </Routes> */}

  <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Banner/>} />
         <Route path="login" element={<Login />} />
        


        <Route element={<AdminAuth allowedRoles={["Admin", "user"]} />}>
        <Route path="/dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route element={<AdminAuth allowedRoles={["Admin"]} />}>
            <Route path="/dash/students" element={<BatchList />}></Route>
          </Route>

           <Route element={<AdminAuth allowedRoles={["User"]} />}>
             <Route
               path="/dash/students/userview"
               element={< StudentDashboard/>}
             ></Route>
           </Route>

           <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
             <Route path="/dash/students/add" element={<ResultUploadForm />}></Route>
           </Route>
           <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
             <Route
               path="/dash/students/update/:id"
               element={<EmailForm />}
             ></Route>
           </Route>

           <Route
             path="/dash/students/unauthorized"
             element={<Unauthorized />}
           ></Route>

        </Route>
        </Route>


       </Route>
     </Routes>
       

       

       
      
      
// //      </div> 

    
    
//       <div>
//         {/* <Appbar /> */}

//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Banner />} />
//             <Route path="login" element={<Login />} />

//             <Route element={<AdminAuth allowedRoles={["Admin", "User"]} />}>
//               <Route path="dashboard" element={<DashLayout />}>
//                 <Route index element={<Welcome />} />
//                 <Route path="batchlist" element={<BatchList />} />
//                 <Route path="studentdashboard" element={<StudentDashboard />} />
//                 <Route path="resultupload" element={<ResultUploadForm />} />
//                 <Route path="sendemail" element={<EmailForm />} />
//               </Route>
//             </Route>

//             <Route path="unauthorized" element={<Unauthorized />} />
//           </Route>
//         </Routes>
//       </div>
  
//   );
// }

// export default App;

  
// function App() {
//   return (
//     // <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             // <Layout>
//               // {/* <Appbar /> */}
//               <Routes>
//                 <Route index element={<Main child={<Banner />} />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="student/*" element={<StudentRoutes />} />
//                 <Route path="admin/*" element={<AdminRoutes />} />
//               </Routes>
//             // </Layout>
//           }
//         />
//       </Routes>
    
//   );
// }

// function StudentRoutes() {
//   return (
//     <>
//       <Route index element={<Welcome />} />
//       <Route path="dashboard" element={<StudentDashboard />} />
//       {/* Add more student routes as needed */}
//     </>
//   );
// }

// function AdminRoutes() {
//   return (
//     <>
//       <Route index element={<Dashboard />} />
//       <Route path="batch-list" element={<BatchList />} />
//       <Route path="result-upload" element={<ResultUploadForm />} />
//       <Route path="email-form" element={<EmailForm />} />
//       <Route path="unauthorized" element={<Unauthorized />} />
//       {/* Add more admin routes as needed */}
//     </>
  );
}

export default App;