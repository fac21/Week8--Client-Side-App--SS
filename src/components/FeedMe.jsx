import React from "react";
import Bagel from "../assets/bagel.png";
import Burrito from "../assets/burrito.png";
import Cookie from "../assets/cookie.png";
import Dumpling from "../assets/dumpling.png";
import Lollipop from "../assets/lollipop.png";

function FeedMe(props) {
  const [food, setFood] = React.useState(null);
  let foodItems = [Bagel, Burrito, Cookie, Dumpling, Lollipop];

  const randomScoreNumber = Math.floor(Math.random() * 10);
  
  function handleClickFood() {
    props.setScore(props.score + randomScoreNumber);

    const randomNumber = Math.floor(Math.random() * (foodItems.length - 1));

    setFood(foodItems[randomNumber]);
  }

  return (
    <div>
      <img className="foodEmoji" src={food} alt="pic-of-food-ite" />
      <button
        className="feedMe"
        onClick={(e) => {
          handleClickFood();
        }}
      >
        Feed Me
      </button>
    </div>
  );
}

export default FeedMe;
