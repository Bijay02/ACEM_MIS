import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wallpaper from "./../../components/wallpaper";
import { Grid } from "@material-ui/core";
import Sidebar from "./../../components/sidebar";
import axios from  'axios'
import { Chart } from "react-google-charts";
import "./index.css";

const Index = () => {
  const [apidata,setApidata]=useState([])
 const {assessmentScore,assignmentScore,attendanceScore,previousScore,remarks,prediction}=apidata;

  const data = [
    ["Task", "Hours per Day"],
    ["Previous Score", assessmentScore],
    ["Attendence Score", assignmentScore],
    ["Assignment Score", attendanceScore],
    ["Assessment Score", previousScore],
  ];

  const options = {
    title: "My Semester Perfromance",
    is3D: true,
  };

  const auth = localStorage.getItem("model");
  const stdId = JSON.parse(auth).cid
  useEffect(()=>{
    const performance = async ()=>{
        const res = await axios.get(`http://127.0.0.1:6060/predict/${stdId}`)
        console.log(res.data.records[0])
        setApidata(res?.data?.records[0])
    }
    performance()
  },[])

  return (
    <div className="App">
      <Grid container direction="row" spacing={1}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Wallpaper />
          <Grid container direction="row">
            <Grid item xs={7}>
            <div className="performance_pieChart">
                {/* <canvas ref={chartRef} style={{ width: "100%" }} /> */}
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                  height={"340px"}
                />
<div className="remarks">

                <h1>Remarks:{remarks}</h1>
              </div>
              </div>
              
            </Grid>
            <Grid item xs={5}>
              <Calendar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
// }

export default Index;
