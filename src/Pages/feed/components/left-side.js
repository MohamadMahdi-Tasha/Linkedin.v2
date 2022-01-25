// Codes By Mahdi Tasha
// Importing Part
import React, {Component} from "react";
import Profile_Picture, {color} from './../../../components/profile-picture';
import { login_name } from './../../log-in/log-in';

// A Class Component That Holds Left Side Elements Of Feed Page
class Left_Side extends Component {
    render() {
        return (
            <div className="left-side-feed width-25 p2 mt-5">
                <div className="top-card ov-hidden border-1-light-black shadow bgc-white mb-1 roundeddot5">
                    <div className="top-side border-bottom-1-light-black">
                        <div className={'banner-picture mb-1 width-100 p2'} style={{backgroundColor: color}}></div>
                        <div className={'dis-flex jc-center'}>
                            <Profile_Picture first_name={login_name.slice(0,1).toUpperCase()} className={'p1 circle w-4rem h-4rem dis-flex jc-center ai-center'}/>
                        </div>
                        <h3 className={'w-100 dis-flex jc-center mt-1'} style={{color: color}}>Hello {login_name}</h3>
                        <a className={'width-100 dis-flex mb-1 jc-center'} href="#">Add A Photo</a>
                    </div>
                    <div className="middle-side dis-flex flex-d-c">
                        <button className={'connections p1 bg-none-btn-hover bg-none border-none border-bottom-1-light-black'}>
                            <div className="dis-inline-flex jc-sb width-100 ai-center">
                                <h5 className={'c-light-black'}>Connections</h5>
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <h4 className={'width-100 dis-flex'}>Grow You Network</h4>
                        </button>
                        <button className={'items bg-none-btn-hover bg-none border-none p1 ai-center'}>
                            My Items
                            <i className="bi bi-bookmark-fill ml-1"></i>
                        </button>
                    </div>
                </div>
                <button className={'width-100 p1 border-none bgc-white bg-none-btn-hover border-1-light-black roundeddot5 shadow show-on-mobile'}>See More</button>
                <div className="bottom-side bgc-white shadow ov-hidden roundeddot5">
                    <ul className={'list-unstyle'}>
                        <li className={'width-100'}>
                            <a className={'width-100'} href="#">
                                <button className={'width-100 bg-none border-none p1 dis-flex bg-none-btn-hover jc-start'}>Groups</button>
                            </a>
                        </li>
                        <li className={'width-100'}>
                            <a className={'width-100'} href="#">
                                <button className={'width-100 bg-none border-none p1 dis-flex bg-none-btn-hover jc-start'}>
                                    Events
                                    <i className="bi bi-plus"></i>
                                </button>
                            </a>
                        </li>
                        <li className={'width-100'}>
                            <a className={'width-100'} href="#">
                                <button className={'width-100 bg-none border-none p1 dis-flex bg-none-btn-hover jc-start'}>Followed Hashtags</button>
                            </a>
                        </li>
                        <li className={'width-100'}>
                            <a className={'width-100'} href="#">
                                <button className={'width-100 bg-none border-none p1 dis-flex bg-none-btn-hover jc-start'}>Discover More</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

// Exporting Left Side Component
export default Left_Side;