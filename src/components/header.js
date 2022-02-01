// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Settings from "./settings";
import WorkRightSide from "./work-right-side";

// A Function That Shows Setting Component When Clicked
let tap = 0;

function showSettingComponent() {
    const settingComponent = document.getElementById('setting-component');
    const bg_dark_header = document.getElementById('bg-dark-header');

    tap ++;
    if (tap % 2 !== 0) {
        settingComponent.classList.remove('show-on-click');
        bg_dark_header.classList.remove('show-on-click');
    }
    else {
        settingComponent.classList.add('show-on-click');
        bg_dark_header.classList.add('show-on-click');
    }
}

// A Function To Show WorkRightSide Component
let tap2 = 0;
function showWorkRightSide() {
    const work_right_side = document.getElementById('work-right-side');
    const bg_dark_header = document.getElementById('bg-dark-header');

    tap2 ++;
    if (tap2 % 2 !== 0) {
        work_right_side.classList.remove('left-100');
        bg_dark_header.classList.remove('show-on-click');
    }
    else {
        work_right_side.classList.add('left-100');
        bg_dark_header.classList.add('show-on-click');
    }
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
                        <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'} onClick={showSettingComponent}>
                            <i className="bi bi-person-fill"></i>
                            Me
                        </button>
                        <button onClick={showWorkRightSide} className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100'}>
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            Works
                        </button>
                    </div>
                </header>
                <div id={'bg-dark-header'} className={'bg-dark-rgba show-on-click p-fixed width-100 h-100'} style={{zIndex: '997'}}></div>
                <Settings id={'setting-component'} className="setting-holder pointer-none dis-flex mt-5 jc-end width-100 p-fixed pl-1 show-on-click pr-1"/>
                <WorkRightSide menuClassName={'work-right-side bgc-white width-35 ov-scroll scroller-none p1 mt-5 h-100 border-left-rounded'} className={'dis-flex width-100 left-100 p-fixed jc-end z-index998'} id={'work-right-side'} style={{zIndex: '998'}}/>
            </>
        );
    }
}

// Exporting Header Component
export default Header;