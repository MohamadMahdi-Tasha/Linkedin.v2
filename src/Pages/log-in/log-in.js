// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal, { showModal } from './../../components/modal';

const date = new Date();
const thisYear = date.getFullYear();

// A Class Component That Holds login Page Elements
class Log_in extends Component {
    render() {
        return (
            <div className={'log-in-page dis-inline-flex width-100 bgc-light-blue minh-100vh'}>
                <Modal massage={'Please Fill The Inputs!'}/>
                <div className={"left-side width-35 bg-image-login bg-size-cover p1 fs-3 c-blue"}>
                    <i className={'bi bi-linkedin'}></i>
                </div>
                <div className="right-side width-80 p2 dis-flex jc-center ai-center">
                    <main className="width-80">
                        <form action="#">
                            <h1 className={'c-blue mb-1'}>Welcome</h1>
                            <input required className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'} placeholder={"Email"} type="email" id={'login-email'}/>
                            <input required className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'} placeholder={"Password"} type="password" id={'login-password'}/>
                            <a href="#">Forgot Password ?</a>
                            <div id={'link-holders'} className="login-and-signup width-100 dis-inline-flex mt-2 mb-3">
                                <Link id={'feed-link'} to={'/feed'} className={'width-50 mr-1'} onClick={() => {
                                    const login_email = document.getElementById('login-email');
                                    const login_password = document.getElementById('login-password');

                                    if (login_email.value, login_password.value === '') {
                                        showModal();
                                        this.setAttribute('to', '/');
                                    }
                                }}>
                                    <button className={'width-100 bgc-blue p1 c-white border-none btn-hover-dark-blue'} type={'submit'}>Login</button>
                                </Link>
                                <Link to={'/signup'} className={"width-50"}>
                                    <button className={'width-100 btn-bgnone-hover p1 bg-none border-1-white c-blue'}>Sign Up</button>
                                </Link>
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
                                    <span>{thisYear}</span>
                                </h5>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

// Exporting The Log in Page
export default Log_in;