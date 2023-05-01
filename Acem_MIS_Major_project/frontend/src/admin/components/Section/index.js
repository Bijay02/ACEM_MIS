import React from 'react'
import { Link, useParams } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import './index.css'

const Index = () => {
    const { batch,faculty} = useParams();
  return (
    <>
    <Link to={`/admin/Student_Batch/${batch}/${faculty}/A`}>
    <div className="Student_batch" >
      <h1><FaUserGraduate/> A</h1>
      <h5>Section</h5>
      {/* <h5>Section:{batch.section}</h5> */}
    </div>
    </Link>
    <Link to={`/admin/Student_Batch/${batch}/${faculty}/B`}>
    <div className="Student_batch" >
      <h1><FaUserGraduate/> B</h1>
      <h5>Section</h5>
      {/* <h5>Section:{batch.section}</h5> */}
    </div>
    </Link>
    </>
  )
}

export default Index