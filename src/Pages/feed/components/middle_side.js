// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Profile_Picture from "../../../components/profile-picture";
import {login_name} from "../../log-in/log-in";
import Profile_Cards from "../../../components/profile-card";
import ProfilesToFollow from "../../../components/profiles-to-follow";

// Savin Values That They Are Returned From An Api
let image1;
let image2;
let image3;

let name1;
let name2;
let name3;

let firstName1;
let lastName1;
let ProfileCardsImage1;

let firstName2;
let lastName2;
let ProfileCardsImage2;

let firstName3;
let lastName3;
let ProfileCardsImage3;

let firstName4;
let lastName4;
let ProfileCardsImage4;

let firstName5;
let lastName5;
let ProfileCardsImage5;

let firstName6;
let lastName6;
let ProfileCardsImage6;

// Fetching An Api For Fake Image
fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        image1 = data.results[0].picture.medium;
        name1 = data.results[0].name.first;
        console.log(image1 + name1);
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
        image2 = data.results[0].picture.medium;
        name2 = data.results[0].name.first;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
        image3 = data.results[0].picture.medium;
        name3 = data.results[0].name.first;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName1 = data.results[0].name.first;
        lastName1 = data.results[0].name.last;
        ProfileCardsImage1 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName2 = data.results[0].name.first;
        lastName2 = data.results[0].name.last;
        ProfileCardsImage2 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName3 = data.results[0].name.first;
        lastName3 = data.results[0].name.last;
        ProfileCardsImage3 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName4 = data.results[0].name.first;
        lastName4 = data.results[0].name.last;
        ProfileCardsImage4 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName5 = data.results[0].name.first;
        lastName5 = data.results[0].name.last;
        ProfileCardsImage5 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName6 = data.results[0].name.first;
        lastName6 = data.results[0].name.last;
        ProfileCardsImage6 = data.results[0].picture.medium;
    })

// A Class Component That Holds All Middle Side Component Elements
class Middle_side extends Component{
    render() {
        return (
            <div className={'width-50 h-100 middle-side'}>
                <div className={'p1 bgc-white width-100 roundeddot5 border-1-light-black mb-1'}>
                    <div className={'dis-inline-flex width-100 ai-center mb-1'}>
                        <Profile_Picture first_name={login_name.slice(0,1).toUpperCase()} className={'p1 mr-1 circle w-4rem h-4rem dis-flex jc-center ai-center'}/>
                        <form className={'width-100'} action="#">
                            <input className={'width-100 bgc-light-blue p1 border-none rounded1 placeholder-blue input-hover-focus outline-none'} type={'text'} placeholder="Start A Post"/>
                        </form>
                    </div>
                    <div className={'width-100 dis-inline-flex jc-sb'}>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-sky-blue mr-dot5 bi-card-image"></i>
                                <span className={'fs-1'}>Photo</span>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-green mr-dot5 bi-youtube"></i>
                                <span className={'fs-1'}>Video</span>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-orange mr-dot5 bi-calendar-date"></i>
                                <span className={'fs-1'}>Event</span>
                            </button>
                        </a>
                        <a href="#">
                            <button className={'bg-none pdot5 dis-flex ai-center jc-center bg-none-btn-hover-light border-none roundeddot5'}>
                                <i className="bi fs-1dot5 c-light-red mr-dot5 bi-newspaper"></i>
                                <span className={'fs-1'}>Write An Article</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className={'width-100 jc-center ai-center mb-1'}><div className={'border-bottom-1-light-black'}></div></div>
                <div className={'width-100 bgc-white roundeddot5 border-1-light-black ov-hidden'}>
                    <div className={'p1'}>
                        <h3 className={'width-100 dis-flex jc-center mt-2'}>{login_name}, Want Even More Updates?</h3>
                        <div className={'dis-flex jc-center mb-1'}>
                            <p className={'c-light-gray'}>Add these people you may know to your network, and you'll see their updates <br/><span className={'dis-flex jc-center'}>in the feed.</span></p>
                        </div>
                        <div className={'dis-inline-flex jc-sb mb-1 width-100'}>
                            <Profile_Cards image={ProfileCardsImage1} firstName={firstName1} lastName={lastName1} className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards image={ProfileCardsImage2} firstName={firstName2} lastName={lastName2} className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards image={ProfileCardsImage3} firstName={firstName3} lastName={lastName3} className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35'}/>
                        </div>
                        <div className={'dis-inline-flex jc-sb width-100 mb-1'}>
                            <Profile_Cards image={ProfileCardsImage4} firstName={firstName4} lastName={lastName4} className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards image={ProfileCardsImage5} firstName={firstName5} lastName={lastName5} className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35 mr-dot5'}/>
                            <Profile_Cards image={ProfileCardsImage6} firstName={firstName6} lastName={lastName6} className={'profile_cards bgc-white roundeddot5 border-1-light-black ov-hidden width-35'}/>
                        </div>
                    </div>
                    <div className={'width-100 bgc-white border-top-1-light-black p1 bg-none-btn-hover'}>
                        <a className={'width-100 dis-flex jc-center ai-center'} href="#">Discover More</a>
                    </div>
                </div>
                <div className={'mt-1 bgc-white roundeddot5 border-1-light-black ov-hidden'}>
                    <div className={'width-100 dis-flex jc-sb pdot5 ai-center border-bottom-1-light-black'}>
                        <h6>Add to your feed</h6>
                        <button className={'w-2rem h-2rem circle bg-none border-none bg-none-btn-hover'}><i className="bi bi-three-dots"></i></button>
                    </div>
                    <ul className={'list-unstyle'}>
                        <li><ProfilesToFollow image={image1} name={name1} followersNumber={'55,123'}/></li>
                        <li><ProfilesToFollow image={image2} name={name2} followersNumber={'155,493'}/></li>
                        <li><ProfilesToFollow image={image3} name={name3} followersNumber={'2,234'} borderBottom={false}/></li>
                    </ul>
                    <div className={'width-100 bgc-white border-top-1-light-black p1 bg-none-btn-hover'}>
                        <a className={'width-100 dis-flex jc-center ai-center'} href="#">See More</a>
                    </div>
                </div>
                <div className={'dis-flex jc-center ai-center mt-1'}>
                    <button className={'pdot5 border-1-white rounded1 c-blue bg-none btn-bgnone-hover'}>See New Posts</button>
                </div>
            </div>
        );
    }
}

// Exporting Middle Side Component
export default Middle_side;