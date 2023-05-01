import React from "react";
import Sidebar from '../../components/sidebar'
import UpdateStudent from "./UpdateStudent";
import "./index.css";
import { Grid } from "@material-ui/core";

const index = () => {
  return (
    <Grid container direction="row" spacing={1}>
    <Grid item xs={2}>
      <Sidebar />
    </Grid>
      <div className="main_container">
        <UpdateStudent/>
      </div>
      </Grid>
  );
};

export default index;
