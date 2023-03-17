import React, { useEffect, useState } from "react";
import "./toapp.scss";


const ToApp = (props) => {
    return (
        <div className="toapp">
            <input type="checkbox" onChange={()=>props.complited()}/>
            <p className="container">{props.item}</p>
        </div>
    )
}

export default ToApp;