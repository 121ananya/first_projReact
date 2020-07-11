import React from "react";

import { NavLink } from "react-router-dom";

const Card = (props) =>
{
    return(
        <>
                <div className="col-10 mx-auto">
                <div className="row  gy-4">
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="web development">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content.</p>
                                            <NavLink to="https://www.vedantu.com/masterclass/className-12th-shreeraj-namjoshi-commerce-12au94?" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content.</p>
                                            <NavLink to="https://images.ctfassets.net/bolxcurd7mj1/7MDOhjiJfy9uvBv11vSDRU/34640ef9a84fa353ece75947f3f438dc/flutterLCO.png?w=200&h=120&q=50&fit=fill" className="btn btn-primary">Go somewhere
                                            </NavLink>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4 mx-auto">
                        <div className="App developement">
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content.</p>
                                            <NavLink to="#" className="btn btn-primary">Go somewhere
                                            </NavLink>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4 mx-auto">
                        <div className="Software developement">
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content.</p>
                                            <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4 mx-auto">
                        <div className="algo">
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content.</p>
                                            <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4 mx-auto">
                        <div className="java">
                            <img src={props.imgsrc} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content</p>
                                        
                                            <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                                        
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                    

        </>
    );
};

export default Card;
