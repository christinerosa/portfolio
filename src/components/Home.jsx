import React from "react";
import { Container } from "react-bootstrap";
import Button from "./Button";

const Home = () => (
    <Container fluid id="home" className="welcome-container">
        <div className="welcome-text">
            <h1>Hi, I'm <span className="name">Christine Rosa</span>.</h1>
            <h3>I'm a full stack developer.</h3>
            <Button Classes="btn learn-more" ButtonName="Learn More" Icon="./images/next.png" />
        </div>
    </Container>
);

export default Home;