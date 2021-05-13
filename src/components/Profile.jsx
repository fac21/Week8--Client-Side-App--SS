import React from "react";
import AdviceMe from "./AdviceMe";
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
    if (score >= 50) {
      return <h1>Congratulations {nameData.login} has graduated FAC!</h1>;
    } else {
      return (
        <div>
          <h1>Mentor {nameData.login}</h1>
          <img src={nameData.avatar_url} alt={nameData.login + "'s image"} />
          <Compliment score={score} setScore={setScore} />
          <AdviceMe score={score} setScore={setScore} />
          <FeedMe score={score} setScore={setScore} />
        </div>
      );
    }
  }
}

export default Profile;
