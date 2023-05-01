import React, { useState } from "react";
import Papa from "papaparse";
import Sidebar from "../../components/sidebar";
import axios from "axios";
// import "./index.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../../api/apiConstants";



const faculties = [
  {
    value: "BCT",
    label: "BCT",
  },
  {
    value: "BCE",
    label: "BCE",
  },
  {
    value: "BEX",
    label: "BEX",
  },
  {
    value: "BEI",
    label: "BEI",
  },
  {
    value: "BCA",
    label: "BCA",
  },
];
const sections = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
];

// function DataTable({ data }) {
//   return (
//     <table className="table">
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             {row.map((cell, i) => (
//               <td key={i}>{cell}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

const Index = () => {
  const [state, setState] = React.useState({
    batch: "2075",
    faculty: "BCT",
    section: "A",
  });
  // const [data, setData] = useState([]);

  const handleState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(state);
  };

  const [jsonData, setJsonData] = useState(null);

  const convertCSVtoJSON = (file) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setJsonData(results.data);
      }
    });
  }

  // const handleFileSelect = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     complete: (results) => {
  //       setData(results.data);
  //       console.log(results.data);
  //     },
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("batch", state.batch);
    formData.append("faculty", state.faculty);
    formData.append("section", state.section);
    formData.append("data", JSON.stringify(jsonData));
    try {
      const response = await axios.post(
        `${API_URL}/routinecsv`,
        formData
      );
      if (response.status === 200) {
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
    } catch (error) {
      console.log(error);
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
    window.location.reload();
  };

  return (
    <Grid container direction="row" spacing={1}>
      <ToastContainer />

      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="main_container">
        <form>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="batch"
              name="batch"
              value={state.batch}
              onChange={handleState}
              label="Batch (E.g 2075)"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="faculty"
              select
              label="Faculty"
              name="faculty"
              value={state.faculty}
              onChange={handleState}
              helperText="Please select your faculty"
              variant="standard"
            >
              {faculties.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="section"
              select
              label="Section"
              name="section"
              value={state.section}
              onChange={handleState}
              helperText="Please select your section"
              variant="standard"
            >
              {sections.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <input type="file" accept=".csv" onChange={(e) => convertCSVtoJSON(e.target.files[0])} />

          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {/* <DataTable data={data} /> */}
      </div>
    </Grid>
  );
};

export default Index;
