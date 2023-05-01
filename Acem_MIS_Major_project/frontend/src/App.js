import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Timetable from "./components/timetable";
import "./App.css";
import Wallpaper from "./components/wallpaper";
import { Grid } from "@material-ui/core";
import Sidebar from "./components/sidebar";

const App = () => {
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
              <Timetable />
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

export default App;
