import React from "react";
import Compliment from "./Compliment";

const USER_URL = "https://api.github.com/users/";

function Profile(props) {
  const [nameData, setName] = React.useState(null);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetch(USER_URL + props.name)
      .then((res) => res.json())
      .then((data) => {
        setName(data);
      });
  }, [props.name]);

  if (!nameData) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h1>Mentor {nameData.login}</h1>
        <img src={nameData.avatar_url} alt={nameData.login + "'s image"} />
        <Compliment score={score} setScore={setScore} />
        <button>Feed Me</button>
        <button>Advise me</button>
      </div>
    );
  }
}

export default Profile;
