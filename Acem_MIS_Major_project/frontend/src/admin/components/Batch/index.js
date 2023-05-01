import React, { useEffect, useState } from 'react'
import './index.css'
import { FaUserGraduate } from "react-icons/fa";
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../../api/apiConstants'


const Index = () => {

  const [batches, setBatches] = useState([]);
  useEffect(() => {
    const batch = async () => {
      const response = await axios.get(`${API_URL}/batch`);
      // console.log(response.data);
      setBatches(response.data);
    };
    batch();
  }, []);
  return (
    <>
      {
        batches.map((batch) => (
          <Link to={`/admin/Student_Batch/${batch.batch}`}>
            <div className="Student_batch" key={batch.batch}>
              <h1><FaUserGraduate /> {batch.batch}</h1>
              <h5>Batch</h5>
              {/* <h5>Section:{batch.section}</h5> */}
            </div>
          </Link>
        ))
      }
    </>


  )
}

export default Index