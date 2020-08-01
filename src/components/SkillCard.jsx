import React from "react";
import SkillIcon from "./SkillIcon";

const SkillCard = (props) => (
    <div className="skill-card">
        <dt className="card-top">
            <SkillIcon image={props.icon} class="skill-icon"/>
        </dt>
        <dt>
            {props.title}
        </dt>
        <dd className={props.class}>{props.description}</dd>
    </div>
);

export default SkillCard    ;
