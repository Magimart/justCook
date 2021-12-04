import React from 'react';
import {useState, useEffect, Fragment} from 'react';
import {client} from './client'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyPostRecipes from './components/MyPost'
import './App.css';
// import {contentful} from 'contentful-management';

const App=()=> {

  const [recipes, setRecipes]=useState();  //[]

  // const [updateRecipes, setUpdateRecipes]=useState();  //[]

  useEffect(()=>{


    client.getEntries()

    .then((response, error) => {

        if (!error) 
        //set state
          setRecipes(response.items);

            console.log(response.items)
        //  console.log(recipes.items[0].fields);
       
      }
    
    );
    
  }, [ ]);

    //--collection or space id: 44cqsw49kvuq
    // rolex entry id: 6TsboYUBGHOZbsPtg0NUnx
    // tocken Name: updatingTestforFelixapp
    // access token:   CFPAT-ofdS8OgEVpEO3UlLnbZbwvYvjkEUgaSOrRdl4k5znYI
            //  You should always update resources in the following order:
            //  Fetch current resource.
            //  Make changes to the current resource.
            //  Update the resource by passing the changed resource along with current version number.


  // updating data
           // Pseucode------------------
           // user clicks on the image-- fetch data function is trigered
           // checks if stored data same as clicked data, if true return a form
           // then connects to contenful updates the data
           // publish the data

  // useEffect(()=>{
      //  async function updateConnectMyContent() { 

      //     let space = await client.getSpace('44cqsw49kvuq');
      //     return  await space.getEnvironment('master') ; 
      //   }

      //    // async call back to return the updateConnect
      //   (async () =>  {  
      //       let environment = await updateConnectMyContent();
      //       console.log(environment); 
      //    }
      //    )();



    //  client.getSpace('44cqsw49kvuq').then((space) => {
    //   // Now that we have a space, we can get entries from that space
    //   space.getEntries().then((entries) => {
    //     console.log(entries.items)
    //   })
    
      // let's get a content type
    //   space.getContentType('product').then((contentType) => {
    //     // and now let's update its name
    //     contentType.name = 'New Product'
    //     contentType.update().then((updatedContentType) => {
    //       console.log('Update was successful')
    //     })
    //   })
    // })
    
  // }, [ ]);


  return (
    <div className='root'>
        <Header />
         <div className='posts'>
            <MyPostRecipes recipes={recipes}/>
          </div>
      </div>
  )
}
  


  export default App;
