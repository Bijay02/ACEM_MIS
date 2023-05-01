import React from "react";
import Sidebar from "../../components/sidebar";
import "./index.css";
import Batch from "../../components/Batch";
import AddNewBatch from "../../components/AddNewBatch";
import { Grid } from "@material-ui/core";

const Index = () => {
  return (
    <Grid container direction="row" spacing={1}>
    <Grid item xs={2}>
      <Sidebar />
    </Grid>
      <div className="main_container">
        <div className="newbatch">
          <AddNewBatch />
        </div>
        <div className="batch">
          <Batch />
        </div>
      </div>
      </Grid>
  );
};

export default Index;
