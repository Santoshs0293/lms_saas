import { Container, IconButton, StylesProvider } from "@mui/material";
import React from "react";
import Styles from './Body4Card.module.css'
import './Body4Card.css'
import { Link } from "react-router-dom";


const Body4Card = ({ title, Icon,shortTitle ,link}) => {
  return (
    <Link to={`${link}`} className={Styles.body4__card}>
        <IconButton className={Styles.icon__style} >
        <Icon fontSize="small" className='icon__style__b4card'  />
      </IconButton>
        <div className="">
        <span className={Styles.shortTitle}  >{shortTitle}</span>
      <h6>{title}</h6>
        </div>
        
     
    </Link>
  );
};

export default Body4Card;
