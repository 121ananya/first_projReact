import React from "react";
import web from "../src/images/web development.png";
import Common from './Common';

const About = () =>
{
    return(
        <>
        <Common name="Welcome to our About Page" imgsrc={web} visit="/Contact" btname="Contact now"/>
        </>
    );
};

export default About;

