import React from "react";

function Bio() {
  return (
    <div class="user-info">
      <div class="profile">
          <img class="profile-background" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/434780/a064fe099954a915a0a3db3bd8046fc0affd6d9c.jpg"alt="profile pic"></img>
        <h3 class="profile-name">Kellie A. Corrigan</h3>
        <div class="user-nav">
            <p>Tweets</p>
            <p>Following</p>
            <p>Followers</p>
        </div>
      </div>

      <div class="user-bio">
        <h3>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          
        </h3>
      </div>
    </div>
  );
}

export default Bio;
