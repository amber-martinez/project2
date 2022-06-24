import React, { useState, useEffect } from "react";
import ChatBox from "./ChatBox"

function Chat({ people }) {

    const [currentChatPerson, setCurrentChatPerson] = useState('Send a message!');
    const [yourMessages, setYourMessages] = useState([]);
    const [loadMessages, setLoadMessages] = useState([]);
    const [chatterPic, setChatterPic] = useState('');
    // const [chatName, setChatName] = useState('Send a message!');

    useEffect(() => {
        fetch(`http://localhost:3000/messages`)
        .then(r => r.json())
        .then(data => setYourMessages(data))
    }, [])

    function handleChatIconClick(e) {
        console.log(e.target)
    }

    function handleChatNameClick(e) {
        setChatterPic(e.target.parentElement.firstChild.src)

        setCurrentChatPerson(e.target.innerText)

        const filteredMsgs = yourMessages.filter(msg => {
            if (msg.recipient === currentChatPerson) {
                return msg
            }
        })

        const postMessages = filteredMsgs.map(msg => (
            <p key={msg.id}>
                {msg.message}
            </p>
        ))

        setLoadMessages(postMessages)

    }

    const peopleIcons = people.map(person => (
        <span id="chatIconGroup" key={person.name}>
            <img src={person.image} id="chatIcon" onClick={handleChatIconClick}></img>
            <p onClick={handleChatNameClick}>{person.name}</p>
        </span>
    ))

    return (
        <div>
            <span>
                {peopleIcons}
                {loadMessages}
            </span>
            <div>
                <ChatBox currentChatPerson={currentChatPerson} people={people} chatterPic={chatterPic}/>
            </div>
        </div>
    )
}

export default Chat