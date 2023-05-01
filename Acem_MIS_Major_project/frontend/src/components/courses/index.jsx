import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wallpaper from "./../../components/wallpaper";
import { Grid } from "@material-ui/core";
import Sidebar from "./../../components/sidebar";
import "./course.css";

const Index = () => {
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
              <div className="courseModule">
                <h5>8th Semester</h5>
                <div className="col-7">
                  <ol>
                    <li>Engineering Professional Pracice</li>
                    <li>Information System</li>
                    <li>Internet and Intranet</li>
                    <li>Project (Part B)</li>
                    <li>Simulation and Modeling</li>
                    <li>Elective II</li>
                    <li>Elective III</li>
                  </ol>
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
