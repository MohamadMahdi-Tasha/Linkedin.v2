// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Sign_Up extends Component {
    render() {
        return (
            <div clasName={"sign-up"}>
                <div className="blur-bg">
                    <div className="signup-options">
                        <form action="#">
                            <label htmlFor={'name'}>First Name</label>
                            <input required type="text" id={'name'} name={'name'} placeholder={'john'}/>
                            <label htmlFor={'last-name'}>Last Name</label>
                            <input required type="text" id={'last-name'} name={'last-name'} placeholder={'doe'}/>
                            <label htmlFor={'signup-email'}>Email</label>
                            <input required type="email" id={'signup-email'} name={'signup-email'}
                                   placeholder={'johndoe@gmail.com'}/>
                            <label htmlFor={'signup-password'}>Password (8 And More Charecters)</label>
                            <input required type="password" id={'signup-password'} name={'signup-password'}/>
                            <p>You Agree To The Linkedin
                                <a href={"#"}>User Agreement</a>,
                                <a href={"#"}>Privecy Policy</a>,
                                And
                                <a href={"#"}>Cookie Policy</a>.
                            </p>
                            <button type='submit'>Agree And Join</button>
                        </form>
                        <div>
                            <hr/>
                            <h6>or</h6>
                            <hr/>
                        </div>
                        <a href="#"><button>Continue With Facebook</button></a>
                        <h3>
                            Already On Linkedin?
                            <Link to={'/'}>SignIn</Link>
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sign_Up;