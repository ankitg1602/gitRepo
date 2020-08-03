import React from "react";
import "./index.css";

export default (props) => {
  return (
    <div className="left_panel_container">
      <div className="content_padding profile_picture">
        <img
          src={props.userDetails.avatar_url}
          alt="User"
          height="250"
          width="250"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="content_padding profile_name">
        {props.userDetails.name}
      </div>
      <div className="content_padding profile_username">
        {props.userDetails.login}
      </div>
      <div className="content_padding profile_position_exp">
        {props.userDetails.bio}
      </div>
      <div className="content_padding profile_follow_button">
        <button className="follow_button">Follow</button>
      </div>
      <div className="content_padding profile_rating_followers_ing">
        <div><i class="fa fa-users" aria-hidden="true"></i> {props.userDetails.followers} followers . </div>
        <div> &nbsp; {props.userDetails.following} following . </div>
        <div> &nbsp; <i class="fa fa-star-o" aria-hidden="true"></i> {props.userDetails.followers}</div>
      </div>
      <div className="content_padding font_14">
        <i class="fa fa-home" aria-hidden="true"></i> {props.userDetails.company}
      </div>
      <div className="content_padding font_14">
        <i class="fa fa-map-marker" aria-hidden="true"></i> {props.userDetails.location}
      </div>
      <div className="content_padding font_14">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;
        <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsupreetsingh247%3Ftab%3Drepositories">
          Sign in to view email
        </a>
      </div>
    </div>
  );
};
