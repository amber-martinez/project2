import React, { useState } from "react";

function ChatBox({ currentChatPerson, chatterPic, loadMessages, greetingLine, chatStart, handleNewMessage }) {

    const [messageTyping, setMessageTyping] = useState('');


    function handleMessageTyping(e) {
        setMessageTyping(e.target.value)
    }

    function onMessageSubmit(e) {
        e.preventDefault();
        setMessageTyping("");

        const newMessageData = {
            recipient: currentChatPerson,
            message: messageTyping,
        };

        fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newMessageData),
          })
            .then((r) => r.json())
            .then((newMessage) => handleNewMessage(newMessage));
    }

    const bubbles = (
        <div id="chatBubblesWrapper">
                <div id='leftWrapper'>
                <div id='leftContainer'>
                    <div id='leftPhotoCropper'>
                        <img id="leftIcon" src={chatterPic}></img>
                    </div>
                    <div id='leftBubble'>
                        <p>{greetingLine}</p>
                    </div>
                </div>
                </div>
                <div id='rightWrapper'>
                    {loadMessages}
                </div>
            </div>
    )

    const typeBoxAndSend = (

        <div>
            <span id='chatTypeBoxWrapper'>
                <input id="chatTypeBox" type="text" placeholder="Type your message here..." value={messageTyping} onChange={handleMessageTyping}></input>
            </span>
            <div id='chatSendWrapper'>
                <button id='chatSendButton' onClick={onMessageSubmit}><img id='chatArrow' src='https://i.imgur.com/qvdKR4d.png'></img></button>
            </div>
        </div>

    )

            

    return (
        <span id="chatBoxOutline">
            <div id="chatTitle">
                <strong>{currentChatPerson}</strong>
            </div>
            {chatStart ? bubbles : null}
            <div id="chatFooter">
                <form onSubmit={onMessageSubmit}>
                {chatStart ? typeBoxAndSend : null}
                </form>
            </div>

        </span>
    )
}

export default ChatBox;