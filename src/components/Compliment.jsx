import React from "react";

function Compliment(props) {
  const [compliment, setCompliment] = React.useState(null);
  const randomNumber = Math.floor(Math.random() * 10);

  function handleClick() {
    props.setScore(props.score + randomNumber);
  }

  React.useEffect(() => {
    let cancelled = false;
    fetch("https://complimentr.com/api")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setCompliment(data.compliment);
      });
    return () => {
      cancelled = true;
    }
  }, [props.score]);

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
