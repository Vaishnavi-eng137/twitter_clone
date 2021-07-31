import React,{useState} from 'react';
import "./TweetBox.css";
import {Avatar,Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMsg,setTweetMsg] = useState("");
    const [tweetImage,setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
       
        db.collection('posts').add({
            displayName: 'Vaishnavi',
            username:'vaisudgreat',
            verified:'true',
            text:tweetMsg,
            avatar:"https://t.ly/gyYk",
            image:tweetImage
        });
        setTweetMsg('');
        setTweetImage('');
    }
    return (
        <div className="tweetBox">
           <form>
               <div className="tweetBox_input">
                 <Avatar src="data:image/jpeg;base64,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" /> 
                 <input
                  onChange = {e=> setTweetMsg(e.target.value)}
                  value = {tweetMsg}
                  placeholder="What's happening?" 
                  type="text"/>
                 <input className="tweetBox_imageInput"
                 onChange={e=> setTweetImage(e.target.value)}
                 value={tweetImage}
                  placeholder="Optional: Enter image URL" 
                  type="text"/>
                   </div>
                   <Button type= "submit" 
                   onClick={sendTweet}
                   className="tweetBox_tweetButton">Tweet</Button>
                   </form> 
        </div>
    )
}

export default TweetBox
