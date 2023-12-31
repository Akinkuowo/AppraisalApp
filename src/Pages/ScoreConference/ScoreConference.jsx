import React from 'react'
import AdminNavigation from '../../components/AdminNavigation'
import '../ScoreQualification/ScoreQualification.css'
import { db } from '../../components/Firebase/firebase-config'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import {  useNavigate, Link } from 'react-router-dom'

const ScoreConference = () => {
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

      if(position === "prof"){
          if(score < 5 || score > 10){
              Swal.fire({
                  title: 'Error',
                  text: 'Conference Score for professor cant be less then 5 or greater than 10',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Conference", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser() 
          }
      }else if(position === "reader"){
          if(score < 5 || score > 10){
              Swal.fire({
                  title: 'Error',
                  text: 'Conference Score for reader cant be less then 5 or greater than 10',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Conference", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser() 
          }
      }else if(position === "sen_lect"){
          if(score < 5 || score > 10){
              Swal.fire({
                  title: 'Error',
                  text: 'Conference Score for Senior Lecturer cant be less than 5 or greater then 10',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Conference", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser()
          }
      }else if(position === "lecturer1"){
          if(score < 2 || score > 10){
              Swal.fire({
                  title: 'Error',
                  text: 'Conference Score for Lecturer 1 cant be less than 2 and greater then 10',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Conference", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser()
          }
      }else if(position === "lecturer2"){
          if(score > 5){
              Swal.fire({
                  title: 'Error',
                  text: 'Conference Score for Lecturer 2 cant be greater then 5',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Conference", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser()
          }
      }else if(position === "ass_lect"){
          if(score > 5){
              Swal.fire({
                  title: 'Error',
                  text: 'Conference Score for Assistant Lecturer  cant be greater then 5',
                  icon: 'error',
                  confirmButtonText: 'Close'
                })
          }else{
              addDoc(dbcollection, {score: score, documentType: "Conference", ReviewID: reviewID, userID: userID})
              Swal.fire({
                  title: 'success',
                  text: 'Document was scored Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
                redirectUser()
          }
      }

  }

  return (
    <div>
    <AdminNavigation />
   <div className='text-center mt-4 row'>
       <div className="col-lg-3"></div>
       <div className="col-lg-6 ">
           <h2>Score {firstname} Conference Document </h2>
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

export default ScoreConference