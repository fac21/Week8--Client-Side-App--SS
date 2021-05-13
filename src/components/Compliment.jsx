import React from "react";

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

  return (
    <div class="ButtonContainer">
      <h3>{compliment}</h3>
      <p>Your score is {props.score}</p>
      <button
        className="ButtonContainer--compliment"
        onClick={(e) => {
          setState(true);
          handleClick();
        }}
      >
        Give me a compliment
      </button>
    </div>
  );
}

export default Compliment;
