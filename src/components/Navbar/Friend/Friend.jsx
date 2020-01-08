import React from 'react';
import classes from './../Navbar.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            {props.friend}
        <img src={props.avatar} alt=""/>
        </div>
    )
}

export default Friend;