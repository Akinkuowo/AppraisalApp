import React from 'react'
import AdminNavigation from '../../components/AdminNavigation'
import '../ScoreQualification/ScoreQualification.css'
import { db } from '../../components/Firebase/firebase-config'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import {  useNavigate, Link } from 'react-router-dom'

const ScoreAdminExp = () => {
    const position = localStorage.getItem("userPosition")
    const firstname = localStorage.getItem("firstname")
    const reviewID = localStorage.getItem("AppraisalReviewID")
    const userID = localStorage.getItem("AppraisalUserId")
    const dbcollection = collection(db, "Appraisal_Score")
    const navigate = useNavigate();

    const redirectUser = () => {
          
        navigate("/startAppraisalProcess");
      };

  const handleScore = () => {
      let score = parseInt(document.getElementById("score").value)

          if(score > 5){
              Swal.fire({
                  title: 'Error',
                  text: 'Administration Experience Score greater than 5',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Admin Exp", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser() 
          }
      

  }


  return (
    <div>
    <AdminNavigation />
   <div className='text-center mt-4 row'>
       <div className="col-lg-3"></div>
       <div className="col-lg-6 ">
           <h2>Score {firstname} Administration Experience Document </h2>
           <input type="number" className='main-container' id="score" placeholder='Enter score'/>
           <div className='form-group'>
               <button className="form__submit" type="submit"  onClick={handleScore}>Submit Score </button>
           </div>
       </div>
       <div className="col-lg-3"></div>
           
       </div>
    </div>
  )
}

export default ScoreAdminExp