// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import { Link } from 'react-router-dom';

// A Class Component That Holds sign up Page Elements
class Sign_Up extends Component {
    render() {
        return (
            <div className={"sign-up bg-image-login w-100 bg-size-cover minh-100vh"}>
                <div className="blured-bg blur-bg w-100 minh-100vh dis-flex jc-center ai-center p1">
                    <div className="signup-options bgc-light-blue p2 width-50 roundeddot5 shadow">
                        <form action="#" className={'dis-flex flex-d-c'}>
                            <div className="dis-inline-flex mb-1 width-100">
                                <div className={'mr-1 width-50'}>
                                    <label className={'c-blue'} htmlFor={'name'}>First Name</label>
                                    <input required type="text" id={'name'} name={'name'} placeholder={'john'} className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'}/>
                                </div>
                                <div className={'width-50'}>
                                    <label className={'c-blue'} htmlFor={'last-name'}>Last Name</label>
                                    <input required type="text" id={'last-name'} name={'last-name'} placeholder={'doe'} className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'}/>
                                </div>
                            </div>
                            <div className={'dis-inline-flex mb-1 width-100'}>
                                <div className="mr-1 width-50">
                                    <label className={'c-blue'} htmlFor={'signup-email'}>Email</label>
                                    <input required type="email" id={'signup-email'} name={'signup-email'}
                                           placeholder={'johndoe@gmail.com'} className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'}/>
                                </div>
                                <div className={'width-50'}>
                                    <label className={'c-blue'} htmlFor={'signup-password'}>Password</label>
                                    <input required type="password" placeholder={'Password'} id={'signup-password'} name={'signup-password'} className={'width-100 p1 border-none bg-skyblue roundeddot5 input-hover-focus c-blue placeholder-blue mb-1 outline-none'}/>
                                </div>
                            </div>
                            <button className={'bgc-blue c-white border-none btn-hover-dark-blue width-100 p1 mb-1'} type='submit'>Agree And Join</button>
                        </form>
                        <div className={'dis-inline-flex width-100 dis-flex ai-center mb-1'}>
                            <div className={'mr-1  dis-flex jc-center ai-center width-50'}>
                                <div className={'b-bottom width-100 bc-blue'}></div>
                            </div>
                            <h6 className={'c-dark-blue'}>or</h6>
                            <div className={'dis-flex jc-center ai-center width-50'}>
                                <div className={'ml-1 b-bottom width-100 bc-blue'}></div>
                            </div>
                        </div>
                        <a href="#" className={'continue-fb-btn-holder'}><button className={' width-100 btn-bgnone-hover p1 bg-none border-1-white c-blue mb-1'}>Continue With Facebook</button></a>
                        <h5 className={'width-100 c-dark-blue dis-flex jc-sb ai-center'}>
                            Already On Linkedin?
                            <Link to={'/'}>SignIn</Link>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting The Signup Page
export default Sign_Up;