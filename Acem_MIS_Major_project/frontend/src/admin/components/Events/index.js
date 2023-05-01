import React, { useEffect, useState } from 'react'
import '../Totalstudents/totalstudents.css'
import { BsCalendar4Event } from 'react-icons/bs';
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../../api/apiConstants'


const Index = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const event = async () => {
      const response = await axios.get(`${API_URL}/events/1`);
      console.log(response.data);
      setEvents(response.data.count);
    };
    event();
  }, []);
  return (
    <Link to={`/admin/Add_Events`}>
      <div className='Student_box'>
        <h1> <BsCalendar4Event /> {events}</h1>
        <h5>New Upcoming  Events</h5>
      </div>
    </Link>
  )
}

export default Index