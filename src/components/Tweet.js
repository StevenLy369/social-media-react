import React from "react";
import PropTypes from "prop-types";


function Tweet(props){
    return (
        <React.Fragment>
            <div class="tweetList">
            <h3>{props.userName}</h3>
            <h3> {props.tweets}</h3>
            </div>
            
        </React.Fragment>
    )
}

Tweet.propTypes = {
    userName: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
};


export default Tweet;