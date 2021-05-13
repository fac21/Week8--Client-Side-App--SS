import React from "react";

function AdviceMe(props) {
  const [advice, setAdvice] = React.useState(null);

  function handleClickAdvice() {
    props.setScore(props.score + 5);
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