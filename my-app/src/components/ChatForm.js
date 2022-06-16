import React, { useState } from "react";

function CurrentChat() {

    const [newMessage, setNewMessage] = useState("");

    function onTyping(e) {
        setNewMessage(e.target.value);
    }

    function onMessageSubmit(e) {
        e.preventDefault();

        const submitMsg = {
            message: newMessage
        }

        fetch(`http://localhost:3000/messages`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(submitMsg)
          })
          .then((r) => r.json())
          .then((submitMsg) => console.log(submitMsg))
    }

    return (
        <span id="currentChat">
            <div>
            </div>
            <div>
                <form className="form" onSubmit={onMessageSubmit}>
                    <input type="text" id="box" placeholder="Type your message here..." onChange={onTyping}
                    />
                    <button id="sendButton"><img id="arrow" src="https://i.imgur.com/qvdKR4d.png"></img></button>
                </form>
            </div>
        </span>
    )
}

export default CurrentChat