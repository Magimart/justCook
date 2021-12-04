import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import rolex1 from "../images/rolex1.jpg";

const NewRecipe = ({ recipe }) => {
  console.log(recipe); // whole Object ...fields:{description,...}

  const {
    name,
    ingredients,
    description,
    howToPrepare,
    featuredImage,
  } = recipe.fields;

  return (
    <div className="mainDiv">
      <h2>{name}</h2>
      <div className="image">
        {/*<img src={rolex1} width='600px' height='400px'/>*/}
        
        {featuredImage && <img src={featuredImage.fields.file.url} />}
      </div>
      <div className="allRecipes">
        <div className="description">
          <b>Description:</b> <br />
          <br />
          {description}
        </div>
        <br />
        <div className="ingredients">
          <b>Ingredients:</b> <br />
          <br />
          {ingredients}
        </div>
        <br />
        <div className="howToPrepare">
          <b>How to prepare:</b> <br />
          <br />
          {howToPrepare}
        </div>
      </div>
    </div>
  );
};

export default NewRecipe;
