import 'bootstrap/dist/css/bootstrap.min.css';

import './../App.css';
import {  Link, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import SearchBar from './SearchBar';


 const Navbar = ({recipes})=>{


              

    return (
            <>

           <nav className="navbar navbar-expand-lg navbar-light bg-light" id="bg-light">
               <a className="navbar-brand" href="#">
                 {/* <img src=""> */}
                 </a>
                <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarText" ariaControls="navbarText" ariaExpanded="false" ariaLabel="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
               </button>
              <div className="collapse navbar-collapse" id="navbarText">
                 <ul className="navbar-nav mr-auto" id="navbar-nav-mr-auto">
                    <li className="nav-item active">
                         <a className="nav-link" href="#">
                        <i className="fa fa-home"></i>
                            Home
                         <span className="sr-only">(current)</span>
                         </a>
                    </li>

                     <li className="nav-item">
                         <Link className="nav-link" to="/recipes/country">
                              europe
                         </Link>
                     </li>
                     <li className="nav-item">
                          <Link className="nav-link" to="/recipes/country">
                             asia
                         </Link>                     </li>
                     <li className="nav-item">
                          <Link className="nav-link" to="/recipes/country">
                             africa
                         </Link>                     </li>
                 </ul>
            

              {/* <span className="navbar-text"> */}

              {/* <li className="dropdown">
                <a className="navbar-brand" id="user-profile" href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <img src="http://lorempixel.com/100/100/people/9/" class="img-responsive img-thumbnail img-circle" id="img-thumbnail-img-circle">   
                </a>
                <h3 className="login">
                    login          
                </h3>
                <ul className="dropdown-menu dropdown-block" role="menu">
                    <li><a href="#">Profile edition</a></li>
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
               </li>
               </span> */}
            </div>
            <SearchBar recipes={recipes}/>

        </nav>


            </>)
    }



export default Navbar;