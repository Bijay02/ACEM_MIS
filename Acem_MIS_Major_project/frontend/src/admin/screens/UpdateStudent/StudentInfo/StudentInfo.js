import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from "../../../../api/apiConstants";

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
const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

export default function StudentInfo({ state, setState }) {
  const { id } = useParams();
  const [student, setStudent] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchStudent = async () => {
      const response = await axios.get(
        `${API_URL}/students/${id}`
      );
      setStudent(response.data);
      setLoading(false);
    };
    fetchStudent();
  }, [id]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form >
      <Typography variant="h6" gutterBottom>
        College Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="batch"
            name="batch"
            value={state.batch}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
        <Grid item xs={12} md={6}>
          <TextField
            id="gender"
            select
            label="Gender"
            name="gender"
            value={state.gender}
            onChange={handleChange}
            helperText="Please select your gender"
            variant="standard"
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="height"
            name="height"
            value={state.height}
            onChange={handleChange}
            label="Height (E.g 5'11)*"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="weight"
            name="weight"
            value={state.weight}
            onChange={handleChange}
            label="Weight*"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="contact"
            name="contact"
            value={state.contact}
            onChange={handleChange}
            label="Contact No.*"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="fatherContact"
            name="fathercontact"
            value={state.fathercontact}
            onChange={handleChange}
            label="Father's Contact No. *"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </form>
  );
}

