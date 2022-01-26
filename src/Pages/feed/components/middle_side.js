// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Profile_Picture from "../../../components/profile-picture";
import {login_name} from "../../log-in/log-in";

// A Class Component That Holds All Middle Side Component Elements
class Middle_side extends Component{
    render() {
        return (
            <div className={'width-50 h-100'}>
                <div>
                    <div>
                        <Profile_Picture first_name={login_name.slice(0,1).toUpperCase()} className={'p1 circle w-4rem h-4rem dis-flex jc-center ai-center'}/>
                        <form action="#"><input type="Start A Post"/></form>
                    </div>
                    <div>
                        <a href="#">
                            <button>
                                <i className="bi bi-card-image"></i>
                                Photo
                            </button>
                        </a>
                        <a href="#">
                            <button>
                                <i className="bi bi-youtube"></i>
                                Video
                            </button>
                        </a>
                        <a href="#">
                            <button>
                                <i className="bi bi-calendar-date"></i>
                                Event
                            </button>
                        </a>
                        <a href="#">
                            <button>
                                <i className="bi bi-newspaper"></i>
                                Write An Article
                            </button>
                        </a>
                    </div>
                </div>
                <hr/>
                <div>
                    <h3>{login_name}, Want Even More Updates?</h3>
                    <p>Add these people you may know to your network, and you'll see their updates <br/> in the feed.</p>
                </div>
            </div>
        );
    }
}

// Exporting Middle Side Component
export default Middle_side;