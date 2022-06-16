import React, { useState } from 'react';

function SignUp() {

    const [ifUser, setIfUser] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [interests, setInterests] = useState([]);

    function onFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function onAgeChange(e) {
        setAge(e.target.value)
    }

    function onLocationChange(e) {
        setLocation(e.target.value)
    }

    function onProfilePicChange(e) {
        setProfilePic(e.target.value)
    }


    // [...currentstate, newData]
    let interestsArr= [];

    function handleInterests(e) {
        // let interestsArr= [];

        if (e.target.checked === true) {
            interestsArr.push(e.target.name);
            // setInterests(interestsArr)
        } else {
            interestsArr = interestsArr.filter(function(interest) {
                // remove interest from interests array
                return e.target.name !== interest
            })
            // setInterests(interestsArr)
        }
        console.log(interestsArr);
        setInterests(interestsArr);
    }

    console.log(interests)

    function onSignUpSubmit(event) {
        event.preventDefault();
        setIfUser(true);

        const profileData = {
            firstName: firstName,
            age: age,
            location: location,
            profilePic: profilePic,
            interests: interests,
        };

        fetch(`http://localhost:3000/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        })
        .then((r) => r.json())
        .then((userProfile) => console.log(userProfile))

    }

    let newUserSignUp = (
        <div id="newSignUp">
            <p id="signUpHeader"><strong>sign up for matchr.</strong></p>
            <form id="signUpForm">
                <label id="signUpLabels">
                first name:
                <input type="text" name="name" id="signUpInputs" value={firstName} onChange={onFirstNameChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                age:
                <input type="text" name="age" id="signUpInputs" value={age} onChange={onAgeChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                location:
                <input type="text" name="location" id="signUpInputs" value={location} onChange={onLocationChange}/>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                interests:
                    <div id="signUpInterestsContainer">
                        <input type="checkbox" name="baking" id="signUpInterests" onClick={handleInterests}/>
                        baking
                        <input type="checkbox" name="biking" id="signUpInterests" onClick={handleInterests}/>
                        biking
                        <input type="checkbox" name="concerts" id="signUpInterests" onChange={handleInterests}/>
                        concerts
                        <br></br>
                        <input type="checkbox" name="cooking" id="signUpInterests" onChange={handleInterests}/>
                        cooking
                        <input type="checkbox" name="drinking" id="signUpInterests" onChange={handleInterests}/>
                        drinking
                        <input type="checkbox" name="gaming" id="signUpInterests" onChange={handleInterests}/>
                        gaming
                        <br></br>
                        <input type="checkbox" name="gardening" id="signUpInterests" onChange={handleInterests}/>
                        gardening
                        <input type="checkbox" name="hiking" id="signUpInterests" onChange={handleInterests}/>
                        hiking
                        <input type="checkbox" name="pilates" id="signUpInterests" onChange={handleInterests}/>
                        pilates
                        <input type="checkbox" name="pottery" id="signUpInterests" onChange={handleInterests}/>
                        pottery
                    </div>
                </label>
                <br></br>
                <br></br>
                <label id="signUpLabels">
                profile photo:
                <input type="text" name="profilePic" id="signUpInputs" value={profilePic} onChange={onProfilePicChange}/>
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="submit" id="signUpSubmit" onClick={onSignUpSubmit}></input>
            </form>
        </div>
    )

    return (
        <div>
            {ifUser ? null : newUserSignUp }
        </div>
    )

    // https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg

}

export default SignUp