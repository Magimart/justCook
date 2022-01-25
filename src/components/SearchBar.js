
import './../App.css';
import {  Link, Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import FoundPosts from './SearchPostResults';
import SingleRecipePage from './SingleRecipePage';

// SinglePostRecipe.js


 const SearchBar = ({recipes} )=>{

      // console.log(FoundPosts.name);

        const [loading, setLoading] = useState(false)

        const [userInput, setUserInput] = useState("");  //search
        const [searchTerm, setSearchTerm] = useState('');  //country
        const [filterSearch, setFilterSearch] = useState(null); //result


        const handleClick = (e) =>  { 
              setSearchTerm(userInput)
              setUserInput('')
              e.preventDefault();

          }

               //---user inputs
        const handleUserInput = (e) => {
              //  console.log(e.target.value);
               setUserInput(e.target.value);
               
           };
      console.log(userInput)

      
      const handleEnter = (e) => {
          if (e.key === "Enter") handleClick();
        };


        useEffect(() => {
          setLoading(true);     
          setFilterSearch(recipes);
          // console.log(recipes);
          //-----------set loading off when component mounts
              setLoading(false);

          }, [ ]);


          //----test---- map()------

          // {filterSearch && filterSearch.map(
          //   (recipe) => {

          //         return  console.log((<p>{recipe.fields.name}</p>));
          //   })
          // }
           
          
           //-----test ---filter()
           
           // const newSort = recipes && recipes.filter(
                //     (recipe) => {
                //         if(recipe.fields.name) { 
                //           return  (console.log( recipe.fields.name));
                //          }
                //     })
                //     console.log( newSort);


        useEffect(() => {
            setFilterSearch(() => recipes &&
                    recipes.filter((recipe) => {
                   return  (recipe.fields.name.toLowerCase().includes(userInput.toLowerCase()))

                    } )
                    // clear fields 

                 );
        }, [userInput, searchTerm]);



    return (
            <>
  
                 {/* form--- */}
                 <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"
                       onChange={handleUserInput} 
                       onKeyDown={handleEnter} 
                       type="text" placeholder="Search" aria-label="Search"
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0"
                          onClick={handleClick} type="submit">
                        Search
                    </button>
                </form>

                
            {/* //--iterate thru filtered items */}

            {filterSearch && filterSearch.filter((recipe) =>
                searchTerm === recipe.fields.name? recipe.fields.name : recipe   
            )           
           .map((recipe) => 

                  <Fragment key={Math.floor(Math.random() *13200)}>
                           <FoundPosts 
                                   name={recipe.fields.name}
                                   featuredImage= {recipe.fields.featuredImage.fields.file.url}
                                   description={recipe.fields.description}
                                   howToPrepare={recipe.fields.howToPrepare}
                                   ingredients={recipe.fields.ingredients}
                          />
                                   {/* <Link to={`/search`}><FoundPosts name={recipe.fields.name}/> </Link> */}
                  </Fragment>

                )
               }
                    {/* <SingleRecipePage/> */}
              {

              searchTerm ? (
              <FoundPosts/>) : ( ''
              // <SingleRecipePage />) : ( <p>Search delicious recipes.</p>
              )
        
         } 




      </>


        )
    }

    

    //-----search result per recipe component------------------------------!
            
    // const FoundPosts = ({name, loading}) => {
    //   // const {name} = props;

    //           //-------------loading---posts-------------!

    //           // if (loading) {
    //           //   return <p>Loading ...</p>;
    //           // }
            
    
    //   return (
    //     <>

    //     <div className='container-fluid'>
           
    //     {(console.log(name)) }

    //   {/* <Switch> */}

    //    {/* <Route  path="/search/: name?"
    //       render={(props) => (
    //         // <FoundPosts name={name} {...props} />
    //     <Link to={`/search/`}><FoundPosts name={name}/>{name}</Link>

    //      )}
    //   />

    //   </Switch> */}

    //     </div>
    //     </>
    //   );
    // };

  

export default SearchBar;