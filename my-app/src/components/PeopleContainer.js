import React, { useEffect, useState } from "react";
import Person from "./Person"


function PeopleContainer() {

    const [locationFilterState, setLocationFilterX] = useState(false);
    const [interestsFilterState, setInterestsFilterX] = useState(false);
    const [ageFilterState, setAgeFilterX] = useState(false);
    const [people, setPeople] = useState([])
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3000/people`)
      .then((r) => r.json())
      .then(data => setPeople(data))
    }, [])

    const peopleGroup = filteredPeople.map(person => (
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

    let locationFilterX = locationFilterState ? "🔽" : "▶️";
    let interestsFilterX = interestsFilterState ? "🔽" : "▶️";
    let ageFilterX = ageFilterState ? "🔽" : "▶️";

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

// filter options buttons
    let interests = (
        <strong>
            <button id="interestButton" onClick={handleIntClick}>baking</button>
            <button id="interestButton" onClick={handleIntClick}>biking</button>
            <button id="interestButton" onClick={handleIntClick}>concerts</button><br></br>
            <button id="interestButton" onClick={handleIntClick}>cooking</button>
            <button id="interestButton" onClick={handleIntClick}>drinking</button>
            <button id="interestButton" onClick={handleIntClick}>gaming</button><br></br>
            <button id="interestButton" onClick={handleIntClick}>gardening</button>
            <button id="interestButton" onClick={handleIntClick}>hiking</button>
            <button id="interestButton" onClick={handleIntClick}>pilates</button>
            <button id="interestButton" onClick={handleIntClick}>pottery</button>
        </strong>
    )
    let listOfInterests = interestsFilterState ? interests : "";

    let locations = (
        <strong>
            <button id="interestButton" onClick={handleLocClick}>Marina-District</button>
            <button id="interestButton" onClick={handleLocClick}>Mission-District</button>
            <button id="interestButton" onClick={handleLocClick}>Nopa</button><br></br>
            <button id="interestButton" onClick={handleLocClick}>North Beach</button>
            <button id="interestButton" onClick={handleLocClick}>Pacific Heights</button>
            <button id="interestButton" onClick={handleLocClick}>Richmond-District</button><br></br>
            <button id="interestButton" onClick={handleLocClick}>Russian Hill</button>
            <button id="interestButton" onClick={handleLocClick}>Sunset-District</button>
        </strong>
    )
    let listOfLocations = locationFilterState ? locations : "";

    let ages = (
        <strong>
            <button id="interestButton" onClick={handleAgeClick}>20-25</button>
            <button id="interestButton" onClick={handleAgeClick}>26-30</button>
            <button id="interestButton" onClick={handleAgeClick}>31-35</button><br></br>
        </strong>
    )
    let listOfAges = ageFilterState ? ages : "";

// filter functions
    function handleLocClick(e) {
        const peopleLocFilter = people.filter(person => {
            if (person.location === e.target.innerText) {
                return person
            }
        })
        setFilteredPeople(peopleLocFilter);
    }

    function handleIntClick(e) {
        const peopleIntFilter = people.filter(person => {
            if (person.interests[0] === e.target.innerText) {
                return person
            } else if (person.interests[1] === e.target.innerText) {
                return person
            } else if (person.interests[2] === e.target.innerText) {
                return person
            }
        })
        setFilteredPeople(peopleIntFilter);
    }

    function handleAgeClick(e) {
        const peopleAgeFilter = people.filter(person => {
            if (person.ageBracket === e.target.innerText) {
                return person
            } else if (person.ageBracket === e.target.innerText) {
                return person
            } else if (person.ageBracket === e.target.innerText) {
                return person
            }
        })
        setFilteredPeople(peopleAgeFilter);
    }

    return (
        <span id="peopleContainer">
        <span id="filterGroup">
            <span>
                <p id="filterItem"><button id="filterBtn" onClick={handleLocationFilter}>{locationFilterX}</button>location<br></br>
                {listOfLocations}
                </p>
            </span>
            <span>
                <p id="interestsFilterItem"><button id="filterBtn" onClick={handleInterestsFilter}>{interestsFilterX}</button>interests<br></br>
                {listOfInterests}
                </p>
            </span>
            <span>
                <p id="filterItem"><button id="filterBtn" onClick={handleAgeFilter}>{ageFilterX}</button>age<br></br>
                {listOfAges}
                </p>
            </span>
        </span>
        <span id="peopleCards">
            {peopleGroup}
        </span>
        </span>
    )
}

export default PeopleContainer