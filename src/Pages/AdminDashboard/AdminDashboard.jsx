import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminNavigation from '../../components/AdminNavigation'

const AdminDashboard = () => {
  return (
    <div>
        <AdminNavigation />
        <div className='container'>
        <div className="row">
          <div className="col-lg-4">
            <Link to="/ViewStaffDetails" className='links button req-container'>View Staff Details</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/ViewAppraisalAdmin" className='links button req-container'>View Appraisals</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/ViewAllAppraisalScore" className='links button req-container'>View Appraisals Score</Link>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default AdminDashboard