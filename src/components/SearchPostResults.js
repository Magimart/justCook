import {  Link, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import SearchBar from "./SearchBar";
import Substring from 'react-substring';

// SinglePostRecipe.js

    //-----search result per recipe component------------------------------!
            
    const FoundPosts = ({name, featuredImage, description, howToPrepare,ingredients, loading}) => {

              //-------------loading---posts-------------!

              if (loading) {
                return <p>Loading ...</p>;
              }
            
    
      return (
        <>

        <div className='d-flex flex-column'>
        <div className='p2'>

           <ul className="list-group">
                 <li className="list-group-item">
                 {/* <Link to={`/search/`}><FoundPosts name={name}/>{name}</Link> */}
                <Link to={`/recipe/`}> <h2 className="header-two">{name}</h2>
                    <br></br>
                    <h3>description: </h3> <p>{description.substring(0, 100) + "..."}</p> 
                    {/* <h3>description: </h3> <p>{description}</p>  */}
                </Link>
                </li> 
           </ul>
           </div>

      <Switch> 

          <Route  path="/search/: name?"
              render={(props) => (
                 <FoundPosts name={name} {...props} />
            // <Link to={`/search/`}><FoundPosts name={name}/>{name}</Link>

            )}
            />

      </Switch> 

        </div>
        </>
      );
    };




      export default FoundPosts;


//-------earlier stage
    //   const FoundPosts = ({name}) => {
    //     // const {name} = props;
      
    //     return (
    //       <div  className="container-fluid">
    //         {/* <Fragment key={Math.floor(Math.random()*13200)}> */}
    //         <p>{name}</p>
    //         {/* </Fragment> */}
    //       </div>
    //     );
    //   };
    
    //   export default FoundPosts;
