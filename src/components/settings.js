// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import {login_name} from "../Pages/log-in/log-in";
import Profile_Picture from "./profile-picture";

// Class Components That Holds All Setting Component, Elements
class Settings extends Component {
    render() {
        return (
            <div className="setting-holder pointer-none dis-flex show-on-click jc-end width-100 p-fixed pl-1 pr-1">
                <div className={'bgc-white width-25 roundeddot5 border-1-light-black shadow ov-hidden z-index99 settings pointer-visible'}>
                    <div className={'p1 border-bottom-1-light-black'}>
                        <div className={'dis-inline-flex width-100 ai-center mb-1'}>
                            <Profile_Picture className={'profile-circle mr-1 p1 w-4rem h-4rem circle dis-flex jc-center ai-center shadow'} first_name={login_name.slice(0,1).toUpperCase()}/>
                            <div>
                                <h4>{login_name}</h4>
                                <h6 className={'c-light-gray'}>Lurem Ipsume Dollor Sit Ammet.</h6>
                            </div>
                        </div>
                        <a href="#" className={'width-100'}>
                            <button className={'width-100 pdot5 rounded1 bg-none btn-bgnone-hover border-1-white c-blue'}>View Profile</button>
                        </a>
                    </div>
                    <div className={'border-bottom-1-light-black'}>
                        <h4 className={'pl-1 pt-1 pb-0 pr-1'}>Accounts</h4>
                        <ul className={'list-unstyle'}>
                            <li className={'width-100'}><a href="#"><button className={'pdot75 width-100 dis-flex jc-start bg-none border-none bg-none-btn-hover'}>Setting & Privacy</button></a></li>
                            <li className={'width-100'}><a href="#"><button className={'pdot75 width-100 dis-flex jc-start bg-none border-none bg-none-btn-hover'}>Help</button></a></li>
                            <li className={'width-100'}><a href="#"><button className={'pdot75 width-100 dis-flex jc-start bg-none border-none bg-none-btn-hover'}>Language</button></a></li>
                        </ul>
                    </div>
                    <div className={'border-bottom-1-light-black'}>
                        <h4 className={'pl-1 pt-1 pb-0 pr-1'}>Mannage</h4>
                        <ul className={'list-unstyle'}>
                            <li className={'width-100'}><a href="#"><button className={'pdot75 width-100 dis-flex jc-start bg-none border-none bg-none-btn-hover'}>Posts & Activity</button></a></li>
                            <li className={'width-100'}><a href="#"><button className={'pdot75 width-100 dis-flex jc-start bg-none border-none bg-none-btn-hover'}>Job Posting Account</button></a></li>
                        </ul>
                    </div>
                    <div className={'width-100'}>
                        <button className={'width-100 border-none p1 bg-none bg-none-btn-hover'}>Sign Out</button>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting Setting Component
export default Settings;