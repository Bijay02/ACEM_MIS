import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
  const handleState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(state);
  };

  return (
    <React.Fragment>
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
        <Grid item xs={12} md={6}>
          <TextField
            id="gender"
            select
            label="Gender"
            name="gender"
            value={state.gender}
            onChange={handleState}
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
            value={state.height}
            onChange={handleState}
            id="height"
            name="height"
            label="Height (E.g 5'11)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={state.weight}
            onChange={handleState}
            id="weight"
            name="weight"
            label="Weight"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={state.contact}
            onChange={handleState}
            id="contact"
            name="contact"
            label="Contact No."
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={state.fathercontact}
            onChange={handleState}
            id="fatherContact"
            name="fathercontact"
            label="Father's Contact No."
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
