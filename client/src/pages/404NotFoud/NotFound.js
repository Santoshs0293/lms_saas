import { Button, Typography } from "@mui/material";

import React from "react";
import { useNavigate  } from "react-router";
import Styles from "./Notfound.module.css";

const NotFound = () => {
    const history=useNavigate ()
  return (
    <div className={Styles.main__div}>
      <Typography className="text-center text-light" variant="h2">
        Oops!! <br />
        404 Not Found
      </Typography>
      <Button className='my-3' onClick={()=>{
          history('/admin-dashboard')
      }} variant="contained" color="primary">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
