import React from 'react';
import "./Widgets.css";
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {
    return (
        <div className="widgets">
         <div className="widgets_input">
         <SearchIcon className="widgets_searchIcon"/>
         <input placeholder="Search Twitter" type="text"/>
         </div>
         
         <div className="widgets_widgetContainer">
         <h2>What's happening</h2>
         <TwitterTweetEmbed tweetId = {"1421090214278156290"}/>
         <TwitterTweetEmbed tweetId = {"1421039125046591489"}/>

         <TwitterTimelineEmbed 
         sourceType="profile"
         screenName="Siba_TNIE"
         options={{height:400}}
         />
        <TwitterShareButton 
         url = {"https://facebook.com/vaishnavi.chourasia.9"}
         options={{text:"#reactjs is awesome", via:"vaishnavi"}}
         />
         </div>
        </div>
    )
}

export default Widgets
