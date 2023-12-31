import React, { useEffect, useState } from 'react'
import { store } from '../../components/Firebase/firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import {v4} from 'uuid';
import { db } from '../../components/Firebase/firebase-config'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'


const UploadPublication = () => {
    const [users, setUsers] = useState([])
    const [docUpload1, setDocUpload1] = useState(null)
    const [reviewIDExist, setreviewIDExist] = useState([])
   

    const Appraisal_Process = collection(db, "Appraisal_Count")
    const staffs = collection(db, "staffs")
    const Process = collection(db, "Appraisal_Process")
    const count = collection(db, "Appraisal_Count")
    const userId = localStorage.getItem("userID");
    const firstname = localStorage.getItem("firstname");
    const employeeId = localStorage.getItem("employeeId")

    useEffect(() =>{
      const  getUsers  = async () => {
          const data = await getDocs(staffs)
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


const UploadDocument = () => {
    let comfirmReviewID = []
    let comfirmUserID = []
    for(let i = 0; i < reviewIDExist.length; i++){
        comfirmReviewID = reviewIDExist[i].reviewID
        comfirmUserID = reviewIDExist[i].userID
        
    }

    if(comfirmUserID == userId){
        let reviewID = comfirmReviewID
        if(docUpload1  == null) return;
        const imageRef = ref(store, `${reviewID}/Publication/${docUpload1.name + v4()}`)
        uploadBytes(imageRef, docUpload1).then(() =>{
            addDoc(Appraisal_Process, {userID: userId, documentType: 'Publication & Creative Work', documentName: docUpload1.name, count: 1, reviewID: reviewID })
            alert(`${docUpload1.name} Uploaded successfully` )
        })
        
    }else{
        let reviewID = Math.floor((Math.random() * 1000) + 10)
        if(docUpload1  == null) return;
        const imageRef = ref(store, `${reviewID}/Publication/${docUpload1.name + v4()}`)
            uploadBytes(imageRef, docUpload1).then(() =>{
                addDoc(Appraisal_Process, {userID: userId, documentType: 'Publication & Creative Work', documentName: docUpload1.name, count: 1, reviewID: reviewID })
                addDoc(Process, {reviewID: reviewID, firstname: firstname, employeeId: employeeId})
                alert(`${docUpload1.name} Uploaded successfully` )
            })
    }
}


  return (
    <div className='container'>
    <div className='popup'>
    <div className="form">
        <h2>Upload Publication Document</h2>
    
          <div className='form-group'>
              <label for="fn" className='text-bold'>Publication & Creative Work</label>
              <input 
                className="form__field" 
                id="fn" 
                type="file" 
                name="email" 
                placeholder="Enter First Name"
                // onChange={(e) => setDocUpload1(e.target.files[0])}
                onChange={(event) => {
                    setDocUpload1(event.target.files[0])
                }}
              />
          </div>

          <div className='form-group mt-4'>
              <button className="form__submit" type="submit" onClick={UploadDocument}>Upload Document	</button>
          </div>

    </div>
</div>
    
</div>
  )
}

export default UploadPublication