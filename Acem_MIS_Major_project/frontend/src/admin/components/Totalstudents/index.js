import React, { useEffect, useState } from "react";
import "./totalstudents.css";
import { FaUserGraduate } from "react-icons/fa";
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../../api/apiConstants'

const Index = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const student = async () => {
      const response = await axios.get(`${API_URL}/students`);
      console.log(response.data);
      setStudents(response.data.count);
    };
    student();
  }, []);
  return (
    <Link to={`/admin/Student_Batch`}>
      <div className="Student_box">
        <h1>
          {" "}
          <FaUserGraduate /> {students}
        </h1>
        <h5>Students</h5>
      </div>
    </Link>
  );
};

export default Index;
