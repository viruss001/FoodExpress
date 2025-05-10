import React from 'react'
import ContextProvider from "../Context/ContextProvider"
import Navbar from '../Components/Navbar'
import Filter from '../Components/Filter/Filter'
import ListPage from './ListPage'
const Homepage = () => {
  return (
    <>
 
<ContextProvider>

   <Filter/> 
    <ListPage/>
</ContextProvider>
    
    </>
  )
}

export default Homepage