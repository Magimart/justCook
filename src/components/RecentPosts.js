
import {  Link, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import SearchBar from "./SearchBar";
import Substring from 'react-substring';




const RecentPosts = ({recipes}) => {

    const [newestPost, setNewestPost] = useState( )



    // const recent = recipes && recipes.sort(
    //     (a,b) => new Date(b.fields.featuredImage.sys.createdAt) - new Date(a.fields.featuredImage.sys.createdAt) 
    //    ).slice(0, 2)



    //   useEffect(() => {

    //      setNewestPost(recent);


    //     }, [newestPost]);

    

    return ( 
         
         
        <>
         
      <div className="p2">
                        <h1>recent posts</h1>
         <div className="card-group" id="recent-post">              
        { 
           
           recipes && recipes.sort(
            (a,b) => new Date(b.fields.featuredImage.sys.createdAt) - new Date(a.fields.featuredImage.sys.createdAt) 
           ).slice(0, 2) 
           .map( (recent) => 
           
             <div className="card">
                <img className="card-img-top" src={recent.fields.featuredImage.fields.file.url} alt="Card image cap"/>
                <div className="card-body">
                <div class="dropdown-divider"></div>
                <h5 className="card-title">Name: {recent.fields.name}</h5>
                <div class="dropdown-divider"></div>                                  
                 <h6 className="card-text">Description: </h6>
                 {recent.fields.description.substring(0, 50) + "..."} 
                <div class="dropdown-divider"></div>
                <h6 className="card-text">How to prepare:</h6>
                {recent.fields.howToPrepare.substring(0, 70)}
                <div class="dropdown-divider"></div>
                < h6 className="card-text">How to prepare:</h6>
                 {recent.fields.ingredients.substring(0, 50)}
                 {/* <a href="/recipes/name ">...read more</a> */}
                 <Link to={`/recipe/name`}>...read more</Link>

                  </div>
                 <div className="card-footer">
                      <h6>last updated: </h6>{recent.sys.updatedAt}
                        <small className="text-muted"><h6>Reviews</h6></small>

                </div> 
                
               </div> 
              

            )  
                       
          }
          </div>        

        </div>

        </>
     );
}
 
export default RecentPosts;





