import React from "react";
import web from "../src/img6.jpg";
import Common from './Common';

const Home = () =>
{
    return(
    <>
        <Common name="We create Future!" 
        imgsrc={web} 
        visit="/Service" 
        btname="Get Started"/>
    </>
    );
};

export default Home;
