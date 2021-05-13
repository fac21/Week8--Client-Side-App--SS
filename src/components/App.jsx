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
            <button class="form--btn" type="submit">Hit me!</button>
        </form>
        <aside>
        <h2 class="app--title">How to play?</h2>
        <p>See how nice you can be, in the shortest time!</p>
        </aside>
      </div>
    );
  } else {
    return <Profile name={nameData} />;
  }
}

export default App;
