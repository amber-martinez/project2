import React, { useState } from "react";

function Person({ name, age, location, image, interests }) {

    const [heart, setHeart] = useState(false)

    let heartState = heart ? "https://i.imgur.com/VABEYSH.png" : "https://i.imgur.com/itp4mJL.png"

    function onClickHeart(e) {
        // console.log(e.target.parentElement.childNodes[1])
        console.log(e.target.parentElement)
        setHeart(!heart)
    }


    return (
        <div className="personCard">
            <img src={image} id="personIcon"></img>
        <div id="profileText">
            <h1 id="personHeader">{name}, {age}</h1>
            <p id="personLocation">{location}</p>
            <p id="personInterests">{interests.join(', ')}</p>
        </div>
        {/* <div onClick={onClickHeart}> */}
            <img src={heartState} id="heart" onClick={onClickHeart}></img>
        {/* </div> */}
        </div>
    )
}

export default Person;