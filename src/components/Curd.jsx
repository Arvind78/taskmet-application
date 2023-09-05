import React,{useState} from 'react'
import axios from "axios"
 import {Card ,Button,Input,Modal} from "antd";
 const { TextArea } = Input;
const Curd = ({userId}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

   const handleOk = () => {
  
    if(id.length===0 ){
      alert("Please enter randon id")
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

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const[id,setId]=useState("")
  const [title ,setTitle] =useState("")
  const [discription,setDescription]=useState("")
    const ids = userId
 
  const taskContenar = {
  
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
  alignItems:"center",
  margin:"10px 0px"
  }
 

  return (
  <div style={taskContenar}>
     <Button type="primary" onClick={showModal}>
        Add Task
      </Button>
      <Modal title="Add task " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     
    <h3 style={{textAlign:"center",fontSize:"20px",marginBottom:"20px"}} >Taskment Curd Application </h3>
      <Input type="datetime-local" placeholder="Enter task*"
          onChange={(e) => setId(e.target.value)}
          style={{ margin: "10px 0px", padding: "10px" }} value={id}/>

   <Input type="text" placeholder="Enter task title*"
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: "10px 0px", padding: "10px" }} value={title} />

    <TextArea  rows={4}  placeholder="Enter task description*"
          onChange={(e) => setDescription(e.target.value)}
          style={{ margin: "10px 0px"}} value={discription} />
 
      </Modal>


       
   </div>
  )
}

export default Curd
