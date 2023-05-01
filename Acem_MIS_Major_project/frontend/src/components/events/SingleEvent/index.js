import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Sidebar from "../../sidebar";
import moment from "moment";
import { Grid } from "@material-ui/core";
import { API_URL } from "../../../api/apiConstants";

const Index = () => {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [timestamp, setTimestamp] = useState([]);
  useEffect(() => {
    const event = async () => {
      const response = await axios.get(`${API_URL}/event/${id}`);

      console.log(response?.data?.event);
      setEvent(response?.data?.event);
      setTimestamp(response?.data?.event?.timestamp);
    };
    event();
  }, []);

  const date = timestamp;

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="mainContainer">
        <div className="singleEvent_box">
          <div className="eventImage">
            <img src={event?.photo} alt="photo" />
          </div>
          <div className="eventInfo">
            <h1>{event?.eventName}</h1>
            <p>Added: {moment(date).startOf('day').fromNow()}</p>
            <h5>Date: {event?.date}</h5>
            <h6>About Event</h6>
            <p>{event?.description}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Index;
