import React from 'react'
import {useState, useEffect} from 'react';

const MyAdsSlides = ({recipes}) => {
     

    const [myAds, setMyAds] = useState();  //[]


       const myNextAds = [];

                 //--------moved to recent posts
      const newSort = recipes && recipes.sort()                        
           .map((ads) => {
               
               return (console.log(ads.fields))
            
             }
            


           )
      console.log(newSort);
 
        

    return (
        
        

          <>
            

          </>
     );


}
 
export default MyAdsSlides;













