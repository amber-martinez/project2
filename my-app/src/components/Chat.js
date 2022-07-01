import React, { useState, useEffect } from "react";
import ChatBox from "./ChatBox"

function Chat({ people }) {

    const [currentChatPerson, setCurrentChatPerson] = useState('Click on someone to send a message!');
    const [yourMessages, setYourMessages] = useState([]);
    const [loadMessages, setLoadMessages] = useState([]);
    const [chatterPic, setChatterPic] = useState('https://www.transparenttextures.com/patterns/asfalt-light.png');
    const [yourProfileData, setYourProfileData] = useState([]);
    const [greetingData, setGreetingData] = useState('');
    const [greetingLine, setGreetingLine] = useState('');
    const [chatStart, setChatStart] = useState(false);

    useEffect(() => {
        fetch(`https://www.greetingsapi.com/random`)
        .then(r => r.json())
        .then(data => setGreetingData(data))
    }, [currentChatPerson])

    useEffect(() => {
        fetch(`http://localhost:3000/profile`)
        .then(r => r.json())
        .then(data => setYourProfileData(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/messages`)
        .then(r => r.json())
        .then(data => setYourMessages(data))
    }, [loadMessages])

    function handleChatIconClick(e) {
        console.log(e.target)
    }

    function handleChatNameClick(e) {
        setChatterPic(e.target.parentElement.firstChild.src);
        setCurrentChatPerson(e.target.innerText);
        setChatStart(true);

        const filteredMsgs = yourMessages.filter(msg => {
            if (msg.recipient === e.target.innerText) {
                return msg
            }
        })

        const postMessages = filteredMsgs.map(msg => (
            <div id='rightBubblesWrapper' key={msg.id}>
            <div id='rightContainer'>
                <div id='rightBubble'>
                    <p>{msg.message}</p>
                </div>
                <div id='rightPhotoCropper'>
                    <img id="rightIcon" src={yourProfileData.profilePic}></img>
                </div>
            </div>
            </div>
        ))
        setLoadMessages(postMessages);

        setGreetingLine(`${greetingData.greeting}! That's how you say "hello" in ${greetingData.language} 🙂 How are you?`);

    }

    function handleNewMessage(newMessage) {

        const newMessagePost = (
            <div id='rightBubblesWrapper' key={newMessage.id}>
            <div id='rightContainer'>
                <div id='rightBubble'>
                    <p>{newMessage.message}</p>
                </div>
                <div id='rightPhotoCropper'>
                    <img id="rightIcon" src={yourProfileData.profilePic}></img>
                </div>
            </div>
            </div>
        )

        setLoadMessages(() => [...loadMessages, newMessagePost]);
    
        // let scroll_to_bottom = document.getElementById('chatBubblesWrapper');
        // function scrollBottom(element) {
        //     element.scroll({ top: element.scrollHeight, behavior: "smooth"})
        // }

        // scrollBottom(scroll_to_bottom)

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
            </span>
            <div>
                <ChatBox currentChatPerson={currentChatPerson} chatterPic={chatterPic} loadMessages={loadMessages} greetingLine={greetingLine} chatStart={chatStart} handleNewMessage={handleNewMessage}/>
            </div>
        </div>
    )
}

export default Chat