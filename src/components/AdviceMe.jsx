import React from "react";

function AdviceMe(props) {
  const [advice, setAdvice] = React.useState(null);

  const randomNumber = Math.floor(Math.random() * 10);

  function handleClickAdvice() {
    props.setScore(props.score + randomNumber);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }

  return (
    <div>
      <h3>{advice}</h3>
      <button
        className="advice"
        onClick={(e) => {
          handleClickAdvice();
        }}
      >
        Give me an advice
      </button>
    </div>
  );
}

export default AdviceMe;
