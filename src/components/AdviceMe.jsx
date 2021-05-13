import React from "react";

function AdviceMe(props) {
  const [advice, setAdvice] = React.useState(null);
  const [fetching, setFetching] = React.useState(false);
  const randomNumber = Math.floor(Math.random() * 10);

  function handleClickAdvice() {
    props.setScore(props.score + randomNumber);
  }

  React.useEffect(() => {
    if (!fetching) return;
    let cancelled = false;
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setAdvice(data.slip.advice);
        setFetching(false);
      });

    return () => {
      cancelled = true;
    };
  }, [fetching]);

  return (
    <div className="ButtonContainer" >
      <h3>{advice}</h3>
      <button
        className="ButtonContainer--advice"
        onClick={(e) => {
          handleClickAdvice();
          setFetching(true);
        }}
      >
        Give me an advice
      </button>
    </div>
  );
}

export default AdviceMe;
