import React from "react";
import { useState } from "react";
import './index.css'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from '../../../api/apiConstants'

const Index = () => {
  const [faculty, setFaculty] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `${API_URL}/faculty`;
    const formData = new FormData();
    formData.append("faculty", faculty);
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
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <input type="text" placeholder="Faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
        <button type="submit">Add New Faculty</button>
      </form>
    </>
  );
};

export default Index;
