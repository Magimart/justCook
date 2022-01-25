import React from 'react'
import { NavLink, Link, Switch, Route } from "react-router-dom";
import HomeSlide from './SlideHome';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Substring from 'react-substring';
import RecentPosts from './RecentPosts';
import Footer from './Footer';

// SinglePostRecipe.js


   const HomePage = ({recipes, match } ) => {

    
        //  const {name}  = recipes.fields;
      //  console.log( recipes && recipes.sort(
      //    (a,b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt) 
      //  ));

      // const mySort = recipes && recipes.sort(
      //   (a,b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt) 
      //  ).slice(0, 4)

      //   console.log(mySort);

      //     console.log(recipes && recipes[0].fields.country );
      //     console.log(recipes && recipes[0].fields.featuredImage.sys.createdAt );

      //--------moved to recent posts
      // const newSort = recipes && recipes.sort(
      //       (a,b) => new Date(b.fields.featuredImage.sys.createdAt) - new Date(a.fields.featuredImage.sys.createdAt) 
      //      ).slice(0, 2)
      // console.log(newSort);


  //  console.log( recipes && recipes.sort(
  //        (a,b) => new Date(b.featuredImage.sys.createdAt) - new Date(a.featuredImage.sys.createdAt) 
  //      ));
     
        
    //   const d1 = new Date('2017-06-01');
    //   const d2 = new Date('2018-06-01');
    //   const d3 = new Date('2019-06-01');
      
    //  const mySort = [d2, d1, d3].sort();
    //      console.log(mySort);

                

      return (
       <>
            <HomeSlide/>
            <RecentPosts recipes={recipes}/>


          <div className='p2'> 

             {/* <div className="row"> <h1>Latest posts</h1></div> */}

           <div className="card-group" id="home-post-card"> 

           {/* {recipes
            .filter(time =>
                 match.params.id
                ? student.id === parseInt(match.params.id, 10)   //--?!!!
                : student
                )  } */}

             { recipes && recipes.map(recipe  =>  {

                //       let latestPost =  [ ];


                //         if(recipe.sys.createdAt) {

                //             latestPost.push((time) => {
                //                 return [time += recipe.sys.createdAt] 
                //              });
                //           } 
                //         ;
                //  console.log(latestPost);

                   //-----
                     
                      //  if(recipe.sys.createdAt) {
                      // let times = [recipe.sys.createdAt].sort( function( a , b){
                      //     if(a > b) return 1;
                      //     if(a < b) return -1;
                      //     return 0;
                      //    });
                      
                      //   //  console.log(times);
                      //   }



                      // nvm  ls
                      // nvm use ---version name---$ npm install
// npm WARN conflict A git conflict was detected in package-lock.json. Attempting to auto-resolve.
// npm WARN conflict To make this happen automatically on git rebase/merge, consider using the npm-merge-driver:
// npm WARN conflict $ npx npm-merge-driver install -g
// npm ERR! conflict Automatic conflict resolution failed. Please manually resolve conflicts in package-lock.json and try again.
// npm ERR! Unexpected token < in JSON at position 0 while parsing near '<<<<<<< HEAD
// npm ERR! {
// npm ERR!   "...'
// n
// npm ERR! A complete log of this run can be found in:
// npm ERR!     C:\Users\admin\AppData\Roaming\npm-cache\_logs\2020-10-20T10_08_02_858Z-debug.log


                      return (

             

                            <div className="card">
                              <img className="card-img-top" src={recipe.fields.featuredImage.fields.file.url} alt="Card image cap"/>
                               <div className="card-body">
                                <div class="dropdown-divider"></div>
                                <h5 className="card-title">Name: {recipe.fields.name}</h5>
                                    <div class="dropdown-divider"></div>                                  
                                    <h6 className="card-text">Description: </h6>
                                    {recipe.fields.description.substring(0, 50) + "..."} 
                                    <div class="dropdown-divider"></div>
                                  <h6 className="card-text">How to prepare:</h6>
                                   {recipe.fields.howToPrepare.substring(0, 70)}
                                   <div class="dropdown-divider"></div>
                                                                 
                                     {/* <a href="/recipes/name ">...read more</a> */}

                                     <Link to={`/recipe/name`}>....read more</Link>

                                     
                                 </div>
                                 <div className="card-footer">
                                 <h6>Last updated: </h6>{recipe.sys.updatedAt}

                                     <small className="text-muted"><h6>Reviews</h6></small>
                                 </div>
                             </div>
                       
                     )
                   }
                  )
              }
         
          </div>


        </div>
   

        <Switch>
              <Route path="/recent-posts"
                 render={(props) => <RecentPosts recipes={recipes}/>} 
              /> 
              
        </Switch>
         <div className='p2 footer' id="footer-div"> 
 
          <Footer recipes={recipes} />
         </div>
       </>  
    )
}


export default HomePage;