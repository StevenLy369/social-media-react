import React from "react";
import Friend from "./Friend";

const masterFriendList = [
    {
      userName: 'Lorem Ipsum1',
     
    },
    {
      userName: 'Lorem Ipsum2',
   
    },
    {
      userName: 'Lorem Ipsum3',
  
    }
  ];


function FriendList(){
    return(
        <React.Fragment>
            <div class="friend-list">
            {masterFriendList.map((friend,index) =>
           <Friend userName ={friend.userName}  />
           )}
          


            </div>
          
        </React.Fragment>
    )

}

export default FriendList;

