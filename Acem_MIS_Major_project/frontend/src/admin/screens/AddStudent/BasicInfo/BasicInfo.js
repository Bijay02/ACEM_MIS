import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";

export default function BasicInfo({ state, setState }) {
  const handleState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(state);
  };
  const handleImage=(event)=>{
    setState({
      ...state,
      profile:event.target.files[0]
    })
  }

  return (
    <React.Fragment>
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
            onChange={handleState}
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
            onChange={handleState}
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
            onChange={handleState}
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
            onChange={handleState}
            label="Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            id="phone"
            name='profile'
            type='file'
            onChange={handleImage}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="HomeTown"
            name="hometown"
            value={state.hometown}
            onChange={handleState}
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
            onChange={handleState}
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
            onChange={handleState}
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
            onChange={handleState}
            label="Date of Birth (DD/MM/YYYY)"
            fullWidth
            variant="standard"
          />
        </Grid>

        {/*
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="BloodGroup"
            name="bloodgroup"
            value={state.bloodgroup}
            onChange={handleState}
            label="BloodGroup"
            fullWidth
            variant="standard"
          /> 
  
        </Grid>
        */}
        <Grid item xs={12} sm={6}>
        <p>BloodGroup</p>
          <select 
          required
          value={state.bloodgroup}
          id="BloodGroup"
          name="bloodgroup"
          onChange={handleState}
          label="BloodGroup"
          fullWidth
          variant="standard"
          >
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
          </select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
