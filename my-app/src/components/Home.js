import React, { useEffect, useState } from "react";
import PeopleContainer from "./PeopleContainer";
import SignUp from "./SignUp";

function Home() {
    const [people, setPeople] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3000/people`)
      .then((r) => r.json())
      .then(data => setPeople(data))
    }, [])
    
    return (
      <div>
        <div>
          <SignUp />
        </div>
        <div>
          <PeopleContainer people={people}/>
        </div>
      </div>
    )
}

export default Home