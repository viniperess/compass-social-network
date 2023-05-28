import React, { useState, useEffect } from "react";
import Logo from "../image/compass_logo.svg";
import "./Home.css";
import homeBar from "../image/home.svg";
import Webcam from "../image/webcam.svg";
import Landscape from "../image/landscape.svg";
import Clips from "../image/clips.svg";
import Location from "../image/location.svg";
import Face from "../image/face.svg";
import Time from "../image/time.svg";
import Like from "../image/like.svg";
import Share from "../image/share.svg";
import Comment from "../image/msg.svg";
import { useNavigate } from "react-router-dom";

// Types
import { userProps, postProps } from "../interfaces/Models";
import { MakeRequest } from "../Utils/MakeRequest";
import { PATH } from "../Utils/Constants";
import { JWTtoken, decodeToken } from "../Utils/JWT";
import PostComponent from "./PostComponent";

const Home: React.FC = () => {
  const [user, setUser] = useState<userProps>();
  const [users, setUsers] = useState<userProps[]>([]);
  const [posts, setPosts] = useState<postProps[]>([]);
  const [postDescription, setPostDescription] = useState<postProps>();
  const [postID, setPostID] = useState<string>();

  const nav = useNavigate();

  useEffect(() => {
    const setSocialData = async () => {
      let token = localStorage.getItem(JWTtoken);

      const decodedToken: any | null = decodeToken(token);

      if (typeof token === "string") {
        const User = await MakeRequest(
          PATH.USERS + `/${decodedToken.sub}`,
          "GET"
        );
        const Posts = await MakeRequest(PATH.POSTS, "GET");
        const Users = await MakeRequest(PATH.USERS, "GET");

        console.log(Users);

        if (!User || !Posts || !Users) {
          nav("/Login");
        }

        setUser(User);
        setUsers(Users);
        setPosts(Posts);
      } else {
        nav("/Login");
      }
    };
    setSocialData();
  }, []);

  const handleInputChanges = (e: any) => {
    setPostDescription(e.target.value);
  };

  /* Create Post */
  const callPosts = async () => {
    const postsUpdated = await MakeRequest(PATH.POSTS, "GET");
    if (postsUpdated) setPosts(postsUpdated);
  };

  const createPost = async (e: any) => {
    e.preventDefault();
    const createPostBody = {
      user: user?.user,
      description: postDescription,
      post_date: new Date().getFullYear().toString(),
      likes: 0,
      url_image: "",
    };

    const postCreated = await MakeRequest(PATH.POSTS, "POST", createPostBody);

    setPosts((prev) => [postCreated, ...prev]);
  };

  const deletePost = async (e: any) => {};

  return (
    <div className="container-home">
      <div className="left-column">
        <img src={Logo} alt="Compass Uol Logo" />
      </div>

      <nav className="nav">
        <div className="home-section">
          <img src={homeBar} alt="" />
          <p>Home</p>
        </div>
        <div className="homeUser">
          <p>{user && user.name}</p>
          <div className="photo-container">
            <img
              src={user && user.profile_photo}
              alt={user && user.name}
              className="user-logged-in"
            />
          </div>
        </div>
      </nav>

      <div className="content-column">
        <div className="create-post-container">
          <form className="posts" onSubmit={createPost}>
            <div className="post-text-container">
              <div className="photo-container">
                <img src={user && user.profile_photo} alt={user && user.name} />
              </div>

              <input
                type="text"
                className="sendPost"
                placeholder="No que você está pensando?"
                onChange={handleInputChanges}
              />
            </div>

            <div className="wrap-btn">
              <div className="icons-container">
                <img src={Webcam} alt="" />
                <img src={Landscape} alt="" />
                <img src={Clips} alt="" />
                <img src={Location} alt="" />
                <img src={Face} alt="" />
              </div>
              <button className="btnPost" type="submit">
                Postar
              </button>
            </div>
          </form>
        </div>

        {posts &&
          posts.map((post) => (
            <PostComponent
              post={post}
              user={user}
              users={users}
              deletePost={deletePost}
            />
          ))}
      </div>

      <div className="right-column">
        <div className="friends card">
          <p className="myFriends">Meus Amigos</p>

          <div className="friends-container">
            {users &&
              users.map((friend) => (
                <div className="wrap-friend" key={friend._id}>
                  <div className="img-container">
                    <img src={friend.profile_photo} alt={friend.name} />
                  </div>
                  <p>{friend.name}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Home;
