import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material";
import db from './firebase';
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Sahil',
      username: 'opop',
      text: tweetMessage,
      image: tweetImage,
      avatar: "",

    });
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
            <Avatar src="https://images.app.goo.gl/zykpTLj9AZ88oEdT9" />
            <input onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
             placeholder="What's happening?" type="text"/>
            </div>
            <div className="tweetBox__btn">
            <input 
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage} 
            className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
            <Button onClick={sendTweet}
            type="submit"
             className="tweetBox__tweetButton">Post</Button>
            </div>
        </form>
    </div>
  )
}

export default TweetBox