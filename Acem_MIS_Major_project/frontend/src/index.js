import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/profile";
import Courses from './components/courses'
import Feedback from './components/feedback'
import Events from './components/events'
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./admin/screens/dashboard";
import AddStudent from './admin/screens/AddStudent'
import AddEvents from './admin/screens/AddEvents'
import StudentBatch from './admin/screens/StudentBatch'
import Feedbacks from './admin/screens/Feedbacks'
import AdminLogin from './admin/screens/AdminLogin'
import AdminPrivate from './../src/admin/components/adminPrivate'
import StudentPrivate from './../src/components/StudentPrivate'
import Students from './admin/screens/Students'
import StudentInfo from './admin/screens/StudentInfo'
import StudentFaculty from './admin/screens/StudentFaculty'
import StudentSection from './admin/screens/StudentSection'
import AddRoutine from './admin/screens/AddRoutine'
import Performance from './admin/screens/Performance'
import SingleEvent from './components/events/SingleEvent'
import StudentPerformance from './components/Performance'
import Attendance from './components/Attendance'
import Exams from './components/Exams'
import SearchedStudent from './admin/screens/SearchedStudent';
import UpdateStudent from './admin/screens/UpdateStudent';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<StudentPrivate />}>
        <Route path="/Timeline" element={<App />} />
        <Route path="/Logout" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Performance" element={<StudentPerformance />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Event/:id" element={<SingleEvent />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Route>
      <Route path="/" element={<Login />} />

      <Route element={<AdminPrivate />}>
        <Route path="/admin/timeline" element={<Dashboard />} />
        <Route path="/admin/Add_Students" element={<AddStudent />} />
        <Route path="/admin/UpdateStudent/:id" element={<UpdateStudent />} />
        <Route path="/admin/Add_Events" element={<AddEvents />} />
        <Route path="/admin/Add_Routine" element={<AddRoutine />} />
        <Route path="/admin/Performance" element={<Performance />} />
        <Route path="/admin/Student_Batch" element={<StudentBatch />} />
        <Route path="/admin/SearchedStudent/:name" element={<SearchedStudent />} />
        <Route path="/admin/Student_Batch/:batch" element={<StudentFaculty />} />
        <Route path="/admin/Student_Batch/:batch/:faculty" element={<StudentSection />} />
        <Route path="/admin/Student_Batch/:batch/:faculty/:section" element={<Students />} />
        <Route path="/admin/Student_Batch/:batch/:faculty/:section/:id" element={<StudentInfo />} />
        <Route path="/admin/Feedbacks" element={<Feedbacks />} />

      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />



    </Routes>
  </BrowserRouter>

);
