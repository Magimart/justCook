import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import SinglePostRecipe from './SinglePostRecipe';

const MyPostRecipes=({recipes})=>{

   //   const {name, description, howToPrepare, ingredients, featuredImage  } = recipes.fields
    // First time your app loads, recipes is null
    // recipes && recipes.map(recipe =>{}) It's false


     //----if name === country render all country recipes
     // url---recipes/name/country

       return(
    
       <>
           <div className="card-group"> 
             { recipes && recipes.map(recipe  =>  {
               //  console.log(recipe);
                   return (
                     < >
                        <SinglePostRecipe  propRecipe={recipe}/>
                                  
                          <div className="card">
                              <img className="card-img-top" src={recipe.fields.featuredImage.fields.file.url} alt="Card image cap"/>
                               <div className="card-body">
                                <div class="dropdown-divider"></div>
                                <h5 className="card-title">Name: {recipe.fields.name}</h5>
                                    <div class="dropdown-divider"></div>                                  
                                    <h6 className="card-text">Description: </h6>
                                    {recipe.fields.description.substring(0, 60) + "..."} 
                                    <div class="dropdown-divider"></div>
                                  <h6 className="card-text">How to prepare:</h6>
                                  {/* {recipe.fields.howToPrepare} */}
                                   {recipe.fields.howToPrepare.substring(0, 100)} 
                                   <a href="/recipes/recipe.id">...read more</a>
                                 </div>
                                 <div className="card-footer">
                                    <small className="text-muted">Reviews</small>
                                 </div>
                          </div>
                      
                          {/* <Switch>
                                <Route path="/recipies/:?"
                                     render={(props) => <MyPostRecipes recipes={recipes} {...props} />}
                                />
                           </Switch> */}

                       </>
                      )
                })
              }
            </div>


      </>) 
    
}


export default MyPostRecipes



