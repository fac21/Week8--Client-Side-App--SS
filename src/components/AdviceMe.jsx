import React from "react";
import adviceBubble from "../assets/Advice-bubble.png";

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

  if (advice) {
    return (
      <React.Fragment>
        <img
          src={adviceBubble}
          alt="tamagochi-advice-bubble"
          className="tamagochi__adviceBubble"
          width="120px"
          height="120px"
        />
        <h3 className="advice__heading">{advice}</h3>
        <button
          className="ButtonContainer__advice"
          onClick={(e) => {
            handleClickAdvice();
            setFetching(true);
          }}
        >
          Advise me!
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <button
        className="ButtonContainer__advice"
        onClick={(e) => {
          handleClickAdvice();
          setFetching(true);
        }}
      >
        Advise me!
      </button>
    );
  }
}

export default AdviceMe;
