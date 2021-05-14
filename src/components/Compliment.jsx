import React from "react";
import complimentBubble from "../assets/compliment-bubble.png";

function Compliment(props) {
  const [compliment, setCompliment] = React.useState(null);
  const [state, setState] = React.useState(false);
  const randomNumber = Math.floor(Math.random() * 10);

  function handleClick() {
    props.setScore(props.score + randomNumber);
  }

  React.useEffect(() => {
    if (state) {
      let cancelled = false;
      fetch("https://complimentr.com/api")
        .then((res) => res.json())
        .then((data) => {
          if (cancelled) return;
          setCompliment(data.compliment);
          setState(false);
        });
      return () => {
        cancelled = true;
      };
    }
  }, [state]);

  if (compliment) {
    return (
      <React.Fragment>
        <img
          src={complimentBubble}
          alt="tamagochi-compliment-bubble"
          className="tamagochi__complimentBubble"
          width="120px"
          height="120px"
        />
        <h3 className="compliment__heading">{compliment}</h3>
        <button
          className="ButtonContainer__compliment"
          onClick={(e) => {
            setState(true);
            handleClick();
          }}
        >
          Compliment Me
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <button
        className="ButtonContainer__compliment"
        onClick={(e) => {
          setState(true);
          handleClick();
        }}
      >
        Compliment me!
      </button>
    );
  }
}

export default Compliment;
