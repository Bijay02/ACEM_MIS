import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import "./index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreviousEvents from "../../components/PreviousEvents";
import { Grid } from "@material-ui/core";
import { API_URL } from "../../../api/apiConstants";

const Index = () => {
  const [state, setState] = useState({
    eventName: "",
    date: "",
    venue: "",
    description: "",
    photo: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `${API_URL}/event`;
    const formData = new FormData();
    formData.append("eventName", state.eventName);
    formData.append("date", state.date);
    formData.append("venue", state.venue);
    formData.append("description", state.description);
    formData.append("photo", state.photo);

    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        toast.success("Submitted Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setState({
      eventName: "",
      date: "",
      venue: "",
      description: "",
      photo: "",
    });
    window.location.reload();
  };

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };
  const handleImage = (event) => {
    setState({
      ...state,
      photo: event.target.files[0],
    });
  };
  return (
    <Grid container direction="row" spacing={1}>
      <ToastContainer />
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="main_container">
        <form className="event_form" onSubmit={handleSubmit}>
          <h1 className="">Add Event</h1>
          <div className="event_info">
            <label className="">Event Name:</label>
            <input
              type="text"
              placeholder="Enter Name of Student"
              name="eventName"
              value={state.eventName}
              onChange={handleState}
            />
          </div>
          <div className="event_info">
            <label className="">Event Date:</label>
            <input
              type="text"
              placeholder="Enter Name of Student"
              name="date"
              value={state.date}
              onChange={handleState}
            />
          </div>
          <div className="event_info">
            <label className="">Venue:</label>
            <input
              type="text"
              name="venue"
              value={state.venue}
              onChange={handleState}
            />
          </div>
          <div className="event_info">
            <label className="desc">Event Description:</label>
            <textarea
              type="textarea"
              name="description"
              value={state.description}
              onChange={handleState}
            />
          </div>

          <div className="photoupload">
            <label className="">Event Photo:</label>
            <input type="file" name="photo" onChange={handleImage} />
          </div>
          <div className="event_button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="PreviousEvents">
        <h1 className="prevEvent_h1">Previous Events</h1>
        <div className="insideEvents">
          <PreviousEvents />
        </div>
      </div>
    </Grid>
  );
};

export default Index;
