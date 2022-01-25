// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import {login_name} from "../Pages/log-in/log-in";
import Profile_Picture from "./profile-picture";

// Class Components That Holds All Setting Component, Elements
class Settings extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <Profile_Picture first_name={login_name.slice(0,1).toUpperCase()}/>
                        <h3>{login_name}</h3>
                        <h5>Lurem Ipsume Dollor Sit Ammet.</h5>
                    </div>
                    <a href="#">
                        <button>View Profile</button>
                    </a>
                </div>
                <div>
                    <h3>Accounts</h3>
                    <ul>
                        <li><a href="#"><button>Setting & Privacy</button></a></li>
                        <li><a href="#"><button>Help</button></a></li>
                        <li><a href="#"><button>Language</button></a></li>
                    </ul>
                </div>
                <div>
                    <h3>Mannage</h3>
                    <ul>
                        <li><a href="#"><button>Posts & Activity</button></a></li>
                        <li><a href="#"><button>Job Posting Account</button></a></li>
                    </ul>
                </div>
                <div><button>Sign Out</button></div>
            </div>
        );
    }
}

// Exporting Setting Component
export default Settings;