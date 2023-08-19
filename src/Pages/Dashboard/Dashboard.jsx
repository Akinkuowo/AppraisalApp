import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className='container'>
        <div className="row">
          <div className="col-lg-4">
            <Link to="/ViewAppraisal" className='links button req-container'>View Submitted Documents</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/appraisal-request" className='links button req-container'>Request for Appraisal</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/ViewAllAppraisal" className='links button req-container'>View All Appraisals</Link>
          </div>
          <div className="col-lg-4 mt-60">
            <Link to="/ChangePassword" className='links button req-container'>Change Password</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard