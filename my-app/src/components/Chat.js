import React, { useState, useEffect } from "react";
import CurrentChat from "./ChatForm";
import ChatList from "./ChatList";

function Chat() {

    const [messages, setYourMessages] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/messages`)
        .then(r => r.json())
        .then(data => setYourMessages(data))
    }, [])

    console.log(messages)

    function handleAddMessage(submitMsg) {
        setYourMessages([...messages, submitMsg])
    }

    return (
        <div>
            <span id="chatContainer">
                <ChatList />
            <div>
                {messages.map(message => (
                    <p key={message.id}>{message.message}</p>
                ))}
            </div>
                <CurrentChat handleAddMessage={handleAddMessage} messages={messages}/>
            </span>
        </div>
    )
}

export default Chat