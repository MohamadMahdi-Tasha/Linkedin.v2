// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import {login_email} from "../../log-in/log-in";
import Profile_Picture from "../../../components/profile-picture";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="left-side">
                    <i className="bi bi-linkedin"></i>
                    <div className={'search-div'}>
                        <form action="#">
                            <button type={'submit'}><i className="bi bi-search"></i></button>
                            <input type="text" placeholder={'Search'}/>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <a href="#">
                        <button>
                            <i className="bi bi-house-fill"></i>
                            Home
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <i className="bi bi-people-fill"></i>
                            My Network
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <i className="bi bi-bag-fill"></i>
                            Jobs
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <i className="bi bi-chat-right-text-fill"></i>
                            Massaging
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <i className="bi bi-bell-fill"></i>
                            Notifications
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <Profile_Picture first_name={login_email.slice(0,1).toUpperCase()}/>
                            <div>
                                Me
                                <i className="bi bi-chevron-compact-down"></i>
                            </div>
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            <div>
                                Works
                                <i className="bi bi-chevron-compact-down"></i>
                            </div>
                        </button>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;