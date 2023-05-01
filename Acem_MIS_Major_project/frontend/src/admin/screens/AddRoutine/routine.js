import React from "react";
import Sidebar from "../../components/sidebar";
import styles from "./routine.module.css";
import { Grid } from "@material-ui/core";

const index = () => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className={styles.main_container}>
        <form>
          <div className={styles.firstRow}>
            <div className={styles.form_group}>
              <label>Batch:</label>
              <select name="" id="">
                <option value="">2075</option>
                <option value="">2076</option>
                <option value="">2077</option>
                <option value="">2078</option>
              </select>
            </div>
            <div className={styles.form_group}>
              <label>Faculty:</label>
              <select name="" id="">
                <option value="">BCT</option>
                <option value="">BCE</option>
                <option value="">BEI</option>
                <option value="">BEX</option>
                <option value="">BEL</option>
                <option value="">BCA</option>
              </select>
            </div>
            <div className={styles.form_group}>
              <label>Section:</label>
              <select name="" id="">
                <option value="">A</option>
                <option value="">B</option>
              </select>
            </div>
            <div className={styles.form_group}>
              <label>Day:</label>
              <select name="" id="">
                <option value="">Sunday</option>
                <option value="">Monday</option>
                <option value="">Tuesday</option>
                <option value="">Wednesday</option>
                <option value="">Thursday</option>
                <option value="">Friday</option>
              </select>
            </div>
          </div>

          <div className={styles.time}>
            <label>Starting Time:</label>
            <input type="time" />
          </div>
          <div className={styles.time}>
            <label>Ending Time:</label>
            <input type="time" />
          </div>
          <div className={styles.form_group}>
            <label>Teacher Name:</label>
            <input type="text" />
          </div>
          <div className={styles.form_group}>
            <label>Subject:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </Grid>
  );
};

export default index;
