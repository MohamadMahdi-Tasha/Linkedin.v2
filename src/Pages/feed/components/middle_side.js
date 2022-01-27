// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Profile_Picture from "../../../components/profile-picture";
import {login_name} from "../../log-in/log-in";
import Profile_Cards from "../../../components/profile-card";

// A Class Component That Holds All Middle Side Component Elements
class Middle_side extends Component{
    render() {
        return (
            <div className={'width-50 h-100 middle-side'}>
                <div className={'p1 bgc-white width-100 roundeddot5 border-1-light-black mb-1'}>
                    <div className={'dis-inline-flex width-100 ai-center mb-1'}>
                        <Profile_Picture first_name={login_name.slice(0,1).toUpperCase()} className={'p1 mr-1 circle w-4rem h-4rem dis-flex jc-center ai-center'}/>
                        <form className={'width-100'} action="#">
                            <input className={'width-100 bgc-light-blue p1 border-none rounded1 placeholder-blue input-hover-focus outline-none'} type={'text'} placeholder="Start A Post"/>
                        </form>
                    </div>
                    <div className={'width-100 dis-inline-flex jc-sb'}>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-sky-blue mr-dot5 bi-card-image"></i>
                                <span className={'fs-1'}>Photo</span>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-green mr-dot5 bi-youtube"></i>
                                <span className={'fs-1'}>Video</span>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-orange mr-dot5 bi-calendar-date"></i>
                                <span className={'fs-1'}>Event</span>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-red mr-dot5 bi-newspaper"></i>
                                <span className={'fs-1'}>Write An Article</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className={'width-100 jc-center ai-center mb-1'}><div className={'border-bottom-1-light-black'}></div></div>
                <div className={'width-100 bgc-white roundeddot5 border-1-light-black ov-hidden'}>
                    <div className={'p1'}>
                        <h3 className={'width-100 dis-flex jc-center mt-2'}>{login_name}, Want Even More Updates?</h3>
                        <div className={'dis-flex jc-center mb-1'}>
                            <p className={'c-light-gray'}>Add these people you may know to your network, and you'll see their updates <br/><span className={'dis-flex jc-center'}>in the feed.</span></p>
                        </div>
                        <div className={'dis-inline-flex jc-sb mb-1 width-100'}>
                            <Profile_Cards className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35'}/>
                        </div>
                        <div className={'dis-inline-flex jc-sb width-100 mb-1'}>
                            <Profile_Cards className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35'}/>
                        </div>
                    </div>
                    <div className={'width-100 bgc-white border-top-1-light-black p1 bg-none-btn-hover'}>
                        <a className={'width-100 dis-flex jc-center ai-center'} href="#">Discover More</a>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting Middle Side Component
export default Middle_side;