import * as React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import { API_URL } from "../../../../api/apiConstants";

export default function BasicInfo({ state, setState }) {
  const { id } = useParams();
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getStudentInfo = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/students/${id}`
        );
        setState(response.data);
      } catch (err) {
        setError(err);
      }
    };
    getStudentInfo();
  }, [id]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleImage = (event) => {
    setState({
      ...state,
      profile: event.target.files[0],
    });
  };

  return (
    <form >
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="name"
            value={state.name}
            onChange={handleChange}
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CollegeId "
            name="cid"
            value={state.cid}
            onChange={handleChange}
            label="College ID (ACE000BCX000)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
            label="Email"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="location"
            value={state.location}
            onChange={handleChange}
            label="Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            id="profile"
            name="profile"
            type="file"
            onChange={handleImage}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="HomeTown"
            name="hometown"
            value={state.hometown}
            onChange={handleChange}
            label="HomeTown"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FatherName"
            name="fathername"
            value={state.fathername}
            onChange={handleChange}
            label="Father's Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="MotherName"
            name="mothername"
            value={state.mothername}
            onChange={handleChange}
            label="Mother's Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Dob"
            name="Dob"
            value={state.Dob}
            onChange={handleChange}
            label="Date of Birth (DD/MM/YYYY)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bloodgroup"
            name="BloodGroup"
            value={state.bloodgroup}
            onChange={handleChange}
            label="BloodGroup"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </form>
  );
}


