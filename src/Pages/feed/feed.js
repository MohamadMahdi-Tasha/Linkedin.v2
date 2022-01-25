// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Left_side from './components/left-side';
import Header from './components/header';

// A Class Component That Holds All Elements Of Feed Page/Route
class Feed extends Component {
    render() {
        return (
            <div className={'feed-page bgc-light-blue minh-100vh dis-flex jc-center'}>
                <Header />
                {/*<Left_side />*/}
            </div>
        );
    }
}

// Exporting Feed Page
export default Feed;