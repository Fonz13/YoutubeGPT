import React from 'react'

const Message = (message) => {
  return (
    <div className={`Message ${(message.user === "gpt" && "gpt") || (message.user ==="loading" && "loading")}`}>
      <div className={`Message-center ${(message.user === "gpt" && "gpt") || (message.user ==="loading" && "loading")}`}>
        <div className={`content ${message.user === "loading" && "loading"}`}>
          {message.message}
        </div>
      </div>
    </div>
  )
}
export default Message
