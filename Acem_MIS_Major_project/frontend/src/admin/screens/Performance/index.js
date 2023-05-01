import React, { useState } from "react";
import Papa from "papaparse";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import "./index.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "antd";
import RingLoader from "react-spinners/RingLoader";

const Index = () => {
  const [file, setFile] = useState();
  const [response, setResponse] = useState([]);
  const [table, setTable] = useState(false);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("rgb(30, 158, 233)");
  console.log("response", response)
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "College ID",
      dataIndex: "rollno",
      key: "rollno",
    },
    {
      title: "Faculty",
      dataIndex: "faculty",
      key: "rollno",
    },
    {
      title: "Semester",
      dataIndex: "semester",
      key: "rollno",
    },
    {
      title: "Attendance",
      dataIndex: "attendanceScore",
      key: "address",
    },
    {
      title: "Assignmnet",
      dataIndex: "assignmentScore",
      key: "address",
    },
    {
      title: "Assesment",
      dataIndex: "assessmentScore",
      key: "address",
    },
    {
      title: "Prediction",
      dataIndex: "prediction",
      key: "address",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "address",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:6060/predict",
        formData
      );
      console.log(response.data.prediction);

      setResponse(response?.data?.prediction);
      setTable(true);
      if (response.status === 200) {
        toast.success("Submitted Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(false);

  };

  const handleDownload = () => {
    const csvData = Papa.unparse(response);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <Grid container direction="row" spacing={2}>
        <ToastContainer />
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <div className={`performance_main_container ${loading ? 'blur' : ''}`}>
          <h1>Upload the CSV file to Evaluate Student Performance</h1>
          <form>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>

          {loading && (
            <div className="spinner">
              <RingLoader
                color={color}
                loading={loading}
                size={300}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}

          <div className={table ? "" : "hidden"}>
            <button className="download-btn" onClick={handleDownload}>Download CSV</button>
            <Table dataSource={response} columns={columns} />
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Index;
