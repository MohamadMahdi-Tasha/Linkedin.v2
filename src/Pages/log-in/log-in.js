// Codes By Mahdi Tasha
// The Login Page
// Importing Part
import React, { Component } from "react";

// A Class Component That Holds login Page Elements
class Log_in extends Component {
    render() {
        return (
            <div className={'log-in-page'}>
                <div className={"left-side"}>
                    <i className={'bi bi-linkedin'}></i>
                </div>
                <div className="right-side">
                    <main className="main">
                        <form action="#">
                            <h2>Welcome</h2>
                            <input type="email"/>
                            <input type="password"/>
                            <a href="#">Forgot Password ?</a>
                            <div className="login-and-signup"></div>
                        </form>
                        <div className="footer-links">
                            <div className="top-row">
                                <a href="#">Copyright Policy</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Send Feedback</a>
                            </div>
                            <div className="bottom-row">
                                <div className="left-side">
                                    <a href="#">User Agreement</a>
                                    <a href="#">Cookie Policy</a>
                                    <a href="#">Community Guidelines</a>
                                </div>
                                <h5>
                                    Linkedin
                                    &copy;
                                    <span id={"year"}>2021</span>
                                </h5>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Log_in;