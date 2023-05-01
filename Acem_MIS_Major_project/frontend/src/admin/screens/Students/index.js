import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@material-ui/core";
import { API_URL } from "../../../api/apiConstants";

const Index = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);
  const [data, setData] = useState([]);
  const { batch, faculty, section } = useParams();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const student = async () => {
      const response = await axios.get(
        `${API_URL}/students/${batch}/${faculty}/${section}/${page}`
      );
      // console.log(response.data);
      const totalPage = Math.ceil(response.data.count / response.data.perPage);
      setTotalPage(totalPage);
      console.log(totalPage);
      setData(response.data);
      setStudents(response.data.student);
    };
    student();
  }, [batch, section, faculty, page]);
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="main_container">
        <div className="TotalStudent">
          <h1>Total Students:{data.count}</h1>
          <Link
            to={"/admin/Add_Students"}
          >
            <button>Add New Students</button>
          </Link>
        </div>
        <div className="Students">
          {students.map((student) => (
            <>
              <Link
                to={`/admin/Student_Batch/${student.batch}/${faculty}/${section}/${student._id}`}
              >
                <div className="students_box" key={student.name}>
                  <div className="student_info">
                    <div className="student_image">
                      <img src={student.profile} alt={student.profile} />
                    </div>
                    <div className="info">
                      <h3 className="name">{student.name}</h3>
                      {/* <div className="clz_info">
              <p className="batch">Batch:{student.batch}</p>
              <p className="section">section:{student.section}</p>
              </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="pagination">
          {/* <Stack spacing={2}> */}
          {/* <Pagination count={10} shape="rounded" /> */}
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            onChange={(e, value) => setPage(value)}
          />
          {/* </Stack> */}
        </div>
      </div>
    </Grid>
  );
};

export default Index;
