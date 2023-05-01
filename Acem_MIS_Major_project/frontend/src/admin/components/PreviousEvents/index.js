import React, { useEffect, useState } from "react";
import "./prevEvent.css";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import { Modal } from "antd";
import { API_URL } from "../../../api/apiConstants";


const Index = () => {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteEventId, setDeleteEventId] = useState(null);

  useEffect(() => {
    const event = async () => {
      const response = await axios.get(`${API_URL}/prevEvents`);
      console.log(response.data);
      setEvents(response.data.events);
    };
    event();
  }, []);

  const showDeleteConfirmationModal = (eventId) => {
    setIsModalVisible(true);
    setDeleteEventId(eventId);
  };

  const handleDeleteEvent = async () => {
    await axios.delete(`${API_URL}/event/${deleteEventId}`);
    setIsModalVisible(false);
    setDeleteEventId(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setIsModalVisible(false);
    setDeleteEventId(null);
  };

  return (
    <div className="Admin_events">
      <div className="main_container">
        {events.map((event) => (
          <div className="event_box" key={event.date}>
            <h1>{event.eventName}</h1>
            <div className="event_textInfo">
              <div className="eventInfo">
                <h6>Date:{event.date}</h6>
                <p>Venue:{event.venue}</p>
              </div>

              <div className="deleteEvent">
                <RiDeleteBinLine onClick={() => showDeleteConfirmationModal(event?._id)} />
              </div>
            </div>
            {/* <p>About Event: <br/>{event.description}</p> */}
            <img src={event.photo} alt={event.photo} />
          </div>
        ))}
      </div>
      <Modal
        title="Confirm Deletion"
        visible={isModalVisible}
        onOk={handleDeleteEvent}
        onCancel={handleCancelDelete}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this event?</p>
      </Modal>
    </div>
  );
};

export default Index;



