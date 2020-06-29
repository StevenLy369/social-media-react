import React from "react";
import Tweet from "./Tweet";

const masterTweetList = [
    {
      userName: 'Lorem Ipsum',
      tweets: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'
    },
    {
      userName: 'Lorem Ipsum',
      tweets: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'
    },
    {
      userName: 'Lorem Ipsum',
      tweets: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'
    }
  ];

  function TweetList(){
    return (
        <React.Fragment>
          {/* <div class="tweet-input">

          <p>Whats happenin</p> */}

          {/* </div> */}
          
          {masterTweetList.map((tweet, index) =>
            <Tweet userName={tweet.userName}
              tweets={tweet.tweets}
              key={index}/>
          )}
        </React.Fragment>
    )
}

export default TweetList;