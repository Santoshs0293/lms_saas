import React from "react";
import SideCalender from "../../../components/Calender/SideCalender";
import UpcomingEvents from "./UpcommingEvents/UpcomingEvents";
import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";

const RightSidebar = () => {
  return (
    <div>
        <div className="mb-4 rounded shadow" style={{backgroundColor:"white",padding:"10px"}}>
      <Typography variant="h6" className="p-3">Upcoming events</Typography>

      <UpcomingEvents
        Icon={PersonIcon}
        title="Attendance"
        time="Thursday, 6 May, 12:00 AM"
      />
      <UpcomingEvents
        Icon={PersonIcon}
        title="Attendance"
        time="Thursday, 6 May, 12:00 AM"
      />
      <UpcomingEvents
        Icon={PersonIcon}
        title="Attendance"
        time="Thursday, 6 May, 12:00 AM"
      />
      <UpcomingEvents
        Icon={PersonIcon}
        title="Attendance"
        time="Thursday, 6 May, 12:00 AM"
      />
      <UpcomingEvents
        Icon={PersonIcon}
        title="Attendance"
        time="Thursday, 6 May, 12:00 AM"
      />
      </div>
      <SideCalender />
    </div>
  );
};

export default RightSidebar;
