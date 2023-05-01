import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/clg.jpg";
import "./sidebar.css";
const Index = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };
  const students = [
    {
      id: 0,
      link: "Timeline",
      icon: "list-alt",
      not: "",
    },
    {
      id: 1,
      link: "Add_Students",
      icon: "user-circle",
      not: "",
    },
    {
      id: 2,
      link: "Student_Batch",
      icon: "group",
      not: "1",
    },
    {
      id: 3,
      link: "Add_Routine",
      icon: "calendar-check-o",
      not: "",
    },
    {
      id: 4,
      link: "Performance",
      icon: "bar-chart",
      not: "",
    },
    {
      id: 5,
      link: "Add_Events",
      icon: "calendar",
      not: "",
    },
    {
      id: 6,
      link: "Feedbacks",
      icon: "feed",
      not: "",
    },
  ];

  {
    const loc = window.location.pathname;

    return (
      <div className="sidebar text-left">
        <img src={logo} className="logo" alt="logo" />
        <h5 className="text-center">DashBoard</h5>
        <ul className="nav-list">
          {students.map((student) => {
            return (
              <li
                key={student.id}
                className={
                  loc.slice(1) === student.link
                    ? "list-item active"
                    : "list-item"
                }
              >
                <Link
                  to={`/admin/${student.link}`}
                  className={
                    loc.slice(1) === student.link
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <span>
                    <i className={`fa fa-${student.icon}`}></i>
                  </span>
                  <h6>{student.link}</h6>
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="admin-btn" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
};

export default Index;
