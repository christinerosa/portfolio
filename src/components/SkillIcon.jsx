import React from "react";

const SkillIcon = (props) => (
    <div className="skill-icon-container">
        <img className={props.class} src={props.image} alt="python"></img>
    </div>
);

export default SkillIcon;