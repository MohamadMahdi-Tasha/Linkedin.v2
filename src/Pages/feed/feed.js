// Codes By Mahdi Tasha
// Importing Part
import React, { Component } from "react";
import Left_side from './components/left-side';
import Header from '../../components/header';
import Middle_side from './components/middle_side';

// A Class Component That Holds All Elements Of Feed Page/Route
class Feed extends Component {
    render() {
        return (
            <div className={'feed-page bgc-light-blue minh-100vh'}>
                <Header />
                <div className={'dis-inline-flex jc-center width-100 ai-center'}>
                    <Left_side />
                    <Middle_side />
                </div>
            </div>
        );
    }
}

// Exporting Feed Page
export default Feed;