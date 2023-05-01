import React from "react";
import { useState } from "react";
import "./index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from '../../../api/apiConstants'

const Index = () => {
  const [batch, setBatch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `${API_URL}/batch`;
    const formData = new FormData();
    formData.append("batch", batch);
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
        <input
          type="text"
          placeholder="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <button type="submit">Add New Batch</button>
      </form>
    </>
  );
};

export default Index;
