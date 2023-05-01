import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import styles from "./feedback.module.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@material-ui/core";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { Modal } from "antd";
import { API_URL } from "../../../api/apiConstants";

const Index = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackToDelete, setFeedbackToDelete] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await axios.get(
        `${API_URL}/feedbacks/${page}`
      );
      const totalPage = Math.ceil(response.data.count / response.data.perPage);
      setTotalPage(totalPage);
      setFeedbacks(response?.data?.feedbacks);
    };
    fetchFeedbacks();
  }, [page]);

  const handleDeleteFeedback = async () => {
    try {
      await axios.delete(`${API_URL}/feedback/${feedbackToDelete._id}`);
      setIsModalVisible(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className={styles.main_container}>
        {feedbacks.map((feedback) => {
          return (
            <div className={styles.feedback_box} key={feedback.timestamp}>
              <div className={styles.student_info}>
                <div className={styles.image}>
                  <img
                    src={feedback.student.profile}
                    alt={feedback.student.profile}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{feedback.student.name}</h3>
                  <h4>
                    Added:{" "}
                    {moment(feedback.timestamp).startOf("hour").fromNow()}
                  </h4>
                  <div className={styles.clz_info}>
                    <p className={styles.batch}>
                      Batch: {feedback.student.batch}
                    </p>
                    <p className={styles.section}>
                      Section: {feedback.student.section}
                    </p>
                    <h5 className={styles.delete}>
                      <RiDeleteBinLine
                        className="deleteIcon"
                        onClick={() => {
                          setFeedbackToDelete(feedback);
                          setIsModalVisible(true);
                        }}
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <h1>{feedback.TeacherName}</h1>
              <h5>Faculty: {feedback.faculty}</h5>
              <p>{feedback.feedbackMessage}</p>
            </div>
          );
        })}
        <div className={styles.pagination}>
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            onChange={(e, value) => setPage(value)}
          />
        </div>
      </div>
      <Modal
        title="Delete Feedback"
        visible={isModalVisible}
        onOk={handleDeleteFeedback}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Are you sure you want to delete this feedback?</p>
      </Modal>
    </Grid>
  );
};

export default Index;
