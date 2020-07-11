import React from "react";
//
import {  NavLink } from "react-router-dom";

const Common = (props) =>
{
    return(
        <>
            <section id ="header" className ="d-flex alig n-items-center">
                <div className ="container-fluid ">
                    <div className ="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                                <div className="col-md-3 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}<br/>
                                        <strong className = "brand-name">Cat Academy</strong></h1>
                                    <h2 className="my-3">Welocme to our Cat Academy</h2>
                                        <div className="mt-3-btn"><NavLink to={props.visit}><button type="button" class="btn btn-outline-info">{props.btname}</button></NavLink>
                                        </div>

                                </div>
                            
                            
                                <div className="col-lg-8 order-1 order-lg-1 header-img">
                                    <img src ={props.imgsrc} className ="img-fluid-animate" alt="homeimg"/>
                                
                                </div>
                                </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        </>
    );
};

export default Common;

