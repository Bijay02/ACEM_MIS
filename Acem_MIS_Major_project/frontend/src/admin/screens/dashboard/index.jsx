import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar";
import Totalstudents from "../../components/Totalstudents";
import TotalFeedback from "../../components/TotalFeedback";
import Chart from "../../components/Chart";
import Event from "../../components/Events";
import { Grid } from "@material-ui/core";
import Calendar from "react-calendar";
import SearchStudent from "../../components/SearchStudent";

const Index = () => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="main">
        <div className="search">
          <SearchStudent />
        </div>
        <div className="small_components">
          <Totalstudents />
          <TotalFeedback />
          <Event />
        </div>
        <div className="big_components">
          <div className="chart">
            <Chart />
          </div>
          <Grid item xs={4} className="calendar">
            <Calendar />
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Index;
