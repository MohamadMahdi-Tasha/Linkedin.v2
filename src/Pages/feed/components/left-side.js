// Codes By Mahdi Tasha
// Importing Part
import React, {Component} from "react";

class Left_Side extends Component {
    render() {
        return (
            <div className="left-side">
                <div className="top-card">
                    <div className="top-side">
                        <div className="top-img"></div>
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