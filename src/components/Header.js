import React from "react";

function Header(){
    return (
        <div class="header" >

            <div class="nav">
            <p class="nav-button">Home</p>
            <p class="nav-button">Notifications</p>
            <p class="nav-button">Messages</p>
            </div>


            <div class="search">
            <p class="searchBar">Search</p>
            <p class="tweet"> Tweet</p>
            </div>
            
        </div>
        
    );
}

export default Header;