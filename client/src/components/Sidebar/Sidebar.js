import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate  } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ title, link, Icon ,admin }) => {
  const history = useNavigate ();
  const dispatch = useDispatch();
  console.log(title);
  return (
    <div className="sidebar__dashboard__row">
      {title === "sidebar.Logout" || title === "Logout" || title === "LogIn" ? (
        <div className='d-flex align-items-center' >
          <Icon style={{ color: "gray", marginRight:"10px"}} />
          <Button
          style={{ color: "gray"}}
            onClick={() => {
              localStorage.clear("user");
              localStorage.clear("auth_token");
              dispatch({ type: "CLEAR__USER" });
              history("/login");

            }}
          >
             
            <span color=""> {title}</span> 
          </Button>
          
        </div>
      ) : (
        <Link  to={`${link}`}>
          <Icon />
          {title}
        </Link>
      )}
     
    </div>
  );
};

export default Sidebar;
