import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import { Grid } from "@material-ui/core";
import { API_URL } from "../../../api/apiConstants";

const Index = () => {
  const { batch, faculty, section, id } = useParams();
  const navigate = useNavigate();
  // console.log(id)
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const studentinfo = async () => {
      const response = await axios.get(
        `${API_URL}/student/${batch}/${faculty}/${section}/${id}`
      );
      console.log(response?.data);
      setStudents(response?.data);
    };
    studentinfo();
  }, [id, batch, faculty, section]);

  const delStudent = async (id) => {
    console.log(id);

    await axios.delete(`${API_URL}/student/${id}`);
    navigate('/admin/timeline')
  };
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="main_container">
        <div className="studentInfo">
          {students.map((std) => (
            <>
              <div className="profileImage">
                <img src={std?.profile} width="400px" alt="std?.name" />
              </div>

              <div className="basicInfo">
                <div className="stdName">
                  <h1>{std?.name}</h1>
                  <div className="bttns">
                    <Link to={`/admin/UpdateStudent/${std?._id}`}>
                      <button>Edit Info</button>
                    </Link>
                    <div className="del">
                      <button onClick={() => delStudent(std?._id)}>Delete</button>
                    </div>
                  </div>
                </div>
                <div className="idEmail">
                  <p>College Id:{std?.cid}</p>
                  <p>Email:{std?.email}</p>
                </div>
                <div className="stdFaculty">
                  <p>
                    {std?.batch}-{std?.faculty}-{std?.section}
                  </p>
                  <p>Address: {std?.location}</p>
                  <p>Hometown: {std?.hometown}</p>
                  <p>DOB: {std?.Dob}</p>
                  <p>Height: {std?.height}</p>
                  <p>Weight: {std?.weight}</p>
                  <p>Bloodgroup: {std?.bloodgroup}</p>
                  <p>Phone No: {std?.contact}</p>
                  <p>Mother Name: {std?.mothername}</p>
                  <p>Father Name: {std?.fathername}</p>
                  <p>Father Contact: {std?.fathercontact}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Grid>
  );
};

export default Index;
