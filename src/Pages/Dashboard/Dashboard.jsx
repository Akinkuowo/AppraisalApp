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
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <Link to="/appraisal-request" className='links button'>Request for Appraisal</Link>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard