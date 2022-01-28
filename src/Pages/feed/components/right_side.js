// Codes By Mahdi Tasha
// Importing Part
import React , { Component } from 'react';
import RecomendedFeed from "../../../components/recomended-feed";

// Saving Data That They Are Returned From Api
let img1;
let img2;
let img3;

let firstName1;
let firstName2;
let firstName3;

let lastName1;
let lastName2;
let lastName3;

// Fetching Fake And Random Api
fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName1 = data.results[0].name.first;
        lastName1 = data.results[0].name.last;
        img1 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName2 = data.results[0].name.first;
        lastName2 = data.results[0].name.last;
        img2 = data.results[0].picture.medium;
    })

fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName3 = data.results[0].name.first;
        lastName3 = data.results[0].name.last;
        img3 = data.results[0].picture.medium;
    })

// A Class Component That Holds All Right Side Elements Of Feed Page
class Right_Side extends Component {
    render() {
        return (
            <div className={'right-side dis-flex flex-d-c width-25 ml-2'}>
                <div className={'bgc-white roundeddot5 border-1-light-black mb-1'}>
                    <div className={'dis-inline-flex width-100 jc-sb mb-1 p1 border-bottom-1-light-black'}>
                        <h3>Add To Your Feed</h3>
                        <i className="bi bi-info-circle-fill"></i>
                    </div>
                    <div className={'dis-flex flex-d-c p1'}>
                        <RecomendedFeed className={'dis-inline-flex ai-center width-100 mb-1'} image={img1} firstName={firstName1} lastName={lastName1} job={'Front End Developer'}/>
                        <RecomendedFeed className={'dis-inline-flex ai-center width-100 mb-1'} image={img2} firstName={firstName2} lastName={lastName2} job={'Back End Developer'}/>
                        <RecomendedFeed className={'dis-inline-flex ai-center width-100'} image={img3} firstName={firstName3} lastName={lastName3} job={'Full Stack Developer'}/>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporting Right Side Component
export default Right_Side;