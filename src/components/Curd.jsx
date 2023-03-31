import React,{useState} from 'react'
import axios from "axios"
 import {Card ,Button,Input, Alert} from "antd";
 const { TextArea } = Input;
const Curd = ({userId}) => {
  const[id,setId]=useState("")
  const [title ,setTitle] =useState("")
  const [discription,setDescription]=useState("")
    const ids = userId
 
  const taskContenar = {
  height:"60vh",
  width :"100vw",
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
  alignItems:"center"
  }
  const addTaskHandler = (e) => {
    e.preventDefault()
    if(id.length<4 && id.length>4 ){
      alert("Please enter 4 digit randon id")
      return false;
     }
      if(title===""){
       alert("Please enter task title");
       return false;
      }
      if(discription===""){
        alert("Please enter task discription");
        return false;
      }
    axios.post(`https://jsonsever.onrender.com/task`,{ids,id,title,discription})
    .then(res=>{alert("your task sucesshully add")})
    .catch((err=>alert(err)))
   
    setTitle("")
    setDescription("")
     setId("")
    
    
  };

  return (
  <div style={taskContenar}>
   <Card style={{width:600,height:"auto" ,margin:"5px 0px",padding:"10px 0px"}}>
    <h3 style={{textAlign:"center",fontSize:"27px",marginBottom:"20px"}} >Add-Task </h3>
    <Input type="number" placeholder="Enter task*"
          onChange={(e) => setId(e.target.value)}
          style={{ margin: "10px 0px", padding: "10px" }} value={id}/>

   <Input type="text" placeholder="Enter task title*"
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: "10px 0px", padding: "10px" }} value={title} />

    <TextArea  rows={4}  placeholder="Enter task description*"
          onChange={(e) => setDescription(e.target.value)}
          style={{ margin: "10px 0px",   }} value={discription} />

         <Button type="primary" size="large" style={{width:"100%"}}
         onClick={addTaskHandler}>Add task</Button>
   </Card>
       
   </div>
  )
}

export default Curd