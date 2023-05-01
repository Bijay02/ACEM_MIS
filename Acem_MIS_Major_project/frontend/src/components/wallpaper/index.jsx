import React from "react";
import "./wallpaper.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const auth = localStorage.getItem("model");
  const navigate = useNavigate();
  // const [StudentData, setStudentData] = useState({});

  const logout = () => {
    localStorage.removeItem("model");
    localStorage.removeItem("studentToken");
    navigate("/");
  };

  return (
    <div className="wallpaper">
      <div className="wall_image"></div>
      <div className="text d-flex">
        <div className="image-upload">
          <label>
            <img src={JSON.parse(auth).profile} alt="ProfileImage" />
          </label>
        </div>
        <ul className="list d-flex">
          <li>
            <h6 className="listname">{JSON.parse(auth).name}</h6>
            <span>{JSON.parse(auth).location}</span>
          </li>
          <li>
            <h6>
              {JSON.parse(auth).faculty}-{JSON.parse(auth).section}
            </h6>
            <span>Department</span>
          </li>
          <li>
            <h6>{JSON.parse(auth).batch}</h6>
            <span>Batch</span>
          </li>
          <li>
            <button className="logout_btn" onClick={logout}>
              <i className={"fa fa-user"}></i>Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
