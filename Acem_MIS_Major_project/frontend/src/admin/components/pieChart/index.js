import React, { useState } from "react";

import { Doughnut } from 'react-chartjs-2';

const Index = () => {

  const [chartData, setChartData] = useState({
    labels: ['Attendance', 'Assignment', 'Assesment', 'Previous Result'],
    datasets: [{
      data: [0.4, 0.8, 0.6, 0.3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#ccc'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#ccc']
    }]
  });

  return (
    <div>
      <Doughnut
        data={chartData}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default Index;