import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import styles from "./event.module.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import moment from "moment";
import { API_URL } from "../../api/apiConstants";

const Index = () => {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const [totalPage, setTotalPage] = useState(2);

  useEffect(() => {
    const event = async () => {
      const response = await axios.get(
        `${API_URL}/events/${page}`
      );
      const totalPage = Math.ceil(response.data.count / response.data.perPage);
      setTotalPage(totalPage);
      // console.log(response.data);
      setEvents(response.data.events);
    };
    event();
  }, [page]);
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className={styles.main_container}>
        {events.map((event) => (
          <Link to={`/Event/${event._id}`}>
            <div className={styles.event_box} key={event.date}>
              <h1>{event.eventName}</h1>
              <h4>Added: {moment(event.timestamp).startOf('day').fromNow()}</h4>
              <h6>Date:{event.date}</h6>
              <p>Venue:{event.venue}</p>
              {/* <p>About Event: <br/>{event.description}</p> */}
              <img src={event.photo} alt={event.photo} />
            </div>
          </Link>
        ))}
        <div className={styles.pagination}>
          {/* <Stack spacing={2}> */}
          {/* <Pagination count={10} shape="rounded" /> */}
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            onChange={(e, value) => setPage(value)}
          />
          {/* </Stack> */}
        </div>
      </div>
    </Grid>
  );
};

export default Index;
