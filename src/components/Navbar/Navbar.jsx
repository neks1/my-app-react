import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';

const Navbar = (props) => {
    let friendsElements = props.state.friends.map( friend => <Friend friend={friend.friend} avatar={friend.avatar} key={friend.id} />);

    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                <h2>Friends</h2>
                <div className={classes.friendsWrapper}>
                    { friendsElements }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;