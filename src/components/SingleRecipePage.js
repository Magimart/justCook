import {  Link, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
// SinglePostRecipe.js



const SingleRecipePage = ({name, featuredImage, description, howToPrepare,ingredients, loading}) => {
      
    return (

        <>

        <div className="card">
                    <img className="card-img-top" src={featuredImage.fields.file.url} alt="Card image cap"/>
                               <div className="card-body">
                                <div class="dropdown-divider"></div>
                                <h5 className="card-title">Name: {name}</h5>
                                    <div class="dropdown-divider"></div>                                  
                                    <h6 className="card-text">Description: </h6>
                                    {description} 
                                    <div class="dropdown-divider"></div>
                                  <h6 className="card-text">How to prepare:</h6>
                                   {howToPrepare}
                                   <h6 className="card-text">Ingredients:</h6>
                                   {ingredients}
                                   <a href="/recipes/recipe.id">...read more</a>
                                 </div>
                                 {/* <div className="card-footer">
                                 <h6>created: </h6>{recipe.sys.createdAt}
                                 <h6>Updated: </h6>{recipe.sys.updatedAt} */}

                                     <small className="text-muted"><h6>Reviews</h6></small>
                                 </div>
      </>
    );
  };
  export default SingleRecipePage;


