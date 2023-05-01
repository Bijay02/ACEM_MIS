import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "Attendance",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 60, 43, 56, 70],
    },
  ],
};

const index = () => {
  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Attendance per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default index;
