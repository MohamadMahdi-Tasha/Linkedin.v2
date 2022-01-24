// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Left_side from './components/left-side';

class Feed extends Component {
    render() {
        return (
            <div className={'feed-page'}>
                <Left_side />
            </div>
        );
    }
}

export default Feed;