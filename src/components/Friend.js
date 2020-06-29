import React from "react";
import PropTypes from "prop-types";



function Friend(props){
    return(
        <React.Fragment>
            <h3>{props.userName}</h3>
            <button class="friend-button">Button</button>
        </React.Fragment>
    )
}

Friend.propTypes = {
    userName: PropTypes.string.isRequired,
    
};


export default Friend;