// Codes By Mahdi Tasha
// The Login Page
// Importing Part
import React, { Component } from "react";
import './../../styles/styles.scss';

// A Class Component That Holds login Page Elements
class Log_in extends Component {
    render() {
        return (
            <div className={'log-in-page dis-inline-flex width-100 bgc-light-blue minh-100vh'}>
                <div className={"left-side width-35 bg-image-login bg-size-cover p1 fs-3 c-blue"}>
                    <i className={'bi bi-linkedin'}></i>
                </div>
                <div className="right-side width-80 p2 dis-flex jc-center ai-center">
                    <main className="width-80">
                        <form action="#">
                            <h1 className={'c-blue mb-1'}>Welcome</h1>
                            <input className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'} placeholder={"Email"} type="email"/>
                            <input className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'} placeholder={"Password"} type="password"/>
                            <a href="#">Forgot Password ?</a>
                            <div className="login-and-signup width-100 dis-inline-flex mt-2 mb-3">
                                <button className={'mr-1 bgc-blue c-white border-none btn-hover-dark-blue width-50'} type={'submit'}>Login</button>
                                <button className={'width-50 btn-bgnone-hover p1 bg-none border-1-white c-blue'}>Sign Up</button>
                            </div>
                        </form>
                        <div className="footer-links">
                            <div className="top-row">
                                <a className={'mr-2'} href="#">Copyright Policy</a>
                                <a className={'mr-2'} href="#">Privacy Policy</a>
                                <a className={'mr-2'} href="#">Send Feedback</a>
                            </div>
                            <div className="dis-inline-flex jc-sb">
                                <div className="left-side">
                                    <a className={'mr-2'} href="#">User Agreement</a>
                                    <a className={'mr-2'} href="#">Cookie Policy</a>
                                    <a className={'mr-2'} href="#">Community Guidelines</a>
                                </div>
                                <h5 className={'c-blue'}>
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