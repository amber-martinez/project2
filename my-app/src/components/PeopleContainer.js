import React, { useState } from "react";
import Person from "./Person"


function PeopleContainer({ people }) {

    const [locationFilterState, setLocationFilterX] = useState(false);
    const [interestsFilterState, setInterestsFilterX] = useState(false);
    const [ageFilterState, setAgeFilterX] = useState(false);


    const peopleGroup = people.map(person => (
        <Person
        key={person.id}
        id={person.id}
        name={person.name}
        gender={person.gender}
        age={person.age}
        location={person.location}
        image={person.image}
        interests={person.interests}
        />
    ))

    let locationFilterX = locationFilterState ? "☑️" : "☐";
    let interestsFilterX = interestsFilterState ? "🔽" : "▶️";
    let ageFilterX = ageFilterState ? "☑️" : "☐";

    // console.log(people.filter(person => {
    //     console.log(person.interests.includes("pottery"))
    // }))

    function handleLocationFilter(e) {
        e.preventDefault();

        setLocationFilterX(!locationFilterState)
    }

    function handleInterestsFilter(e) {
        e.preventDefault();

        setInterestsFilterX(!interestsFilterState)
    }

    function handleAgeFilter(e) {
        e.preventDefault();

        setAgeFilterX(!ageFilterState)
    }

    let interests = (
        <div>
            <button id="interestButton">baking</button>
            <button id="interestButton">biking</button>
            <button id="interestButton">concerts</button><br></br>
            <button id="interestButton">cooking</button>
            <button id="interestButton">drinking</button>
            <button id="interestButton">gaming</button><br></br>
            <button id="interestButton">gardening</button>
            <button id="interestButton">hiking</button>
            <button id="interestButton">pilates</button>
            <button id="interestButton">pottery</button>
        </div>
    )

    let listOfInterests = interestsFilterState ? interests : ""

    return (
        <span id="peopleContainer">
        <span id="filterGroup">
            <p id="filterItem"><button id="filterBtn" onClick={handleLocationFilter}>{locationFilterX}</button>same location</p>
            <p id="interestsFilterItem"><button id="filterBtn" onClick={handleInterestsFilter}>{interestsFilterX}</button>common interests<br></br>
            {listOfInterests}
            </p>
            <p id="filterItem"><button id="filterBtn" onClick={handleAgeFilter}>{ageFilterX}</button>same age</p>
        </span>
        <span id="peopleCards">
            {peopleGroup}
        </span>
        </span>
    )
}

export default PeopleContainer