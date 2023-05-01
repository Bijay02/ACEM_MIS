import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { API_URL } from "../../../api/apiConstants";

import "./index.css";

const Index = () => {
  let [color, setColor] = useState("#90EE90");
  const { name } = useParams();

  const [searchedStudent, setSearchStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchedStudent = async () => {
      const response = await axios.get(
        `${API_URL}/searchStudent/${name}`
      );
      setSearchStudent(response?.data);
      setIsLoading(false);
    };



    searchedStudent();
  }, []);

  return (
    <>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <div className="main_container">
          {isLoading ? (
            <div className="Loading">
              <RingLoader
                color={color}
                loading={isLoading}
                // cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : searchedStudent.length > 0 ? (
            <div className="Students">
              {searchedStudent.map((student) => (
                <>
                  <Link
                    to={`/admin/Student_Batch/${student.batch}/${student.faculty}/${student.section}/${student._id}`}
                  >
                    <div className="students_box" key={student.name}>
                      <div className="student_info">
                        <div className="student_image">
                          <img src={student.profile} alt={student.profile} />
                        </div>
                        <div className="info">
                          <h3 className="name">{student.name}</h3>
                          <p className="batch">
                            Batch:{student.batch}-{student.section}
                          </p>
                          {/* <p className="section">section:{student.section}</p> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          ) : (
            <div className="No_student_found">
              <h1>No Result Found !!</h1>
            </div>
          )}
        </div>
      </Grid>
    </>
  );
};

export default Index;