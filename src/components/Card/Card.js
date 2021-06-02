import React from "react";
import "./Card.css";
//import food from "../../assets/food.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card({ author, recipe, likeCount, isLiked, foodImg }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{[...author][0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{recipe.title}</h5>
          <div className="card-date">{recipe.date}</div>
        </div>
      </div>
      <img className="card-image" src={foodImg} alt="Logo" />
      <div className="card-text">{recipe.description}</div>
      <div className="card-like-bar">
        {isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
