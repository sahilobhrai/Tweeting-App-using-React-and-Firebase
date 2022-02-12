import { Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ReplyIcon from '@mui/icons-material/Reply';
import React,{forwardRef} from 'react';
import "./Post.css";
const Post=forwardRef(({
    displayName,
    username,
    text,
    image,
    avatar
},  ref) =>{
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>  {displayName}
                            <span className="post__headerSpecial">@{username} </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <FavoriteIcon fontSize="small" />
                    <AddCommentIcon fontSize="small" />
                    <ReplyIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
});

export default Post  