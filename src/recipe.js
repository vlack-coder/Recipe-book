import React from "react";
import "./App.css";
import style from './recipe.module.css'

const Recipe = ({title, ingredients, image}) => {
  return (
    <div  className={style.recipe}>
      <h1>{title}</h1>
      <ol >{ingredients.map((ingredient, index) =>
          <li key={index}>{ingredient.text}</li>
      )}</ol>
      <img src={image} alt=''></img>
    </div>
  );
};

export default Recipe;
