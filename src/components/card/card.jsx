import React from "react";
import classes from './card.module.css';
import { NavLink } from "react-router-dom";
// import RoutePaths from "../RoutePaths/RoutePaths";
import { useState, useEffect } from "react";

function Card(props) {

    

    return (
        <div>
            {/* <NavLink to={`/product/${p.id}`}> */}
            <div className={classes.card}>
                <li>{props.id}</li>
                <li>{props.title}</li>
                <li>{props.price}</li>
                <li>{props.description}</li>
                <li>{props.category}</li>
                <img className={classes.image} src={props.image}/>
                <li>{props.rate}</li>
                <li>{props.count}</li>
            </div>
            {/* </NavLink> */}
        </div>
    )
}

export default Card