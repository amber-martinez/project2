import React, { useState, useEffect } from "react";

function Chat() {

    const [currentChat, setCurrentChat] = useState();
    const [people, setPeople] = useState([])
  
    useEffect(() => {
      fetch(`http://localhost:3000/people`)
      .then((r) => r.json())
      .then(data => setPeople(data))
    }, [])

    const peopleIcons = people.map(person => (
        <span id="chatIconGroup">
            <img src={person.image} id="chatIcon"></img>
            <p>{person.name}</p>
        </span>
    ))

    return (
        <div>
            <span>
                {peopleIcons}
            </span>
        </div>
    )
}

export default Chat