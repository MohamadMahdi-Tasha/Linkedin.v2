// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";

// Fetching Fake Name Api To Get Fake And Random Information
fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        const firstName = data.results[1].name.first;
        const lastName = data.results[1].name.last;
        const image = data.results[0].picture.medium;
        
        const profileCard_ProfilePicture = document.getElementById('profileCard-ProfilePicture');
        const firstNameId = document.getElementById('firstName');
        const lastNameId = document.getElementById('lastName');

        profileCard_ProfilePicture.style.backgroundImage = `url(${image})`;
        firstNameId.textContent = firstName;
        lastNameId.textContent = lastName;
    })

// A Link That Returns Random Picture With Width Of 800px And Height Of 200px
const randomImageLink = 'https://picsum.photos/800/200';

// Class Component That Holds Profile Cards
class Profile_Cards extends Component {
    render() {
        return (
            <a href="#">
                <div>
                    <div className={'width-100 h-4rem p1'} style={{backgroundImage: `url(${randomImageLink})`}}></div>
                    <div className={'width-100 h-4rem p1'} id={'profileCard-ProfilePicture'}></div>
                    <h3>
                        <span id={'firstName'}></span>
                        <span id={'lastName'}></span>
                    </h3>
                    <h4>Based On Your Profile</h4>
                    <button>Connect</button>
                </div>
            </a>
        );
    }
}

// Exporting Profile Cards Component
export default Profile_Cards;