import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminNavigation from '../../components/AdminNavigation'

const AdminDashboard = () => {
  return (
    <div>
        <AdminNavigation />
        <div className='container'>
            <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <Link to="/start-appraisal" className='links button'>Start Appraisal</Link>
                <Link to="/resume-appraisal" className='links button'>Resume Appraisal</Link>
            </div>
            <div className="col-lg-3"></div>
            </div>
        </div>
    </div>
    
    
  )
}

export default AdminDashboard