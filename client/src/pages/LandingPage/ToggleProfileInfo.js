import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";



const ToggleProfileInfo = ({ title, value1, value2, link, exp }) => {
  const [value, setValue] = React.useState(value1);
  const [ex, setEx] = useState(exp);
  const expandHandler = () => {
    setEx(!ex);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  

  return (
    <div className="my-3">
      <Accordion
        onClick={expandHandler}
        expanded={exp && ex}
        style={{ backgroundColor: "#EDEFF7" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={link ? `${link}` : "/profile"}
              >
                <FormControlLabel
                  value={value1}
                  control={<Radio />}
                  label={value1}
                />
              </Link>
              {value2 && (
                <FormControlLabel
                  value={value2}
                  control={<Radio />}
                  label={value2}
                />
              )}
            </RadioGroup>
          </FormControl>

          <Divider />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ToggleProfileInfo;
