import React, { useState, useEffect } from "react";
import TweetBox from './TweetBox';
import "./Feed.css";
import SearchIcon from '@mui/icons-material/Search';
import Post from './Post';
import FlipMove from 'react-flip-move';
import db from "./firebase";
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div className="feed">
            {/* header box */}
            <div className="feed__header">
                <h2>Home</h2>
                <div className="widgets__input">
                    <SearchIcon className="widgets__searchIcon" />
                    <input placeholder="search" type="text" />
                </div>
            </div>


            {/* tweets */}
            <TweetBox />

            <FlipMove>
            {/* posts*/}
            {posts.map(post => (

                <Post
                    ley={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>
        </div>
    )
}
export default Feed