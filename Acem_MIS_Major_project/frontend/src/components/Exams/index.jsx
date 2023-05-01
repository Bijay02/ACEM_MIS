import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wallpaper from "./../../components/wallpaper";
import { Grid } from "@material-ui/core";
import Sidebar from "./../../components/sidebar";
// import "./course.css";

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
              <div className="iframe"><iframe
                width="670"
                height="400"
                src="https://exam.ioe.edu.np/"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe></div>
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
