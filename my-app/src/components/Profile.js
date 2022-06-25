import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";

function Profile() {

    const [profileData, setProfileData] = useState({});
    const [profileState, setProfileState] = useState();

    useEffect(() => {
        fetch(`http://localhost:3000/profile`)
        .then(r => r.json())
        .then(data => setProfileData(data))

        if (Object.keys(profileData).length === 0) {
            setProfileState(false);
        } else {
            setProfileState(true);
        }
    }, [profileData])

    const signedUp = (
        <div className="personCard">
                <img src={profileData.profilePic} id="personIcon"></img>
            <div id="profileText">
                <h1 id="personHeader">{profileData.firstName}, {profileData.age}</h1>
                <p id="personLocation">{profileData.location}</p>
                <p id="personInterests">{profileData.interests}</p>
            </div>
        </div>
    )

    const notSignedUp = (
        <span id="editProfileBox">
            <SignUp />
        </span>
    )

    return (
        <div>
            {profileState ? signedUp : notSignedUp}
        </div>
    )
}

export default Profile