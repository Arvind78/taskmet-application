 
import React, { useState } from 'react'
import Curd from "./Curd.jsx"
import CurdTable from "./CurdTable.jsx"
const Home = ({userId}) => {
 
  return (
    <div className='homeContenar'>
      
      <Curd userId={userId}  />
      <CurdTable userId={userId} />
    </div>
  )
}

export default Home