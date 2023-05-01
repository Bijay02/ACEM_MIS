import React from 'react';
import { Chart } from 'react-google-charts';

const attendanceData = {
  'EPP': [
    { month: 'Kartik', attendance: 85 },
    { month: 'Mangsir', attendance: 85 },
    { month: 'Poush', attendance: 75 },
    { month: 'Magh', attendance: 65 },
    { month: 'Falgun', attendance: 95 },
  ],
  'I&I': [
    { month: 'Kartik', attendance: 75 },
    { month: 'Mangsir', attendance: 75 },
    { month: 'Poush', attendance: 70 },
    { month: 'Magh', attendance: 80 },
    { month: 'Falgun', attendance: 90 },
  ],
  'IS': [
    { month: 'Kartik', attendance: 70 },
    { month: 'Mangsir', attendance: 70 },
    { month: 'Poush', attendance: 80 },
    { month: 'Magh', attendance: 85 },
    { month: 'Falgun', attendance: 75 },
  ],
  'Simulation & Modelling': [
    { month: 'Kartik', attendance: 65 },
    { month: 'Mangsir', attendance: 65 },
    { month: 'Poush', attendance: 75 },
    { month: 'Magh', attendance: 80 },
    { month: 'Falgun', attendance: 70 },
  ],
  'BigData': [
    { month: 'Kartik', attendance: 80 },
    { month: 'Mangsir', attendance: 80 },
    { month: 'Poush', attendance: 70 },
    { month: 'Magh', attendance: 75 },
    { month: 'Falgun', attendance: 85 },
  ],
  'Multimedia': [
    { month: 'Kartik', attendance: 90 },
    { month: 'Mangsir', attendance: 90 },
    { month: 'Poush', attendance: 80 },
    { month: 'Magh', attendance: 85 },
    { month: 'Falgun', attendance: 95 },
  ],
  'Project': [
    { month: 'Kartik', attendance: 75 },
    { month: 'Mangsir', attendance: 75 },
    { month: 'Poush', attendance: 85 },
    { month: 'Magh', attendance: 80 },
    { month: 'Falgun', attendance: 70 },
  ],
};

const data = [['Month', 'EPP', 'I&I', 'IS', 'Simulation & Modelling', 'BigData', 'Multimedia', 'Project'],
...attendanceData.EPP.map((entry, index) => [entry.month, entry.attendance, attendanceData['I&I'][index].attendance,
attendanceData.IS[index].attendance,
attendanceData['Simulation & Modelling'][index].attendance,
attendanceData['BigData'][index].attendance,
attendanceData.Multimedia[index].attendance,
attendanceData.Project[index].attendance,
]),
];

// const options = {
//   legend: { position: 'top', maxLines: 3 },
//   bar: { groupWidth: '75%' },
//   isStacked: true
// };

const AttendanceChart = () => {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: 'Attendance Report 2079',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Attendance',
          minValue: 0,
        },
        vAxis: {
          title: 'Month',
        },
      }}

    />
  )
}

export default AttendanceChart;