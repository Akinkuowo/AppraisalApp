import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes  } from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import AppraisalRequest from './Pages/AppraisalRequest/AppraisalRequest';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import AdminRegister from './Pages/AdminRegister/AdminRegister';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import StartAppraisal from './Pages/StartAppraisal/StartAppraisal';
import ViewDocuments from './Pages/ViewDocument/ViewDocuments';
import AdminRecommendation from './Pages/AdminRecommendation/AdminRecommendation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login/>} />
            <Route path="/register" element={ <Register/>} />
            <Route path="/dashboard" element={ <Dashboard/>} />
            <Route path="/appraisal-request" element={ <AppraisalRequest/>} />
            <Route path="/adminLogin" element={ <AdminLogin/>} />
            <Route path="/adminRegister" element={ <AdminRegister/>} />
            <Route path="/admindashboard" element={ <AdminDashboard/>} />
            <Route path="/start-appraisal" element={ <StartAppraisal />} />
            <Route path="/viewDocument" element={ <ViewDocuments />} />
            <Route path="/adminRecommendation" element={ <AdminRecommendation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
