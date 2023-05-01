import React, { useEffect, useState } from 'react'
import './index.css'
import { FaUserGraduate } from "react-icons/fa";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_URL } from '../../../api/apiConstants'

const Index = () => {

  const { batch } = useParams();
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    const faculty = async () => {
      const response = await axios.get(`${API_URL}/faculty`);
      // console.log(response.data);
      setFaculties(response.data);
    };
    faculty();
  }, []);
  return (
    <>
      {
        faculties.map((faculty) => (
          <Link to={`/admin/Student_Batch/${batch}/${faculty.faculty}`}>
            <div className="Student_batch" key={faculty.faculty}>
              <h1><FaUserGraduate /> {faculty.faculty}</h1>
              <h5>Faculty</h5>
              {/* <h5>Section:{batch.section}</h5> */}
            </div>
          </Link>
        ))
      }
    </>


  )
}

export default Index