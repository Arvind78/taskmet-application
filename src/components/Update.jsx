import React, { useState } from 'react';
import axios from "axios"
import { Button, Modal,Input } from 'antd';
const {TextArea} =Input
const Update = ({id,titles,discriptions,fetchData,userId}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")
   
    const showModal = () => {
     setDiscription(discriptions)
     setTitle(titles)
        setIsModalOpen(true);
        
    };

    const updatehandle = (id,userId) => {
        
      axios.put(`https://jsonsever.onrender.com/task/${id}`,{title,discription})
      .then(res=>fetchData())
      .catch((err=>alert(err)))
      setTitle("")
      setDiscription("")
      setIsModalOpen(false);
    };

    const handleCancel = ( ) => {
         
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type='primary' size='large' style={{width:"100%"}} 
              onClick={showModal}> Update</Button>

            <Modal title="Basic Modal" open={isModalOpen} onOk={()=>updatehandle(id,userId)} onCancel={handleCancel}>
                <h3 style={{ textAlign: "center", fontSize: "27px", marginBottom: "20px" }} >Add-Update </h3>
                <Input   placeholder="task Id" value={id}
                     style={{ padding: "10px" }} readOnly={false} />

                  <Input type="text" placeholder="Enter task title"
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ margin: "10px 0px", padding: "10px" }} value={title} />

                   <TextArea rows={4} placeholder="Enter task description"
                    onChange={(e) => setDiscription(e.target.value)}
                    style={{ margin: "10px 0px", }} value={discription} />

            </Modal>
        </>
    );
};

export default Update;