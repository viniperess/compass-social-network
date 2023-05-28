import React from "react";
import Time from "../image/time.svg";
import Like from "../image/like.svg";
import Share from "../image/share.svg";
import Comment from "../image/msg.svg";
import homeBar from "../image/home.svg";
import Webcam from "../image/webcam.svg";
import Landscape from "../image/landscape.svg";
import Clips from "../image/clips.svg";
import Location from "../image/location.svg";
import Face from "../image/face.svg";

import { postProps, userProps } from "../interfaces/Models";

interface Props {
  user: userProps | undefined;
  post: postProps;
  users: userProps[];
  deletePost: (e: any) => void;
}

const PostComponent: React.FC<Props> = (props) => {
  return (
    <div className="wrap-post" key={props.post._id}>
      <form className="deletePost" onSubmit={props.deletePost}>
        <button type="submit">Apagar</button>
      </form>

      <div className="user-of-the-post-container">
        <div className="photo-container">
          <img
            src={
              props.users.find(
                (userOfPost) => userOfPost.user === props.post.user
              )?.profile_photo
            }
            alt=""
            className="user-img"
          />
        </div>
        <div className="wrap-info">
          <p className="user-name">{props.post.user}</p>
          <div className="time-container">
            <img src={Time} alt="" />
            <p className="time-text">{props.post.post_date.toString()}</p>
          </div>
        </div>
      </div>

      <p className="post-text">{props.post.description}</p>

      <div className="post-image">
        <img src={props.post.url_image} alt="" className="post-image" />
      </div>

      <div className="post-actions">
        <div className="icon-card">
          <img src={Like} alt="" />
          <p className="likesText">Curtidas</p>
          <p className="likesNumber">{props.post.likes}</p>
        </div>
        <div className="comment">
          <div className="icon-card">
            <img src={Comment} alt="" />
            <p className="commentText">Comentários</p>
            <p className="commentNumber">{props.post.comments.length}</p>
          </div>
        </div>
        <div className="share">
          <div className="icon-card">
            <img src={Share} alt="" />
            <p className="shareText">Compartilhar</p>
          </div>
        </div>
      </div>

      <div className="wrap-new-comment">
        <div className="post-text-container">
          <div className="photo-container">
            <img src={props.user?.profile_photo} alt="" />
          </div>
          <input
            type="text"
            className="sendPost"
            name="posted"
            placeholder="No que você está pensando?"
          />

          <div className="icons-container">
            <img src={Webcam} alt="" />
            <img src={Landscape} alt="" />
            <img src={Clips} alt="" />
            <img src={Location} alt="" />
            <img src={Face} alt="" />
          </div>
        </div>
      </div>

      <div className="allComments">
        <p className="title">Todos os comentários</p>
        {props.post.comments &&
          props.post.comments.map((comment) => (
            <div className="wrap-comment" key={comment._id}>
              <p className="username">{comment.user}:</p>
              <p className="comment-text">{comment.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostComponent;
