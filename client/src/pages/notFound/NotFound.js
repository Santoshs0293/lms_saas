import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from "../routes"

const NotFound = () => {
    return (
        <div className="errorPage" >
            <form></form>
            <div className="imgCont" >
                <Link to={HOME_PAGE} >
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png" />
                </Link>
                <img src={`https://images-na.ssl-images-amazon.com/images/G/01/error/${Math.floor(Math.random() * 200) + 1}._TTD_.jpg`} />
            </div>
        </div>
    );
};

export default NotFound;