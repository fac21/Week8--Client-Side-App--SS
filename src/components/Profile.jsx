import React from "react";
import AdviceMe from "./AdviceMe";
import Compliment from "./Compliment";
import FeedMe from "./FeedMe";
import App from "../assets/App.css";

const USER_URL = "https://api.github.com/users/";

function Profile(props) {
  const [nameData, setName] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [secs, setSecs] = React.useState(15);

  //A timer to decrement the score after 8 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (secs > 0) {
        setSecs(secs - 1);
      } else {
        setScore(score - 10);
        setSecs(5);
        clearInterval(interval);
      }
      clearInterval(interval);
    }, 1000);
  }, [secs]);

  React.useEffect(() => {
    fetch(USER_URL + props.name)
      .then((res) => res.json())
      .then((data) => {
        setName(data);
      });
  }, [props.name]);

  if (!nameData) {
    return <h1>Loading...</h1>;
  } else {
    if (score >= 50) {
      return <h1>Congratulations {nameData.login} has graduated FAC!</h1>;
    } else if (score < 0) {
      return <h1>Sorry, you were too rude, {nameData.login} quit!</h1>;
    } else {
      return (
        <div className="tamagochi">
          <h1>Mentor {nameData.login.toUpperCase()}</h1>
          <img
            src={nameData.avatar_url}
            alt={nameData.login + "'s image"}
            className="tamagochi__screen"
          />
          <p className="scoreText">Your score is {score}</p>

          <div className="ButtonContainer">
            <Compliment score={score} setScore={setScore} />
            <AdviceMe score={score} setScore={setScore} />
            <FeedMe score={score} setScore={setScore} />
          </div>

          <div>
            <p className="timerText">
              {secs} seconds left before we knock some points off!
            </p>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
