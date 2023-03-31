import React from 'react'
import {Button} from "antd"
import {useNavigate} from "react-router-dom"
 
const Navbar = ({setIsLogin,isLogin}) => {
  const Nevigate = useNavigate()
   const headerStyle ={
    height:"60px",
     width:"100%",
     display:"flex",
     justifyContent:"space-between",
     alignItems:"center",
     padding:"0px 80px",
  
     top:"0",
     position:"sticky"

   }
   const logoStyle ={
     fontSize:"22px",
     fontWeight:"800"
   }

  return(
    <header style={headerStyle} >
      <div style={logoStyle}>Task-ment </div>
      {
        
        (isLogin)?    
        <Button type='primary' size='large'
        onClick={()=>setIsLogin(false)}>logout</Button>: 
          <Button type='primary' size='large'
           onClick={()=>Nevigate('/')}>Signup</Button>
        }

    </header>
  )
  }

export default Navbar