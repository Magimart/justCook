
import React from 'react'
import { NavLink, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


const HomeSlide = () => {


     const myImages = {
        
         imageOne: '../..public/home-slide0.jpg'
         
      }
      

    console.log(myImages.imageOne);

    return (
        <> 



              

                        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">

                   <div className="carousel-item active">
                      <img className="d-block w-100" 
                      src= '/home-slide0.jpg'
                      alt="First slide"/>
                   </div>
                
                  <div className="carousel-item">
                       <img className="d-block w-100" 
                      src= {myImages.imageOne}
                      alt="Second slide"/>
                   </div>

                  <div className="carousel-item">
                   <img className="d-block w-100" 
                      src= {myImages.imageOne}/>
                      </div>

               </div>

              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
           <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
        


         </>
     );
}
 
export default HomeSlide;