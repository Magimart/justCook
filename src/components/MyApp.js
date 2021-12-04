
// import React from 'react';
// import {useState, useEffect, Fragment} from 'react';
// import {client} from './client'
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import MyPostRecipes from './components/MyRecipes'
// import '../../App.css';
// import { NavLink, Switch, Route } from "react-router-dom";
// import HomePage from './components/HomePage';
//  import SearchBar from './components/SearchBar';
//  import FoundPosts from './components/SearchBar';


//  //-- https://cdnjs.cloudflare.com/ajax/libs/react/16.14.0/umd/react.production.min.js
// //  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
// // <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
// //https://www.npmjs.com/package/react-document-meta

// const MyApp=()=> {

//   const [recipes, setRecipes] = useState();  //[]


//        useEffect(()=>{

//                   //--old
//             //  client.getEntries().then((response, error) => {

//             //   if (!error) 
//             //   //set state
//             //   setRecipes(response.items);
//             //   // setLoading(false)
//             //    console.log(response.items)
//             //    //  console.log(recipes.items[0].fields);
//             //   });


//             const connectToMyContent = async () => { 

//                client.getEntries().then((response, error) => {

//               if (!error) 
//                  //set state
//                  setRecipes(response.items);
//                  // setLoading(false)
//                  console.log(response.items)
//                //  console.log(recipes.items[0].fields);
//               });
//              }
//             connectToMyContent();
    
//          }, [ ]);



//      return (
//       <>
//          <Header  recipes={recipes}/>

//           <Switch>
//             {/* home route */}
//               <Route path="/"
//                  render={(props) => <HomePage recipes={recipes} {...props} />}

//               /> 

//                <Route path="/recipes"
//                    render={(props) => <MyPostRecipes recipes={recipes} {...props} />}
//               />

//              {/* <Route  path="/search/"
//                 render={( ) => (
//                 <SearchBar/>
//                 )}
//              /> */}
 
//             </Switch> 


//       </> 
//     )
// }
  
//   export default MyApp;







