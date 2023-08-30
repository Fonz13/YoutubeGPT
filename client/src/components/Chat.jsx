import React from 'react'
import Message from './Message'
import { useState } from 'react'
import api from "../api";

import  LoadingSpinner  from '../components/LoadingSpinner'


const Chat = (props) => {
  const videoID = props.videoID
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Hello! Do you have any questions about the Youtube video?"
  }])
  


  

  const handleSubmit = async (e) => {
    e.preventDefault()
    let chatLogNew = [...chatLog, {user: "me", message: `${input}`}]
    setChatLog(chatLogNew)
    setIsLoading(true);
    setChatLog([...chatLogNew, {user: "loading", message: ""}]) //Set a loading icon while waiting
    

  
    api.post("/chat-req/", {
      VideoID: videoID,
      Message: input
      })
      .then((response) => {
        if (response.data.Status === "OK") { 
          setChatLog([...chatLogNew, {user: "gpt", message: `${response.data.Message}`}])
        } else {
          setChatLog([...chatLogNew, {user: "gpt", message: `Sorry, I don't understand`}])
        }
        setIsLoading(false);
    });

    setInput('')
  }

  return (
    <div className='Chat-container'>
      <div className='Chat-log'>
        {chatLog.map((message, index) => (
          <Message key={index} {...message}/>
        ))}
      </div>
      <div className='input'>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write question here"
            type="text"
          />
        </form>
      </div>
    </div>
  )
}
export default Chat
