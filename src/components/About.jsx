import React from "react";
import Title from "./Title";
import { Container } from "react-bootstrap";
import SkillCard from "./SkillCard";
import skills from "../skills";

function About() {
    
    function createSkillCard(skillDetail) {
        return (
            <SkillCard 
                key={skillDetail.id}
                icon={skillDetail.icon}
                title={skillDetail.title}
                description={skillDetail.description}
                class={skillDetail.class}
            />
        );
    }
    
    return (
        <Container fluid id="about" className="about-container">
            <Title title="ABOUT ME" />
            <div className="skills">
                {skills.map(createSkillCard)}
            </div>
        </Container>
    );
}

export default About;