// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import { showSettingComponent, showWorkRightSide} from './header';

// A Class Component That Holds Bottom Mobile Header Component
class BottomMobileHeader extends Component {
    render() {
        return (
            <div className={'show-on-mobile bottom-mobile-header p-fixed width-100 p1 bottom-0'} style={{zIndex: '999'}}>
                <div className={'bgc-white dis-inline-flex p1 shadow ai-center width-100 jc-sb rounded1 border-1-light-black'}>
                    <a href="#"><button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover circle w-4rem h-4rem header-bottom-btn-active'}><i className="bi bi-house-fill fs-1"></i></button></a>
                    <a href="#"><button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover circle w-4rem h-4rem border-bottom-c-none'}><i className="bi bi-people-fill fs-1"></i></button></a>
                    <a href="#"><button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover circle w-4rem h-4rem border-bottom-c-none'}><i className="bi bi-bag-fill fs-1"></i></button></a>
                    <a href="#"><button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover circle w-4rem h-4rem border-bottom-c-none'}><i className="bi bi-chat-right-text-fill fs-1"></i></button></a>
                    <a href="#"><button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover circle w-4rem h-4rem border-bottom-c-none'}><i className="bi bi-bell-fill fs-1"></i></button></a>
                    <button className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover border-bottom-c-none circle w-4rem h-4rem'} onClick={showSettingComponent}><i className="bi bi-person-fill fs-1"></i></button>
                    <button onClick={showWorkRightSide} className={'dis-flex flex-d-c jc-center ai-center pdot5 bg-none border-none bg-none-btn-hover circle w-4rem h-4rem'}><i className="bi bi-grid-3x3-gap-fill fs-1"></i></button>
                </div>
            </div>
        );
    }
}

// Exporting Bottom Mobile Header Component
export default BottomMobileHeader;