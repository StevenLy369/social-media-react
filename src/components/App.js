import React from "react";
import Header from "./Header";
import TwitterList from "./TwitterList";
import Bio from "./Bio";
import FriendList from "./FriendList.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />


      <div class="main-layout">
        <div class="bio-div">
          <Bio />
        </div>
        <div class= "twitter-list">
          <TwitterList />
        </div>
        <div>
          <FriendList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
