import React, { useEffect, useState } from "react";

function Profile() {

    const [profileData, setProfileData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/profile`)
        .then(r => r.json())
        .then(data => setProfileData(data))
    }, [])

    // const interestsMapped = profileData.interests.map(interest => (
    //     <p>{interest}</p>
    // ))

    console.log(profileData.interests)

    return (
        <div>
            <div className="personCard">
                <img src={profileData.profilePic} id="personIcon"></img>
            <div id="profileText">
                <h1 id="personHeader">{profileData.firstName}, {profileData.age}</h1>
                <p id="personLocation">{profileData.location}</p>
                <p id="personInterests">{profileData.interests}</p>
                {/* <p id="personInterests">{profileData.interests.join(', ')}</p> */}
            </div>
            </div>
        </div>
    )
}

export default Profile