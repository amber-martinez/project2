import React, { useState, useEffect } from "react";

function ChatBox({ currentChatPerson, people, chatterPic }) {

    const [youProfileData, setYouProfileData] = useState([]);
    const [messageTyping, setMessageTyping] = useState('');
    const [yourMessages, setYourMessages] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:3000/profile`)
        .then(r => r.json())
        .then(data => setYouProfileData(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/messages`)
        .then(r => r.json())
        .then(data => setYourMessages(data))
    }, [])


    // const yourMessagesGroup = yourMessages.filter(msg => {
    //     if (msg.recipient === currentChatPerson) {
    //         console.log(msg.recipient, currentChatPerson, msg.message)
    //         return msg
    //     }
    // })

    // console.log(yourMessagesGroup)

    // console.log(yourMessages)


    function handleMessageTyping(e) {
        setMessageTyping(e.target.value)
    }

    function onMessageSubmit(e) {
        e.preventDefault();

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
            .then((newMessage) => console.log(newMessage));
    }

    const filteredMsgs = yourMessages.filter(msg => {
        if (msg.recipient === currentChatPerson) {
            return msg
        }
    })

    // console.log(filteredMsgs)

    return (
        <span id="chatBoxOutline">
            
            <div id="chatTitle"><strong>{currentChatPerson}</strong></div>
            <div id='leftWrapper'>
            <div id='leftContainer'>
                <div id='leftPhotoCropper'>
                    <img id="leftIcon" src={chatterPic}></img>
                </div>
                <div id='leftBubble'>
                    <p>Hey. whats up?</p>
                </div>
            </div>
            </div>

            <div id='rightWrapper'></div>


            <div id="chatFooter">
                <form onSubmit={onMessageSubmit}>
                <span id='chatTypeBoxWrapper'>
                    <input id="chatTypeBox" type="text" placeholder="Type your message here..." value={messageTyping} onChange={handleMessageTyping}></input>
                </span>
                <div id='chatSendWrapper'>
                    <button id='chatSendButton' onClick={onMessageSubmit}><img id='chatArrow' src='https://i.imgur.com/qvdKR4d.png'></img></button>
                </div>
                </form>
            </div>
        </span>
    )
}

export default ChatBox;