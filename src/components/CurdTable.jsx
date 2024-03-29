import React, { useEffect, useState } from 'react'
import {Button,Input} from "antd";
import axios from "axios"
import Update from './Update.jsx';
import Curd from './Curd.jsx';
 const { TextArea } = Input;
const CurdTable = ({userId}) => {
    const [data,setData]=useState([])
  
   
   const fetchData=(Id)=>{
      axios.get(`https://jsonsever.onrender.com/task?ids=${Id}`)
      .then(res=>setData(res.data))
      .catch((err)=>alert(err)) 
    }
    useEffect(()=>{
      fetchData(userId)
      
    },[])

    
    const deleteHandler =(id,userId)=>{
      const confirm1 = confirm("you want to remove task ")
    
      if(confirm1){
      axios.delete(`https://jsonsever.onrender.com/task/${id}`).then(res=>fetchData(userId))
      .catch((err)=>alert(err))  
      }
    }


   const btn ={
      width:"100%",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"10px"
   }
  return (
    <>
    <div style={btn}>
    <Button type='primary'  
     onClick={()=>fetchData(userId)}  >RefreshData</Button>
  <Curd userId={userId}/>
    </div>

    <table>
    <thead>
      <tr>
        <td>Date</td>
        <td>Title</td>
        <td>Description</td>
        <td>Update</td>
        <td>Delete</td>
      </tr>
    </thead>
    <tbody>
    
      {data.map((res)=>(
    
      <tr>
       <td>{res.id}</td>
      <td><TextArea cols={4} readOnly={true} value={res.title} />  </td>
      <td> <TextArea cols={4} value={res.discription}   readOnly={true}/>   </td>
      <td> <Update id={res.id} titles={res.title} discriptions={res.discription} 
         fetchData={fetchData} userId={userId}
      /></td>
      <td><Button type='primary' size='large' danger 
    style={{width:"100%"}} onClick={()=>deleteHandler(res.id,userId)}>Delete</Button></td>
 </tr>
      ))
    
}
   
    </tbody>
  </table>
  </>
  )

}

export default CurdTable