// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Settings from "./settings";

let tap = 0;
function showSettingComponent() {
    const settingComponent = document.getElementById('setting-component');

    tap ++;
    if (tap % 2 !== 0) {settingComponent.classList.remove('show-on-click');}
    else {settingComponent.classList.add('show-on-click');}
}

// Class Components That Holds All Header Elements
class Header extends Component {
    render() {
        return (
            <>
                <header className={'p-fixed bgc-white width-100 dis-inline-flex fixed-top shadow'} style={{zIndex: '999'}}>
                    <div className="left-side width-50 dis-inline-flex ai-center mr-1">
                        <i className="bi bi-linkedin fs-3 mr-1 c-blue ml-1"></i>
                        <div className={'search-div bg-skyblue width-100 pdot5 roundeddot5 dis-inline-flex ai-center input-hover-focus'}>
                            <form action="#" className={'width-100 dis-inline-flex ai-center'}>
                                <button className={'search-btn pdot5 bg-none border-none c-blue '} type={'submit'}><i className="bi bi-search"></i></button>
                                <input className={'search-input width-100 border-none bg-none  c-blue placeholder-blue outline-none'} type="text" placeholder={'Search'}/>
                            </form>
                        </div>
                    </div>
                    <div className="right-side width-50 dis-inline-flex jc-sb">
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 header-btn-active'}>
                                <i className="bi bi-house-fill"></i>
                                Home
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-people-fill"></i>
                                My Network
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-bag-fill"></i>
                                Jobs
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-chat-right-text-fill"></i>
                                Massaging
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-bell-fill"></i>
                                Notifications
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-person-fill"></i>
                                Me
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100'} onClick={showSettingComponent}>
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                                Works
                            </button>
                        </a>
                    </div>
                </header>
                <Settings id={'setting-component'} className="setting-holder transition pointer-none dis-flex mt-5 jc-end width-100 p-fixed pl-1 show-on-click pr-1"/>
            </>
        );
    }
}

// Exporting Header Component
export default Header;