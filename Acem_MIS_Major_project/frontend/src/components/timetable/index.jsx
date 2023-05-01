import React, { useEffect, useState } from "react";
import "./timetable.css";
import axios from "axios";
import { API_URL } from "../../api/apiConstants";


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
  const studentinfo = JSON.parse(localStorage.getItem("model"));
  // console.log(studentinfo.batch);
  const batch = studentinfo.batch;
  const section = studentinfo.section;
  const [routines, setRoutines] = useState([]);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = d.getDay();
  // console.log(weekday[day]);

  useEffect(() => {
    const routine = async () => {
      const response = await axios.get(
        `${API_URL}/routine/${batch}/${section}/${weekday[day]}`
      );
      // const res=JSON.stringify(response.data.batch);
      console.log(response?.data?.timetable[0]?.routine);

      setRoutines(response?.data?.timetable[0]?.routine);
    };
    routine();
  }, []);

  return (
    <div className="timeline">
      <h5>Class Time table</h5>
      <hr />
      <div className="timetable">
        <div className="col-3">
          <h5>{weekday[day]}</h5>
        </div>
        <div className="routine">
          {weekday[day] === "Tuesday" || weekday[day] === "Saturday" ? (
            <div className="col-3">
              <h5>Happy Holiday</h5>
            </div>
          ) : (
            routines?.map((routine) => (
              <>
                <div className="col-3 time">
                  <div className="mb-3 ">
                    <h6>{routine?.starttime}</h6>
                    <h6>{routine?.endtime}</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="course">
                    <div>
                      <h6>{routine?.subject}</h6>
                      {/* <p>Roomno.{routine?.roomNo}</p> */}
                    </div>
                    <p>{routine?.teacherName}</p>
                  </div>
                </div>
              </>
            ))
          )}

        </div>
      </div>
      <hr />
    </div>
  );
};

// const [data, setData] = useState([]);
//   useEffect(() => {
//     const routine = async () => {
//       const response = await axios.get(
//         `http://localhost:8000/api/routinecsv/2075/BCT/A`
//       );
//       // const res=JSON.stringify(response.data.batch);
//       // console.log(response?.data?.timetable[0]?.routine);

//       setData(response?.data[0].data);
//       console.log(response?.data[0].data);
//     };
//     routine();
//   }, []);


// return (
//   <>
//   <DataTable data={data}/>
//   </>
// )
// }


export default Index;
