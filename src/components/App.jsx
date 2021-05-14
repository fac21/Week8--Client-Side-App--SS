import React, { useState } from "react";
import "../assets/App.css";
// import.meta.env.VITE__APP_API_KEY;
import Profile from "./Profile.jsx";

function App() {
  const [nameData, setName] = useState(null);

  if (!nameData) {
    return (
      <div className="app">
        <h1 className="title">FAC Tamagochi</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName(e.target.username.value);
          }}
        >
          <label htmlFor="username">Search</label>
          <input
            id="username"
            aria-label="search for gitHub user"
            aria-required="true"
            name="username"
            type="text"
            placeholder="search for github user"
            size="50"
          />
          <button className="form--btn" type="submit">
            Hit me!
          </button>
        </form>
        <aside>
          <h2 className="app--title">How to play?</h2>
          <p>
            Keep your fac member happy by giving them compliments, advising them
            or feeding them. Be careful! If you ignore them, there’s a timer
            that will knock points off you. Get to 50 points to win! Go below
            zero and your fac member will quit!
          </p>
        </aside>
      </div>
    );
  } else {
    return <Profile name={nameData} />;
  }
}

export default App;
