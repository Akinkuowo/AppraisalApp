import React, { useEffect, useState } from 'react'
import { store,  db } from '../../components/Firebase/firebase-config'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import {  useNavigate, Link } from 'react-router-dom'
import AdminNavigation from '../../components/AdminNavigation'


const AppraisalProcess = () => {
    const reviewID = localStorage.getItem("AppraisalReviewID")
    const usercomfirmPosition = localStorage.getItem("userPosition")
    const QualScore = localStorage.getItem("qualScore")
    const AdminScore = localStorage.getItem("AdminScore")
    const TeachScore = localStorage.getItem("TeachScore")
    const PubScore = localStorage.getItem("PubScore")
    const ConScore = localStorage.getItem("ConScore")
    const [reviewIDExist, setreviewIDExist] = useState([])
    const [users, setUsers] = useState([])
    const count = collection(db, "Appraisal_Score")
    const dbcollection = collection(db, "staffs")

    useEffect(() =>{
        const  getUsers  = async () => {
            const data = await getDocs(dbcollection)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            // console.log(data.docs)
        }

        getUsers()
    }, [])

    useEffect(() =>{
        const  getAppraisalCount  = async () => {
            const data = await getDocs(count)
            setreviewIDExist(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            // console.log(data.docs)
        }
    
        getAppraisalCount()

    }, [])

    for(let i = 0; i < reviewIDExist.length; i++){
        
        let type = reviewIDExist[i].documentType
        if(type === "Qualification"){
            let qualscore = reviewIDExist[i].score
            localStorage.setItem("qualScore", qualscore)
            // console.log(qualscore)
        }else if(type === "Conference"){
            let ConScore = reviewIDExist[i].score
            localStorage.setItem("ConScore", ConScore)
        }else if(type === "Teaching"){
            let TeachScore = reviewIDExist[i].score
            localStorage.setItem("TeachScore", TeachScore)
        }else if(type === "Admin Exp"){
            let AdminScore = reviewIDExist[i].score
            localStorage.setItem("AdminScore", AdminScore)
        }else if(type === "Publication"){
            let PubScore = reviewIDExist[i].score
            localStorage.setItem("PubScore", PubScore)
        }
        // comfirmUserid = reviewIDExist[i].userID
        
    }

   let totalScore = Number(QualScore) + Number(AdminScore) + Number(TeachScore) + Number(PubScore) + Number(ConScore)
   let result = ""
   if(totalScore >= 95){
        result = "This candidate is due for Double Promotion"
   }else if(totalScore >= 60){
         result = "This candidate is due for Promotion or appointment"
   }else{
        const result = "This candidate should not be Promoted or appointed"
   }
  

  return (
    <div>
        <AdminNavigation />
        <div className="container text-center mt-4">
            <h3>Total Score: {`${totalScore}%`}</h3>
            <div>
                <h5>
                    <strong id='result'>{result}</strong>
                </h5>
            </div>
            <button className='viewButton' >Proceed To Recommendation</button>
        </div>
    </div>
  )
}

export default AppraisalProcess