import React from "react";
import Underline from "./Underline";

const Title = (props) => (
    <div className="title">
        <h3>{props.title}</h3>
        <Underline />
    </div>
);

export default Title;