 import React, { useState } from 'react'
 import {Routes,Route} from "react-router-dom"
//  import {Button} from "antd"
 import Home from "./components/Home"
 import Login from "./components/Login"
import Navbar from './components/Navbar'
 const App = () => {
  const [isLogin,setIsLogin] = useState(false)
  const [userId,setUserId ]=useState("")
  
  const getUserId =(id)=>{
     setUserId(id)
   
  } 
   return (
    <> 
     <Navbar setIsLogin={setIsLogin} isLogin={isLogin}/>
     <Routes>
 
       <Route path="/" element={(isLogin)? <Home userId={userId}/>:<Login setIsLogin={setIsLogin} getUserId={getUserId} />}/>
   
     </Routes>
  
     </>
   )
 }
 
 export default App