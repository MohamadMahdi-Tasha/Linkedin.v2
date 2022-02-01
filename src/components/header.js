// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Settings from "./settings";
import WorkRightSide from "./work-right-side";
import BottomMobileHeader from './bottom-mobile-header';

// A Function That Shows Setting Component When Clicked
let tap = 0;

export function showSettingComponent() {
    const settingComponent = document.getElementById('setting-component');
    const work_right_side = document.getElementById('work-right-side');
    const bg_dark_header = document.getElementById('bg-dark-header');

    tap ++;
    if (tap % 2 !== 0) {
        settingComponent.classList.remove('show-on-click');
        bg_dark_header.classList.remove('show-on-click');

        if (!work_right_side.classList.contains('show-on-click')) {
            work_right_side.classList.add('show-on-click');
            tap2 --;
        }
    }
    else {
        settingComponent.classList.add('show-on-click');
        bg_dark_header.classList.add('show-on-click');
    }
}

// A Function To Show WorkRightSide Component
let tap2 = 0;
export function showWorkRightSide() {
    const work_right_side = document.getElementById('work-right-side');
    const settingComponent = document.getElementById('setting-component');
    const bg_dark_header = document.getElementById('bg-dark-header');

    tap2 ++;
    if (tap2 % 2 !== 0) {
        work_right_side.classList.remove('show-on-click');
        bg_dark_header.classList.remove('show-on-click');

        if (!settingComponent.classList.contains('show-on-click')) {
            settingComponent.classList.add('show-on-click');
            tap --;
        }
    }
    else {
        work_right_side.classList.add('show-on-click');
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
                                <h4>Home</h4>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-people-fill"></i>
                                <h4>My Network</h4>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-bag-fill"></i>
                                <h4>Jobs</h4>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-chat-right-text-fill"></i>
                                <h4>Massaging</h4>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'}>
                                <i className="bi bi-bell-fill"></i>
                                <h4>Notifications</h4>
                            </button>
                        </a>
                        <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100 border-bottom-c-none'} onClick={showSettingComponent}>
                            <i className="bi bi-person-fill"></i>
                            <h4>Me</h4>
                        </button>
                        <button onClick={showWorkRightSide} className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover h-100'}>
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            <h4>Works</h4>
                        </button>
                    </div>
                </header>
                <div id={'bg-dark-header'} className={'bg-dark-rgba show-on-click p-fixed width-100 h-100'} style={{zIndex: '997'}}></div>
                <Settings id={'setting-component'} className="setting-holder pointer-none dis-flex mt-5 jc-end width-100 p-fixed pl-1 show-on-click pr-1"/>
                <WorkRightSide className={'work-right-side-holder dis-flex minh-100vh p-fixed width-100 dis-flex jc-end ai-center show-on-click mt-2 pt-1 pb-1 '} menuClassName={'work-right-side h-85vh scroller-none width-35 ov-scroll bgc-white p1 border-left-rounded shadow'} id={'work-right-side'} style={{zIndex: '998'}}/>
                <BottomMobileHeader />
            </>
        );
    }
}

// Exporting Header Component
export default Header;