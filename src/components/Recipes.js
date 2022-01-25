import React from "react";
import { useParams } from "react-router-dom";
import NewRecipe from "./Recipe";

const Recipes = ({recipes}) => {
  console.log(recipes); //array with objects...[{},{},...]=>recipes[0].fields=UgandaObject
const {country}=useParams();

return (

    <div>
      {recipes &&
        recipes
        .filter(recipe=>{
          console.log(recipe)
          console.log(country)
          return country ? country === recipe.fields.country: recipe
        })
        .map((recipe) => {
          console.log(recipe.fields); //only content of Object..description, ingredients,....inside fields
          return (
            <div>
              <NewRecipe recipe={recipe} />
            </div>
          );
        })}
    </div>
      );
};

export default Recipes;
