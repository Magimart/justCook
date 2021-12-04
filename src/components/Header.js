import React from 'react'
import Navbar from './Nav'
// import './App.css';




const Header = ({recipes})=>{



    return (
       <>
       <Navbar   recipes ={recipes} />
      </>)
}


export default Header