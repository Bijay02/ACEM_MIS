import React from "react";
import { Box, Grid } from "@material-ui/core";
import "./style.css";
import Stepper from "../stepper";
// import React from 'react'

const Index = (props) => {
  const auth = localStorage.getItem("model");

  switch (props.value) {
    case 0:
      return (
        <Box className="vertab">
          <Grid container>
            <Grid item xs>
              <ul>
                <li>
                  <u>Gender</u>: {JSON.parse(auth).gender}
                </li>
                <li>
                  <u>Date of birth</u>:{JSON.parse(auth).Dob}
                </li>
                <li>
                  <u>Father</u> :{JSON.parse(auth).fathername}
                </li>
                <li>
                  <u>Mother </u>: {JSON.parse(auth).mothername}
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Nationality</u> : Nepali
                </li>
                <li>
                  <u>Religion</u> : Hindu
                </li>
                <li>
                  <u>Mother Tongue</u> : Nepali
                </li>
                <li>
                  <u>Marital Status</u> : Single
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Height</u> : {JSON.parse(auth).height}
                </li>
                <li>
                  <u>Weight</u> : {JSON.parse(auth).weight}
                </li>
                <li>
                  <u>Blood Group</u> : {JSON.parse(auth).bloodgroup}
                </li>
                <li>
                  <u>Age </u>:21yrs
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      );
    case 1:
      return (
        <Box className="vertab">
          <Grid container>
            <Grid item xs>
              <ul>
                <li>
                  <u>Address </u>: {JSON.parse(auth).location}
                </li>
                <li>
                  <u>HomeTown </u>: {JSON.parse(auth).hometown}
                </li>
                <li>
                  <u>Phone no </u> : +977 {JSON.parse(auth).contact}
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Father Contact</u> : +977 {JSON.parse(auth).fathercontact}
                </li>
                <li>
                  <u>Email </u> : {JSON.parse(auth).email}
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      );
    case 2:
      return (
        <Box className="vertab">
          <Stepper />
        </Box>
      );
    default:
      return <Box className="vertab">Error</Box>;
  }
};
export default Index;
