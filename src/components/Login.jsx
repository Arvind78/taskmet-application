import React, { useState } from 'react'
import {app}  from "./Firebase.js"
import { Card, Input, Button ,Alert} from 'antd';
import { useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const Login = ({setIsLogin,getUserId}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const Navigate = useNavigate()
  const contenar = {
    height: "90vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020",
  }

  const loginContenar = {


    padding: "5px 25px",
    width: 500,
    height: 340

  }
  const btnStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    margin: "8px",

  }

  const signUpHandlar = () => {
    
  const auth = getAuth(app);
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     alert("user sucussfully signup!")
     if(user){
      setIsLogin(true)
      setEmail("")
      setPassword("")
     }
     
     
     getUserId(user.uid)

  })
  .catch((error) => {
    const errorCode = error.code;
    error.message;
    alert(error.message ,errorCode)
    setIsLogin(false)
  });

  }

  const signInHandlar = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
        if(user){
            setIsLogin(true)
            setEmail("")
            setPassword("")
        }
        
        getUserId(user.uid)
     })
     .catch((error) => {
       const errorCode = error.code;
       alert(error.message ,errorCode)
       setIsLogin(false)
     });
  }
  return (
    <div style={contenar}>

      <Card style={loginContenar}>
        <h3 style={{ textAlign: "center", marginBottom: "10px", fontSize: "22px" }}>Curd Application</h3>
        <Input type="email" placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px 0px", padding: "8px" }} value={email} />
        <Input.Password placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px 0px", padding: "8px" }} value={password} />
        <div style={btnStyle}>
          <Button type="primary" size='large' block="true"
            style={{ margin: "5px 0px" }} onClick={signUpHandlar}> Sign up </Button>
          <Button type='primary' size='large' block="true"
            style={{ margin: "5px 0px" }} onClick={signInHandlar} > Sign in </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login