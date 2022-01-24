// Codes By Mahdi Tasha
// Importing Part
import React, {Component} from "react";
import Profile_Picture from './../../../components/profile-picture';

// A Class Component That Holds Left Side Elements Of Feed Page
class Left_Side extends Component {
    render() {
        return (
            <div className="left-side width-20 p1">
                <div className="top-card bgc-white mb-1 roundeddot5">
                    <div className="top-side p1 border-bottom-1-light-black">
                        <Profile_Picture first_name={'M'}/>
                        <div className={'profile-pic'}></div>
                        <h3>Hello Mahdi</h3>
                        <a href="#">Add A Photo</a>
                    </div>
                    <div className="midlle-side">
                        <div className={'connections'}>
                            <h5>Connections</h5>
                            <i className="bi bi-people-fill"></i>
                        </div>
                        <h4>Grow You Network</h4>
                        <button className={'items'}>
                            <h5>
                                My Items
                                <i className="bi bi-bookmark-fill"></i>
                            </h5>
                        </button>
                    </div>
                </div>
                <div className="bottom-card">
                    <ul>
                        <li>
                            <a href="#">
                                <button>Groups</button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <button>
                                    Events
                                    <i className="bi bi-plus"></i>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <button>Followed Hashtags</button>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <button>Discover More</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Left_Side;