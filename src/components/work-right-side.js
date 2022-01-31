// Codes By Mahdi Tasha
// Importing Part
import React from "react";

// A Class Component That Holds Right Side Work Components Element
function WorkRightSide(props) {
    return (
        <div className={props.className} id={props.id}>
            <div style={{zIndex: '997'}} className={'p-fixed width-100 bg-dark-rgba h-100'}></div>
            <div style={{zIndex: '999'}}
                 className={'work-right-side p-fixed bgc-white width-35 ov-scroll scroller-none p1 mt-5 h-100 border-left-rounded'}>
                <div className={'width-100 dis-flex jc-end'}>
                    <button aria-label={'close'}
                            className={'bg-none border-none transition-dot2 mb-1 bg-none-btn-hover w-3rem h-3rem circle'}>
                        <i className="bi bi-x-lg fs-1"></i></button>
                </div>
                <div className={'border-1-light-black roundeddot5'}>
                    <div className={'p1 border-bottom-1-light-black'}><h5>Visit More LinkedIn Products</h5></div>
                    <div className={'p1 div1-items'}>
                        <div className={'dis-inline-flex width-100 jc-sb ai-center'}>
                            <a href="#" className={'mr-dot5'}>
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-file-earmark-play-fill fs-1"></i>
                                    Learning
                                </button>
                            </a>
                            <a href="#" className={'mr-dot5'}>
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-file-earmark-bar-graph-fill fs-1"></i>
                                    Insights
                                </button>
                            </a>
                            <a href="#" className={'mr-dot5'}>
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-basket3-fill fs-1"></i>
                                    Post A Job
                                </button>
                            </a>
                            <a href="#">
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-bullseye fs-1"></i>
                                    Advertise
                                </button>
                            </a>
                        </div>
                        <div className={'dis-inline-flex width-100 jc-sb ai-center mt-1'}>
                            <a href="#" className={'mr-dot5'}>
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-compass-fill fs-1"></i>
                                    Find Leads
                                </button>
                            </a>
                            <a href="#" className={'mr-dot5'}>
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-people-fill fs-1"></i>
                                    Groups
                                </button>
                            </a>
                            <a href="#" className={'mr-dot5'}>
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-person-check-fill fs-1"></i>
                                    Services <br/> Market Place
                                </button>
                            </a>
                            <a href="#">
                                <button
                                    className={'width-100 dis-flex flex-d-c jc-center c-blue ai-center bg-none border-1-light-black pdot5 btn-hover-dark-blue hover-c-white roundeddot5'}>
                                    <i className="bi bi-cash-stack fs-1"></i>
                                    Salary
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'mt-1 mb-5 border-1-light-black roundeddot5'}>
                    <div className={'p1 border-bottom-1-light-black'}><h3>LinkedIn Business Services</h3></div>
                    <div className={'width-100'}>
                        <ul className={'list-unstyle width-100 border-bottom-1-light-black'}>
                            <li className={'width-100'}>
                                <a href="#" className={'width-100'}>
                                    <button
                                        className={'width-100 dis-flex flex-d-c jc-start bg-none border-none pdot5 bg-none-btn-hover'}>
                                        <h4>Talent Solution</h4>
                                        <h5 className={'c-light-gray'}>Find, attract and recruit talent</h5>
                                    </button>
                                </a>
                            </li>
                            <li className={'width-100'}>
                                <a href="#" className={'width-100'}>
                                    <button
                                        className={'width-100 dis-flex flex-d-c jc-start bg-none border-none pdot5 bg-none-btn-hover'}>
                                        <h4>Sales Solution</h4>
                                        <h5 className={'c-light-gray'}>Unlock sales opportunities</h5>
                                    </button>
                                </a>
                            </li>
                            <li className={'width-100'}>
                                <a href="#" className={'width-100'}>
                                    <button
                                        className={'width-100 dis-flex flex-d-c jc-start bg-none border-none pdot5 bg-none-btn-hover'}>
                                        <h4>Post A Job For Free</h4>
                                        <h5 className={'c-light-gray'}>Get your job in front of quality
                                            candidates</h5>
                                    </button>
                                </a>
                            </li>
                            <li className={'width-100'}>
                                <a href="#" className={'width-100'}>
                                    <button
                                        className={'width-100 dis-flex flex-d-c jc-start bg-none border-none pdot5 bg-none-btn-hover'}>
                                        <h4>Marketing Solution</h4>
                                        <h5 className={'c-light-gray'}>Acquire customers and grow your business</h5>
                                    </button>
                                </a>
                            </li>
                            <li className={'width-100'}>
                                <a href="#" className={'width-100'}>
                                    <button
                                        className={'width-100 dis-flex flex-d-c jc-start bg-none border-none pdot5 bg-none-btn-hover'}>
                                        <h4>Learning Solution</h4>
                                        <h5 className={'c-light-gray'}>Develop talent across your organization</h5>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={'width-100'}>
                        <a href="#" className={'width-100'}>
                            <button className={'width-100 p1 border-none bg-none bg-none-btn-hover'}>
                                Create a Company Page
                                <i className="bi bi-plus"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exporting WorkRightSide Component
export default WorkRightSide;