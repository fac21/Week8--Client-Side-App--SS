import React from "react";

function AdviceMe(props) {
  const [advice, setAdvice] = React.useState(null);

  const randomNumber = Math.floor(Math.random() * 10);

  function handleClickAdvice() {
    props.setScore(props.score + randomNumber);

  }

  React.useEffect(() => {
    let cancelled = false;
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setAdvice(data.slip.advice);
      });
  
    return () => {
      cancelled = true;
    }
  }, [props.score]);

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
