import React, { Component, Fragment } from "react";
// import Header from "../header";
import Sidebar from "./../sidebar";
import Wallpaper from "../wallpaper";
import { Grid, Paper, Tabs, Tab } from "@material-ui/core";
import VerTabs from "../verTabs";
import './style.css'
// import axios from "axios";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      tab: 0,
    };
  }
  handleChange = (e, newValue) => {
    this.setState({ tab: newValue });
  };
  render() {
    return (
      <Fragment>
        {/* <Header {...this.props} /> */}
        <div className="App">
        <Grid container direction="row" spacing={1}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
            <Grid item xs={10}>
              <Wallpaper user={this.state.user} />
              <Grid container>
                <Grid item xs={12}>
                  <Paper
                    style={{
                      borderRadius: 0,
                      borderBottom: "1px solid gray",
                      marginLeft: "5px",
                    }}
                  >
                    <Tabs
                      value={this.state.tab}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                      aria-label="profile"
                      centered
                    >
                      <Tab label="Personal" />
                      <Tab label="contact" />
                      <Tab label="education" />
                    </Tabs>
                  </Paper>
                  <VerTabs value={this.state.tab} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
