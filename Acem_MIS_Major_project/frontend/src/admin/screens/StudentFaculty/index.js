import React from "react";
import Sidebar from "../../components/sidebar";
import "./faculty.css";
import Faculty from "../../components/Faculty";
import AddNewFaculty from "../../components/AddNewfaculty";
import { Grid } from "@material-ui/core";

const Index = () => {
  return (
    <Grid container direction="row" spacing={1}>
    <Grid item xs={2}>
      <Sidebar />
    </Grid>
      <div className="main_container">
      <div className="newfaculty">
          <AddNewFaculty />
        </div>
        <div className="faculty">
          <Faculty />
        </div>
      </div>
      </Grid>
  );
};

export default Index;
