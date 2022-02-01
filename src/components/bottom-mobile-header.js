// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import { showSettingComponent, showWorkRightSide} from './header';

// A Class Component That Holds Bottom Mobile Header Component
class BottomMobileHeader extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

// Exporting Bottom Mobile Header Component
export default BottomMobileHeader;