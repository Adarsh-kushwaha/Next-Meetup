import React from 'react';
import classes from "./MeetupDetail.module.css"

const MeetupDetail = (props) => {
    return <>
        <div className={classes.detailPage}>
            <img src={props.image} alt={props.id} />
            <h2>{props.title}</h2>
            <p>{props.address}</p>
            <p>{props.description}</p>
        </div>
    </>;
};

export default MeetupDetail;
