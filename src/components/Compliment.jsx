import React from "react";

function Compliment(props) {
  const [compliment, setCompliment] = React.useState(null);

  function handleClick() {
    props.setScore(props.score + 5);
    fetch("https://complimentr.com/api")
      .then((res) => res.json())
      .then((data) => {
        setCompliment(data.compliment);
      });
  }

  return (
    <div>
      <h3>{compliment}</h3>
      <p>Your score is {props.score}</p>
      <button
        className="compliment"
        onClick={(e) => {
          handleClick();
        }}
      >
        Give me a compliment
      </button>
    </div>
  );
}

export default Compliment;
